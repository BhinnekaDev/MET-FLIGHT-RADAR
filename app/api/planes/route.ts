import { NextResponse } from "next/server";

const INDONESIA_BOUNDS = {
  latMin: -6,
  latMax: 6,
  lonMin: 95,
  lonMax: 141,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cachedPlanes: any[] = [];
let lastFetch = 0;

async function fetchOpenSky(retries = 3, delay = 2000) {
  const url = `https://opensky-network.org/api/states/all?lamin=${INDONESIA_BOUNDS.latMin}&lomin=${INDONESIA_BOUNDS.lonMin}&lamax=${INDONESIA_BOUNDS.latMax}&lomax=${INDONESIA_BOUNDS.lonMax}`;

  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000); // timeout 15s
      const res = await fetch(url, {
        signal: controller.signal,
        headers: { "User-Agent": "MyApp/1.0" }, // biar lebih aman
      });
      clearTimeout(timeout);

      if (!res.ok) throw new Error(`OpenSky status ${res.status}`);
      const json = await res.json();

      return (json.states || [])
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.warn(`OpenSky fetch attempt ${i + 1} failed:`, err.message);
      if (i < retries - 1) await new Promise((r) => setTimeout(r, delay));
    }
  }
  return null;
}

export async function GET() {
  const now = Date.now();

  if (now - lastFetch < 15000 && cachedPlanes.length > 0) {
    return NextResponse.json({
      status: "sukses",
      sumber: "cache",
      jumlah: cachedPlanes.length,
      data: cachedPlanes,
    });
  }

  const planes = await fetchOpenSky();

  if (planes) {
    cachedPlanes = planes;
    lastFetch = now;
    return NextResponse.json({
      status: "sukses",
      sumber: "fresh",
      jumlah: planes.length,
      data: planes,
    });
  }

  return NextResponse.json({
    status: "sukses",
    sumber: "cache",
    pesan: cachedPlanes.length
      ? "Fetch OpenSky gagal, pakai data terakhir"
      : "Fetch OpenSky gagal, cache kosong",
    jumlah: cachedPlanes.length,
    data: cachedPlanes,
  });
}
