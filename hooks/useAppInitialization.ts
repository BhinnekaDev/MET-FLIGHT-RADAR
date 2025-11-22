import { useState, useEffect } from "react";
import { UseAppInitializationReturn } from "@/interfaces/use-app-initialization-return.interface";

export function useAppInitialization(): UseAppInitializationReturn {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return {
    isInitialized,
  };
}
