import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cache: any[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 30 * 1000;

const INDONESIA_BOUNDS = {
  latMin: -10.5,
  latMax: 5.5,
  lonMin: 95,
  lonMax: 141,
};

export async function GET() {
  try {
    const now = Date.now();
    if (cache && now - lastFetchTime < CACHE_DURATION) {
      return NextResponse.json({
        status: "sukses",
        sumber: "cache",
        jumlah: cache.length,
        data: cache,
      });
    }

    const url = `https://opensky-network.org/api/states/all?lamin=${INDONESIA_BOUNDS.latMin}&lomin=${INDONESIA_BOUNDS.lonMin}&lamax=${INDONESIA_BOUNDS.latMax}&lomax=${INDONESIA_BOUNDS.lonMax}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Gagal fetch OpenSky (status ${res.status})`);

    const json = await res.json();

    const hasil = (json.states || [])
      .filter(
        (p: unknown[]) =>
          typeof p[5] === "number" &&
          typeof p[6] === "number" &&
          p[5] >= INDONESIA_BOUNDS.lonMin &&
          p[5] <= INDONESIA_BOUNDS.lonMax &&
          p[6] >= INDONESIA_BOUNDS.latMin &&
          p[6] <= INDONESIA_BOUNDS.latMax
      )
      .map((p: unknown[]) => ({
        icao24: p[0],
        callsign: (p[1] as string)?.trim() || "Unknown",
        origin_country: p[2],
        longitude: p[5],
        latitude: p[6],
        baro_altitude: p[7],
        velocity: p[9],
        true_track: p[10],
        on_ground: p[8],
      }));

    cache = hasil;
    lastFetchTime = now;

    return NextResponse.json({
      status: "sukses",
      sumber: "fresh",
      jumlah: hasil.length,
      data: hasil,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json(
      { status: "gagal", pesan: err.message },
      { status: 500 }
    );
  }
}
