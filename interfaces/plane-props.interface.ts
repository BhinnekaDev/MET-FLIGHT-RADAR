export interface Plane {
  icao24: string;
  callsign: string;
  latitude: number;
  velocity: number;
  longitude: number;
  on_ground: boolean;
  true_track: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  last_contact: number;
  time_position: number;
  vertical_rate: number;
  origin_country: string;
  baro_altitude: number | null;
}
