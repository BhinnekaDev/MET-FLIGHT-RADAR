export interface PlaneData {
  icao24: string;
  callsign?: string;
  origin_country?: string;
  latitude: number;
  longitude: number;
  baro_altitude?: number;
  velocity?: number;
  true_track?: number;
  on_ground?: boolean;
}

export interface MapProps {
  planes?: PlaneData[];
  darkMode: boolean;
  loading?: boolean;
}
