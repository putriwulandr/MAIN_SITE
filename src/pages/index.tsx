import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Landing from "@/landing";
import MaintenancePage from "@/maintenance";

export default function Home() {
  return (
    <>
      <SpeedInsights />

      {/* <Landing /> */}

      <MaintenancePage />
    </>
  );
}
