import { LatLngExpression } from "leaflet";

export const MAP_CONSTANTS = {
  DEFAULT_CENTER: [-2.5, 118] as LatLngExpression,
  TILE_LAYERS: {
    DARK: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    LIGHT: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  ATTRIBUTIONS: {
    DARK: '&copy; <a href="https://www.openstreetmap.org/">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    LIGHT: "&copy; OpenStreetMap contributors",
  },
  MARKER: {
    SIZE: [32, 32] as [number, number],
    ANCHOR: [16, 16] as [number, number],
    POPUP_ANCHOR: [0, -10] as [number, number],
  },
} as const;
