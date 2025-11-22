/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType } from "react";

export interface StatCardProps {
  stat: {
    label: string;
    value: string;
    unit?: string;
    icon: ComponentType<any>;
    color: "cyan" | "purple" | "pink";
  };
  darkMode: boolean;
  isLoaded: boolean;
  index: number;
}
