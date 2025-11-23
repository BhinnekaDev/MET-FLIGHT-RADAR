import { LoadingIndicatorProps } from "@/interfaces/loading-indicator-props.interface";

export default function LoadingIndicator({ loading }: LoadingIndicatorProps) {
  if (!loading) return null;

  return (
    <div className="absolute top-2 left-2 bg-black/50 text-white p-1 rounded text-xs z-50">
      Memuat Pesawat...
    </div>
  );
}
