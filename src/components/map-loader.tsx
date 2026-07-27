"use client";
import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("@/components/location-map").then((module) => module.LocationMap), { ssr: false, loading: () => <div className="location-map location-map__placeholder"><strong>Mapa de ubicación</strong><span>Preparando mapa…</span></div> });
export function MapLoader({ compact = false }: { compact?: boolean }) { return <LocationMap compact={compact} />; }
