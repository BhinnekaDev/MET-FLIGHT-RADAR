export interface QuickActionButtonProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: any;
  index: number;
  darkMode: boolean;
  isSelected: boolean;
  onActionClick: (actionId: string) => void;
}
