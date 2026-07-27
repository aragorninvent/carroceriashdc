# Carrocerías HDC-Tiberi

Sitio corporativo de Carrocerías HDC-Tiberi, desarrollado con Next.js, TypeScript y pnpm. Incluye páginas comerciales, contenido SEO, formulario de cotización y mapas de ubicación de carga diferida.

## Requisitos

- Node.js 24.x
- pnpm 11.17.0

## Uso local

```bash
pnpm install --frozen-lockfile
pnpm dev --port 3003
```

Comprobaciones antes de publicar:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Estructura

- `src/app`: rutas, metadata, sitemap, robots y endpoint de cotización.
- `src/components`: bloques visuales reutilizables, formulario y mapas.
- `src/data`: datos corporativos, servicios, proyectos e imágenes.
- `docs`: guías de operación, contenido, despliegue, SEO y pendientes.

## Configuración

Copie `.env.example` a `.env.local` para desarrollo. Nunca suba secretos al repositorio. Consulte [Environment](docs/ENVIRONMENT.md) y [Deployment](docs/DEPLOYMENT.md).

## Información pendiente antes de producción

Razón social, RUT, correo público y de privacidad, horario, redes sociales, fotografías definitivas, certificaciones, garantías, plazos y remitente verificado en Resend.

## Guías

- [Contenido](docs/CONTENT.md)
- [Mapa](docs/MAP.md)
- [Imágenes](docs/IMAGE-REPLACEMENT.md)
- [SEO](docs/SEO-CHECKLIST.md)
- [Pendientes conocidos](docs/KNOWN-ISSUES.md)
