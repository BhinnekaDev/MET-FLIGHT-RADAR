"use client";

import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { MapProps } from "@/interfaces/map-props.interface";

const position: LatLngExpression = [-3.8, 102.265];

export default function Map({ darkMode }: MapProps) {
  const tileUrl = darkMode
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  const attribution = darkMode
    ? '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
    : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  return (
    <MapContainer
      center={position}
      zoomControl={false}
      zoom={7}
      className="h-full w-full"
    >
      <TileLayer url={tileUrl} attribution={attribution} />
    </MapContainer>
  );
}
