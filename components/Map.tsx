"use client";

import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import PlanePopup from "@/components/map/PlanePopup";
import MapTileLayer from "@/components/map/MapTileLayer";
import { MAP_CONSTANTS } from "@/constants/map.constants";
import { MapContainer, Marker, Popup } from "react-leaflet";
import { MapProps } from "@/interfaces/map-props.interface";
import { createPlaneSVGIcon } from "@/utils/plane-icon.utils";
import LoadingIndicator from "@/components/map/LoadingIndicator";

export default function Map({
  planes = [],
  darkMode,
  loading = false,
}: MapProps) {
  const mapCenter: LatLngExpression = planes.length
    ? ([planes[0].latitude, planes[0].longitude] as LatLngExpression)
    : MAP_CONSTANTS.DEFAULT_CENTER;

  return (
    <MapContainer center={mapCenter} zoom={5} className="h-full w-full">
      <MapTileLayer darkMode={darkMode} />

      {planes.map((plane) => (
        <Marker
          key={plane.icao24}
          position={[plane.latitude, plane.longitude] as LatLngExpression}
          icon={createPlaneSVGIcon(plane.true_track)}
        >
          <Popup>
            <PlanePopup plane={plane} />
          </Popup>
        </Marker>
      ))}

      <LoadingIndicator loading={loading} />
    </MapContainer>
  );
}
