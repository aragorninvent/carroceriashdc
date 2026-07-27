"use client";
import dynamic from "next/dynamic";
import { MapPlaceholder } from "@/components/map-placeholder";

const LocationMap = dynamic(() => import("@/components/location-map").then((module) => module.LocationMap), { ssr: false, loading: () => <MapPlaceholder standalone /> });
const CompactLocationMap = dynamic(() => import("@/components/location-map").then((module) => module.LocationMap), { ssr: false, loading: () => <MapPlaceholder standalone compact /> });
export function MapLoader({ compact = false }: { compact?: boolean }) { return compact ? <CompactLocationMap compact /> : <LocationMap />; }
