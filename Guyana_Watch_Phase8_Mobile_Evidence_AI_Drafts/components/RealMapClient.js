"use client";
import dynamic from "next/dynamic";

const RealGuyanaMap = dynamic(
  () => import("@/components/RealGuyanaMap"),
  {
    ssr: false,
    loading: () => <div className="mapLoading">Loading real Guyana map…</div>
  }
);

export default RealGuyanaMap;
