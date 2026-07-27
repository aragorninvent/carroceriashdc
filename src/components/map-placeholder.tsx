export function MapPlaceholder({ standalone = false, compact = false }: { standalone?: boolean; compact?: boolean }) {
  const className = standalone ? `location-map${compact ? " compact" : ""} location-map__placeholder` : "location-map__placeholder";
  return <div className={className}><strong>Mapa de ubicación</strong><span>Se carga al acercarse a esta sección.</span></div>;
}
