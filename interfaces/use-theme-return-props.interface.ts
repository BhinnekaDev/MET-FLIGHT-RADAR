export interface UseThemeReturn {
  darkMode: boolean;
  themeClasses: string;
  isThemeLoaded: boolean;
  toggleDarkMode: () => void;
}
