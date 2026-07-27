# PRD: Mapa y página de contacto

## Contexto

El sitio muestra ubicación con Leaflet y teselas OpenStreetMap. Inicio integra mapa compacto dentro de banda de ubicación. Contacto inserta formulario y dirección en ruta, pero mapa se añade desde `RootLayout` mediante componente cliente dependiente de `usePathname`.

| Área | Estado | Evidencia |
| --- | --- | --- |
| Leaflet en Inicio | Correcto en arquitectura | Carga dinámica sin SSR, CSS Leaflet global, altura explícita, marcador y enlace alternativo. |
| Leaflet en Contacto | Integración defectuosa | Mapa vive fuera de contenido de `/contacto`, se inserta tras `<main>` durante hidratación y no pertenece al bloque formulario. |
| Coordenadas y datos | Pendiente validación visual | Código y documentación usan `-33.415939374433954, -70.68921419319099` y Av. Jorge Hirmas 3131, Renca. Contrastar con enlace oficial Google Maps. |
| Calidad compilación | Correcta | `tsc --noEmit`, ESLint y build producción finalizan sin errores. |

## Problema

En `/contacto`, componentes de ubicación cargan fuera de contexto del formulario y después de hidratar cliente. Resultado: composición inconsistente, salto de layout y experiencia confusa. Dirección queda junto a formulario, pero mapa se muestra en sección separada después de `main`; además existen dos estados posibles de carga: `Preparando mapa...` y placeholder por proximidad.

Inicio no presenta fallo estructural, pero comparte componente y debe mantener comportamiento durante corrección.

## Objetivo

Mostrar mapa correcto, estable y accesible en Inicio y Contacto. En Contacto, unir dirección, formulario y mapa dentro de composición propia de ruta. Eliminar inserción tardía dependiente de pathname desde layout.

## Alcance

- Mantener Leaflet, React Leaflet y OpenStreetMap.
- Mantener carga diferida por proximidad, carga dinámica sin SSR, atribución OpenStreetMap y `scrollWheelZoom={false}`.
- Mover renderizado de mapa Contacto desde `RootLayout` a ruta o componente de Contacto.
- Definir composición responsive: datos de dirección y formulario en bloque principal; mapa asociado en flujo definido, no inyectado globalmente.
- Unificar placeholder para evitar mensajes competidores y reservar altura final de mapa.
- Verificar coordenadas, dirección y enlace Google Maps contra ubicación oficial.
- Aplicar estilos escritorio y móvil sin desplazamiento acumulado apreciable.

## Fuera de alcance

- Cambio de proveedor cartográfico.
- Geocodificación en tiempo de ejecución.
- Cambios a endpoint de cotizaciones o validación de formulario.
- Tracking, analítica o rutas nuevas.

## Requisitos funcionales

| ID | Requisito |
| --- | --- |
| RF-01 | Inicio muestra mapa compacto con marcador, popup, dirección visible y enlace Google Maps. |
| RF-02 | Contacto muestra dirección, formulario compacto y mapa bajo estructura propia de ruta; ningún componente global decide mostrarlo según pathname. |
| RF-03 | Mapa usa coordenadas aprobadas de ubicación oficial y muestra dirección de `company`. |
| RF-04 | Mapa no inicializa en servidor ni solicita teselas antes de aproximarse 240 px al viewport. |
| RF-05 | Antes de cargar y durante importación dinámica existe único placeholder visual, con misma altura de mapa final. |
| RF-06 | Mapa conserva atribución OpenStreetMap, controles operativos y rueda de mouse no captura desplazamiento de página. |
| RF-07 | En móvil, formulario, dirección y mapa se apilan sin solapamiento, overflow horizontal ni espacio vacío inesperado. |
| RF-08 | En escritorio, mapa Contacto se percibe como continuación de formulario y dirección, no como contenido global entre página y footer. |

## Requisitos no funcionales

- Sin errores de hidratación, consola ni build.
- Reservar 320 px para mapa estándar y 280 px para compacto, o medida final equivalente aplicada a placeholder y contenedor.
- Mantener alternativa no cartográfica: dirección textual y enlace Google Maps con `target="_blank"` y `rel="noreferrer"`.
- Preservar `aria-label` del mapa y contraste de placeholder.
- Ejecutar TypeScript, ESLint y build producción.

## Diseño técnico propuesto

1. Quitar `ContactMap` de `src/app/layout.tsx`.
2. Renderizar mapa directamente en rama `contact` de `src/app/[...slug]/page.tsx`, cerca de formulario y dirección.
3. Mantener `MapLoader` como único límite `ssr: false`.
4. Cambiar fallback de `dynamic()` y placeholder de `LocationMap` por marcado único reutilizado, con misma clase y altura.
5. Ajustar CSS Contacto separando responsabilidades de `.contact-band` de Inicio y bloque específico Contacto.
6. Confirmar coordenadas contra URL oficial antes de fijarlas; actualizar código y `docs/MAP.md` solo si difieren.

## Criterios aceptación

- [ ] `/` muestra mapa compacto sin error consola, marcador visible, altura correcta y enlace Google Maps funcional.
- [ ] `/contacto` no depende de `usePathname` ni renderiza mapa desde layout global.
- [ ] `/contacto` muestra única reserva de carga; no aparecen simultáneamente `Preparando mapa...` y `Se carga al acercarse a esta sección.`.
- [ ] Navegación directa, recarga y navegación cliente a `/contacto` no producen contenido desplazado ni hidratación errónea.
- [ ] Mapa Contacto carga solo al aproximarse viewport, con atribución visible y rueda de mouse desactivada.
- [ ] Dirección, teléfono y vínculo Google Maps coinciden con ubicación aprobada.
- [ ] Pruebas visuales en 1440 px, 768 px y 375 px sin solapamiento, corte ni overflow horizontal.
- [ ] `node_modules/.bin/tsc --noEmit`, `node_modules/.bin/eslint .` y `node_modules/.bin/next build` pasan.

## Plan validación

1. Confirmar punto de enlace Google Maps y registrar coordenadas aprobadas.
2. Probar Inicio y Contacto en escritorio y móvil; inspeccionar red para confirmar teselas solo al acercarse a cada mapa.
3. Probar recarga directa de `/contacto` y transición interna desde navegación.
4. Revisar consola por errores Leaflet e hidratación.
5. Ejecutar validaciones estáticas y build.

## Riesgos

| Riesgo | Mitigación |
| --- | --- |
| Punto mostrado no coincide con planta | Confirmación manual contra enlace oficial antes de despliegue. |
| Cambio de composición afecta Inicio | Mantener `MapLoader` compartido y cubrir ambas rutas en validación. |
| Placeholder provoca salto visual | Usar misma clase y altura para importación dinámica y carga por intersección. |
| Teselas OpenStreetMap no disponibles temporalmente | Mantener dirección y enlace Google Maps como alternativa funcional. |

## Archivos previstos

- `src/app/layout.tsx`
- `src/app/[...slug]/page.tsx`
- `src/components/map-loader.tsx`
- `src/components/location-map.tsx`
- `src/components/contact-map.tsx` (eliminar o reemplazar)
- `src/app/leaflet.css`
- `src/app/map-layout.css`
- `src/data/company.ts` y `docs/MAP.md` solo si validación oficial modifica punto.
