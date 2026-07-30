# Variables de entorno

Use `.env.example` como referencia. Los valores reales se configuran en Hostinger y no se suben a GitHub.

| Variable | Uso | Obligatoria |
|---|---|---|
| `RESEND_API_KEY` | Credencial privada para enviar cotizaciones. | Sí, para envío real |
| `RESEND_FROM_EMAIL` | Remitente con dominio verificado en Resend. | Sí, para envío real |
| `QUOTE_RECIPIENT_EMAIL` | Destinatario de las cotizaciones. | Sí |
| `NEXT_PUBLIC_SITE_URL` | Dominio canónico del sitio. | Sí |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número WhatsApp sin `+`. | Sí |
| `NEXT_PUBLIC_GOOGLE_MAPS_URL` | Enlace para abrir la ubicación en Google Maps. | Sí |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | ID público de medición Google Analytics 4. | Sí |
| `TURNSTILE_SECRET_KEY` | Clave privada de Cloudflare Turnstile. | Solo si se activa |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Clave pública de Turnstile. | Solo si se activa |

Las variables con prefijo `NEXT_PUBLIC_` quedan disponibles en el navegador: nunca coloque API keys ni secretos en ellas.
