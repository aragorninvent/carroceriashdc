# Despliegue en Hostinger

En un plan con Node.js: configure Node LTS, defina las variables del archivo `.env.example`, ejecute `pnpm install --frozen-lockfile`, `pnpm build` y `pnpm start`. Conecte el dominio y active HTTPS. Compruebe el formulario con un remitente verificado en Resend.

Un plan sin Node.js no puede alojar esta aplicación SSR directamente. En ese caso se debe usar un plan compatible, una exportación estática con endpoint externo, o rediseñar el despliegue.
