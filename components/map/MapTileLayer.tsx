import { TileLayer } from "react-leaflet";
import { MAP_CONSTANTS } from "@/constants/map.constants";
import { MapTileLayerProps } from "@/interfaces/map-tile-layer-props.interface";

export default function MapTileLayer({ darkMode }: MapTileLayerProps) {
  const tileUrl = darkMode
    ? MAP_CONSTANTS.TILE_LAYERS.DARK
    : MAP_CONSTANTS.TILE_LAYERS.LIGHT;

  const attribution = darkMode
    ? MAP_CONSTANTS.ATTRIBUTIONS.DARK
    : MAP_CONSTANTS.ATTRIBUTIONS.LIGHT;

  return <TileLayer url={tileUrl} attribution={attribution} />;
}
