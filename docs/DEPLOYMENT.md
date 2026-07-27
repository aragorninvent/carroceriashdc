# Despliegue en Hostinger

## Requisitos del plan

Use un plan con Node.js 24.x. Este proyecto usa pnpm 11.17.0, definido en `package.json`; no modifique esa versión desde Hostinger.

## Configuración

1. Conecte el repositorio de GitHub y seleccione la rama `main`.
2. Configure Node.js 24.x.
3. Añada las variables descritas en [ENVIRONMENT.md](ENVIRONMENT.md).
4. Use los siguientes comandos:

```text
Instalación: pnpm install --frozen-lockfile
Build: pnpm build
Inicio: pnpm start
```

5. Conecte el dominio, active HTTPS y confirme que el proceso se mantenga activo.
6. Pruebe una cotización con un remitente verificado de Resend y revise el correo receptor.

## Verificación posterior

- Inicio, Contacto, Cotizar y mapa cargan correctamente.
- `https://dominio/sitemap.xml` y `https://dominio/robots.txt` responden.
- Enlaces de teléfono, WhatsApp y Google Maps funcionan.
- No hay secretos visibles en el repositorio ni en el navegador.

## Reversión

Si un despliegue falla, vuelva a desplegar el último commit correcto desde Hostinger o seleccione la revisión anterior de la rama `main`. No edite archivos generados directamente en el servidor.
