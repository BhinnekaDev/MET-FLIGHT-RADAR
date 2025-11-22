export interface MenuItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
  index: number;
  darkMode: boolean;
  onItemClick: () => void;
  mode: "monitoring" | "analysis";
}
