# Mapa de ubicación

El mapa usa Leaflet, React Leaflet y teselas de OpenStreetMap. Se muestra en Inicio y Contacto, siempre acompañado de dirección visible y un enlace alternativo a Google Maps.

## Ubicación oficial

- Dirección: Av. Jorge Hirmas 3131, Renca, Región Metropolitana.
- Coordenadas: `-33.415939374433954, -70.68921419319099`.

Para cambiar el punto, edite `src/components/location-map.tsx`. No use geocodificación en tiempo de ejecución.

## Rendimiento y accesibilidad

El componente espera hasta que la sección esté cerca del viewport antes de crear el mapa y descargar teselas. Mantenga `scrollWheelZoom` desactivado para no capturar el desplazamiento de la página y conserve la atribución de OpenStreetMap.

## Verificación

Compruebe Inicio y Contacto en escritorio y móvil. El mapa debe tener un marcador visible, altura suficiente, alternativa textual y enlace funcional a Google Maps.
