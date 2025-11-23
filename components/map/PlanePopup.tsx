import { PlanePopupProps } from "@/interfaces/plane-popup-props.interface";

export default function PlanePopup({ plane }: PlanePopupProps) {
  return (
    <div className="text-sm space-y-1">
      <strong>{plane.callsign || "—"}</strong> <br />
      <span>
        <strong>Negara Asal:</strong> {plane.origin_country || "—"}
      </span>{" "}
      <br />
      <span>
        <strong>Altitud Barometrik:</strong>{" "}
        {plane.baro_altitude ? `${plane.baro_altitude.toFixed(2)} m` : "—"}
      </span>{" "}
      <br />
      <span>
        <strong>Kecepatan:</strong>{" "}
        {plane.velocity ? `${plane.velocity.toFixed(1)} m/s` : "—"}
      </span>{" "}
      <br />
      <span>
        <strong>Arah Terbang (Track):</strong>{" "}
        {plane.true_track ? `${plane.true_track.toFixed(0)}°` : "—"}
      </span>{" "}
      <br />
      <span>
        <strong>Latitude:</strong> {plane.latitude ?? "—"}
      </span>{" "}
      <br />
      <span>
        <strong>Longitude:</strong> {plane.longitude ?? "—"}
      </span>{" "}
      <br />
      <span>
        <strong>Status di Darat:</strong> {plane.on_ground ? "Ya" : "Tidak"}
      </span>{" "}
    </div>
  );
}
