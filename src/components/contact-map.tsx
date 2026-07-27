"use client";
import { usePathname } from "next/navigation";
import { MapLoader } from "@/components/map-loader";

export function ContactMap() {
  const pathname = usePathname();
  if (pathname !== "/contacto") return null;
  return <section className="section contact-map-section"><div className="container"><p className="eyebrow">Cómo llegar</p><h2>Visítenos en Renca</h2><MapLoader /></div></section>;
}
