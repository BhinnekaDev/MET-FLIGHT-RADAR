import { DivIcon } from "leaflet";
import { PLANE_SVG } from "@/constants/svg.constants";
import { MAP_CONSTANTS } from "@/constants/map.constants";

export function createPlaneSVGIcon(track: number | null = 0): DivIcon {
  const angle = track ?? 0;

  return new DivIcon({
    html: `
      <div 
        style="transform: rotate(${angle}deg); 
               width: 30px; 
               height: 30px; 
               display: flex; 
               align-items: center; 
               justify-content: center"
      >
        ${PLANE_SVG}
      </div>
    `,
    className: "plane-marker",
    iconSize: MAP_CONSTANTS.MARKER.SIZE,
    iconAnchor: MAP_CONSTANTS.MARKER.ANCHOR,
    popupAnchor: MAP_CONSTANTS.MARKER.POPUP_ANCHOR,
  });
}
