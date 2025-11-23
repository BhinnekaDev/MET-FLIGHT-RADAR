"use client";

import toast from "react-hot-toast";
import { useState, useEffect, useCallback } from "react";
import { Plane } from "@/interfaces/plane-props.interface";

let lastFetch = 0;
let cachedPlanes: Plane[] = [];

export function usePlanes(autoFetch = false) {
  const [planes, setPlanes] = useState<Plane[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPlanes = useCallback(async () => {
    const now = Date.now();
    if (now - lastFetch < 30000 && cachedPlanes.length > 0) {
      setPlanes([...cachedPlanes]);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/planes");
      if (!res.ok) throw new Error("Failed to fetch planes");

      const data = await res.json();
      cachedPlanes = data.data || [];
      lastFetch = now;

      setPlanes([...cachedPlanes]);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Hook fetch error:", err);
      toast.error(err.message || "Failed to fetch planes");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!autoFetch) return;
    fetchPlanes();
    const interval = setInterval(fetchPlanes, 30000);
    return () => clearInterval(interval);
  }, [fetchPlanes, autoFetch]);

  return { planes, loading, fetchPlanes };
}
