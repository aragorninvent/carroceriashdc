# Gestión de contenido

## Datos corporativos

Edite `src/data/company.ts` para nombre, teléfono, dirección, correo de cotizaciones, enlace de Google Maps y dominio. No repita estos datos directamente en componentes.

## Servicios, carrocerías y beneficios

Edite `src/data/content.ts`. Mantenga redacción verificable: no agregue clientes, certificaciones, plazos ni especificaciones que la empresa no haya confirmado.

## Páginas y blog

Las páginas comerciales y artículos iniciales se definen en `src/app/[...slug]/page.tsx`. Cada página debe mantener título, introducción y metadata únicos.

## Imágenes

Las referencias provisionales están en `src/data/site-images.ts`. Antes de publicar fotografías definitivas, obtenga autorización de uso y actualice texto alternativo, dimensiones y nota de reemplazo.

## Cotizaciones

Los campos y validación viven en `src/lib/quote.ts`; la interfaz está en `src/components/quote-form.tsx`. Revise ambos al cambiar requisitos del formulario.
