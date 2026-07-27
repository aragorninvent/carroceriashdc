# PRD --- Sitio web corporativo Carrocerías HDC-Tiberi

## 1. Resumen del proyecto

Desarrollar un sitio web corporativo moderno, rápido y optimizado para
buscadores para **Carrocerías HDC-Tiberi**, empresa chilena dedicada a
la fabricación, montaje, instalación, reparación y mantención de
carrocerías para camiones.

La empresa opera desde 2015 y atiende a pequeñas, medianas y grandes
empresas de transporte en Chile.

Sus principales áreas de negocio son:

-   Fabricación propia de carrocerías.
-   Importación de carrocerías desde proveedores de Brasil.
-   Carrocerías para carga general.
-   Carrocerías para transporte refrigerado.
-   Equipamiento para transporte en frío.
-   Montaje e instalación sobre chasis.
-   Reparación y mantención de carrocerías.
-   Adaptaciones y trabajos especiales.

El sitio debe funcionar como plataforma corporativa, catálogo de
soluciones y canal de captación de cotizaciones.

------------------------------------------------------------------------

## 2. Objetivos del proyecto

### 2.1 Objetivo comercial

Generar solicitudes de cotización provenientes de empresas y
propietarios de camiones que necesiten:

-   Fabricar una carrocería nueva.
-   Instalar una carrocería sobre un chasis.
-   Reparar o mantener una carrocería existente.
-   Implementar soluciones para carga refrigerada.
-   Evaluar una solución especial de transporte.

### 2.2 Objetivo de posicionamiento

Construir visibilidad orgánica en Chile para términos como:

-   fabricación de carrocerías
-   fabricación de carrocerías para camiones
-   carrocerías para camiones
-   carrocerías en Chile
-   fabricantes de carrocerías en Chile
-   mantención de carrocerías
-   reparación de carrocerías para camiones
-   carrocerías para carga general
-   carrocerías refrigeradas
-   carrocerías frigoríficas
-   equipamiento para transporte en frío
-   montaje de carrocerías para camiones
-   carrocerías para transporte de carga

### 2.3 Objetivo de experiencia

Transmitir:

-   Experiencia.
-   Capacidad técnica.
-   Fabricación nacional.
-   Respaldo y postventa.
-   Atención directa.
-   Soluciones adaptadas a cada operación.
-   Confianza para clientes empresariales.

------------------------------------------------------------------------

## 3. Público objetivo

### Segmento principal

Empresas chilenas que operan camiones para:

-   Transporte de carga general.
-   Distribución.
-   Logística.
-   Alimentos.
-   Productos refrigerados o congelados.
-   Retail.
-   Construcción.
-   Industria.
-   Servicios técnicos.
-   Última milla.
-   Operaciones especiales.

### Segmento secundario

-   Transportistas independientes.
-   Dueños de uno o más camiones.
-   Empresas que necesitan renovar carrocerías.
-   Empresas que compraron un chasis y necesitan carrozarlo.
-   Operadores que requieren reparar o reacondicionar equipos
    existentes.
-   Empresas que evalúan una solución refrigerada.

------------------------------------------------------------------------

## 4. Información corporativa

**Nombre comercial:** Carrocerías HDC-Tiberi

**Dominio principal:** https://carroceriastiberi.cl

**Año de inicio:** 2015

**Dirección:** Av. Jorge Hirmas 3131, Renca, Región Metropolitana, Chile

**Código postal:** 8641092

**Teléfono y WhatsApp:** +56 9 9313 5317

**Correo receptor de cotizaciones:** <janwrojas@hdc-tiberi.com>

**Mapa:** https://maps.app.goo.gl/4FnzLz8iM7FXrguC6

**Color principal:** Hexadecimal: `#07527C`

**Logo para fondo oscuro:**
https://web.archive.org/web/20181029033322im\_/http://www.hdc-tiberi.com/wp-content/uploads/2017/05/logo-hdc-tiberi-footer.png

El logo remoto debe descargarse e incorporarse al repositorio. No debe
depender de Web Archive en producción.

------------------------------------------------------------------------

## 5. Stack tecnológico

### 5.1 Framework

-   Next.js 16, usando App Router.
-   React 19.
-   TypeScript en modo estricto.
-   Node.js 24 LTS o la versión LTS compatible más reciente disponible
    en Hostinger.
-   Gestor de paquetes: pnpm.

### 5.2 Estilos y sistema visual

-   Tailwind CSS 4.
-   shadcn/ui como base de componentes.
-   Base UI o Radix para primitivas accesibles, según la configuración
    estable de shadcn/ui.
-   Variables CSS para los design tokens.
-   `class-variance-authority` para variantes de componentes.
-   `tailwind-merge` y `clsx` para composición de clases.
-   Lucide React para iconografía.

### 5.3 Formularios

-   React Hook Form.
-   Zod para validación compartida entre cliente y servidor.
-   Server Action o Route Handler propio.
-   Resend para envío de correos.
-   React Email para la plantilla de notificación.
-   Campo honeypot.
-   Control de frecuencia básico por IP.
-   Validación de servidor obligatoria.
-   Cloudflare Turnstile opcional y preparado para activarse mediante
    variables de entorno.

### 5.4 Utilidades

-   `next/font` para fuentes.
-   `next/image` para optimización de imágenes.
-   `sharp` si es requerido por el entorno.
-   `date-fns` solamente si aparece una necesidad real.
-   `sonner` para notificaciones de éxito y error.
-   `embla-carousel-react` únicamente para galerías o testimonios, si se
    implementan.
-   `@vercel/analytics` no debe utilizarse salvo aprobación posterior.
-   Preparar Google Tag Manager y GA4 mediante variables de entorno, sin
    bloquear la carga inicial.

### 5.5 Testing y calidad

-   ESLint.
-   Prettier.
-   TypeScript strict.
-   Vitest para funciones y validaciones.
-   Playwright para flujos críticos.
-   Lighthouse CI opcional.
-   `next build` obligatorio antes de cada entrega.
-   Validador W3C para revisar errores relevantes de HTML.
-   Google Rich Results Test para datos estructurados compatibles.
-   Schema Markup Validator para revisar JSON-LD.

------------------------------------------------------------------------

## 6. Arquitectura recomendada

La aplicación debe ser principalmente renderizada en servidor o generada
estáticamente.

Evitar convertir componentes en Client Components salvo que exista una
necesidad concreta de interacción.

### Estrategia de renderizado

-   Páginas corporativas: generación estática.
-   Páginas de servicios: generación estática.
-   Artículos: generación estática desde archivos MDX o contenido
    TypeScript.
-   Formulario: Server Action o Route Handler.
-   Sitemap: generado mediante `app/sitemap.ts`.
-   Robots: generado mediante `app/robots.ts`.
-   Manifest: generado mediante `app/manifest.ts`.
-   Open Graph: metadata nativa de Next.js.
-   Datos estructurados: JSON-LD renderizado en servidor.

### Restricción de despliegue

La aplicación debe poder ejecutarse con:

``` bash
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

No depender de funciones exclusivas de Vercel.

No usar:

-   Vercel KV.
-   Vercel Blob.
-   Edge Functions exclusivas.
-   ISR dependiente de infraestructura propietaria.
-   Middleware que requiera Edge Runtime.
-   Servicios pagos no especificados.

------------------------------------------------------------------------

## 7. Estructura de navegación

### Menú principal

1.  Inicio
2.  Carrocerías
3.  Servicios
4.  Transporte en frío
5.  Proyectos
6.  Nosotros
7.  Blog
8.  Contacto

CTA destacado:

**Solicitar cotización**

En dispositivos móviles, incluir el CTA dentro del menú.

------------------------------------------------------------------------

## 8. Arquitectura de URLs

### Páginas principales

-   `/`
-   `/carrocerias`
-   `/carrocerias/carga-general`
-   `/carrocerias/refrigeradas`
-   `/carrocerias/proyectos-especiales`
-   `/servicios`
-   `/servicios/fabricacion-de-carrocerias`
-   `/servicios/montaje-e-instalacion`
-   `/servicios/mantencion-de-carrocerias`
-   `/servicios/reparacion-de-carrocerias`
-   `/transporte-en-frio`
-   `/proyectos`
-   `/nosotros`
-   `/blog`
-   `/contacto`
-   `/cotizar`

### Contenidos SEO iniciales

-   `/blog/mejores-fabricantes-de-carrocerias-para-camiones-en-chile`
-   `/blog/como-elegir-una-carroceria-para-camion`
-   `/blog/diferencias-carroceria-carga-general-refrigerada`
-   `/blog/cuando-realizar-mantencion-carroceria-camion`
-   `/blog/que-considerar-antes-de-carrozar-un-camion`

### Páginas legales

-   `/terminos-y-condiciones`
-   `/politica-de-privacidad`
-   `/politica-de-cookies`

Las páginas legales deben estar enlazadas desde el pie de página, pero
no necesitan aparecer en el menú principal.

------------------------------------------------------------------------

## 9. Línea visual

### Concepto

Diseño industrial, corporativo y contemporáneo.

Debe evitar tanto la apariencia de una plantilla genérica como una
estética excesivamente tecnológica. La empresa fabrica elementos físicos
para operaciones reales y el diseño debe transmitir solidez.

### Características

-   Diseño limpio.
-   Espacios amplios.
-   Secciones claramente diferenciadas.
-   Tarjetas con bordes redondeados.
-   Fotografías de gran tamaño.
-   Tipografía legible.
-   Fondos blancos, grises muy claros y azul oscuro.
-   Uso moderado del azul corporativo.
-   Botones visibles y contrastados.
-   Animaciones discretas.
-   Sin efectos visuales innecesarios.
-   Sin carruseles automáticos.
-   Sin videos que se reproduzcan automáticamente.

### Design tokens iniciales

``` css
--brand-50: #f0f7fa;
--brand-100: #d9ebf2;
--brand-200: #b7d9e6;
--brand-300: #87bfd3;
--brand-400: #4f9dbb;
--brand-500: #277e9f;
--brand-600: #126582;
--brand-700: #07527c;
--brand-800: #0b435f;
--brand-900: #0c384f;
--brand-950: #062434;
```

Otros colores:

``` css
--surface: #ffffff;
--surface-muted: #f5f7f8;
--foreground: #10212b;
--foreground-muted: #52636d;
--border: #dce4e8;
--success: #197247;
--error: #b42318;
```

### Bordes

-   Botones: 10--12 px.
-   Inputs: 10--12 px.
-   Tarjetas: 18--24 px.
-   Imágenes destacadas: 20--28 px.
-   Secciones especiales: hasta 32 px.

### Tipografía

Usar una fuente sans-serif profesional disponible en Google Fonts
mediante `next/font`.

Preferencia:

-   Inter
-   Manrope
-   Geist Sans

Usar una sola familia tipográfica salvo necesidad justificada.

------------------------------------------------------------------------

## 10. Componentes globales

Crear componentes reutilizables para:

-   Header.
-   Menú móvil.
-   Footer.
-   Contenedor de página.
-   Encabezado interno.
-   Breadcrumbs.
-   Botón principal.
-   Botón secundario.
-   CTA de WhatsApp.
-   Botón flotante de WhatsApp.
-   Tarjeta de servicio.
-   Tarjeta de carrocería.
-   Tarjeta de artículo.
-   Galería de proyecto.
-   Sección de beneficios.
-   Sección de proceso.
-   Preguntas frecuentes.
-   CTA final.
-   Formulario de cotización.
-   Estado vacío.
-   Mensaje de éxito.
-   Mensaje de error.
-   JSON-LD.
-   Imagen con placeholder.
-   Bloque de contacto.
-   Mapa.

No duplicar markup entre páginas cuando pueda resolverse mediante
componentes o datos estructurados.

------------------------------------------------------------------------

## 11. Página de inicio

### 11.1 Hero

**Eyebrow:**

Fabricación y mantención de carrocerías en Chile

**H1:**

Carrocerías para camiones diseñadas para su operación

**Texto:**

Fabricamos, montamos y mantenemos carrocerías para carga general y
transporte refrigerado. Desarrollamos soluciones adaptadas al tipo de
carga, al chasis y a las exigencias de cada empresa.

**CTA principal:**

Solicitar cotización

**CTA secundario:**

Hablar por WhatsApp

**Texto de respaldo:**

Más de 10 años atendiendo a empresas de transporte en Chile.

Incluir una imagen amplia de una carrocería o camión terminado.

------------------------------------------------------------------------

### 11.2 Introducción

**H2:**

Soluciones de carrozado para empresas de transporte

**Texto:**

En HDC-Tiberi ayudamos a transformar un chasis en una herramienta de
trabajo preparada para operar. Contamos con fabricación propia,
soluciones importadas desde Brasil y experiencia en proyectos para carga
general, distribución y transporte en frío.

Cada proyecto se evalúa considerando el tipo de carga, las dimensiones
requeridas, la capacidad del vehículo y las condiciones reales de
operación.

------------------------------------------------------------------------

### 11.3 Líneas de negocio

Mostrar tres tarjetas.

#### Carga general

Carrocerías fabricadas para transporte, distribución y operaciones
logísticas. Configuramos dimensiones, aperturas, terminaciones y
accesorios de acuerdo con las necesidades del cliente.

CTA: Ver carrocerías de carga general

#### Transporte refrigerado

Soluciones para productos que deben conservar su temperatura durante el
traslado. Integramos carrocerías aisladas y equipamiento para transporte
en frío.

CTA: Ver soluciones refrigeradas

#### Mantención y reparación

Inspeccionamos, reparamos y reacondicionamos carrocerías para extender
su vida útil, recuperar su funcionamiento y reducir tiempos fuera de
operación.

CTA: Ver servicios de mantención

------------------------------------------------------------------------

### 11.4 Beneficios

**H2:**

Un proyecto pensado para trabajar

Beneficios:

-   Fabricación y montaje en Chile.
-   Evaluación según vehículo y operación.
-   Soluciones para carga seca y refrigerada.
-   Alternativas de fabricación propia e importación.
-   Atención directa durante el proyecto.
-   Mantención y soporte posterior.
-   Experiencia con empresas de distintos tamaños.

No utilizar afirmaciones no demostrables como "los mejores", "líderes
del mercado" o "máxima calidad" sin evidencia.

------------------------------------------------------------------------

### 11.5 Proceso

**H2:**

¿Cómo desarrollamos una carrocería?

#### 1. Conocemos la operación

Revisamos el tipo de carga, el vehículo, las dimensiones y la forma en
que se utilizará el camión.

#### 2. Definimos la solución

Proponemos una configuración y los elementos necesarios para responder a
la operación.

#### 3. Fabricamos o suministramos

La solución puede ser fabricada por HDC-Tiberi o seleccionada desde
nuestra oferta importada.

#### 4. Montamos y verificamos

Realizamos el montaje sobre el vehículo y revisamos terminaciones y
funcionamiento antes de la entrega.

------------------------------------------------------------------------

### 11.6 Proyectos

Mostrar tres a seis fotografías.

Título:

**Carrocerías desarrolladas para operaciones reales**

Texto:

Conozca algunos de nuestros trabajos de fabricación, montaje, reparación
y equipamiento para transporte de carga.

CTA:

Ver proyectos

Las imágenes iniciales pueden ser placeholders genéricos claramente
identificados en el código. Debe ser sencillo reemplazarlas modificando
un archivo de datos.

------------------------------------------------------------------------

### 11.7 Cobertura y ubicación

**H2:**

Atención en Santiago para proyectos en Chile

**Texto:**

Nuestra planta está ubicada en Renca, Región Metropolitana. Desde aquí
atendemos proyectos para empresas de transporte y propietarios de
camiones que operan en distintas regiones del país.

Mostrar:

-   Dirección.
-   Teléfono.
-   WhatsApp.
-   Enlace para abrir Google Maps.
-   Mapa incrustado con carga diferida.

------------------------------------------------------------------------

### 11.8 CTA final

**H2:**

Cuéntenos qué necesita transportar

**Texto:**

Indíquenos el modelo del camión, el tipo de carga y las características
generales del proyecto. Nuestro equipo revisará los antecedentes para
orientar su cotización.

Botones:

-   Solicitar cotización
-   Consultar por WhatsApp

------------------------------------------------------------------------

## 12. Página Carrocerías

### H1

Carrocerías para camiones en Chile

### Introducción

Fabricamos y suministramos carrocerías para distintos tipos de carga y
operación. Cada solución se define considerando el vehículo, la
distribución de peso, las dimensiones, las aperturas, el sistema de
carga y las condiciones de uso.

### Categorías

-   Carga general.
-   Refrigeradas o frigoríficas.
-   Proyectos especiales.
-   Alternativas importadas desde Brasil.

### Contenido complementario

Explicar que la selección no debe basarse únicamente en dimensiones o
apariencia. Deben considerarse carga útil, frecuencia de uso, accesos,
materiales, limpieza, aislación cuando corresponda y compatibilidad con
el chasis.

CTA final hacia cotización.

------------------------------------------------------------------------

## 13. Página Carga general

### H1

Carrocerías para carga general

### Texto principal

Diseñamos y fabricamos carrocerías para empresas que transportan
productos, insumos, materiales y carga seca. La configuración puede
adaptarse al tipo de vehículo, volumen requerido y forma de carga o
descarga.

### Posibles configuraciones

-   Furgones cerrados.
-   Plataformas.
-   Barandas.
-   Aperturas laterales.
-   Puertas traseras.
-   Pisos reforzados.
-   Escaleras y elementos de acceso.
-   Compartimientos.
-   Accesorios de seguridad.

Agregar advertencia:

Las configuraciones disponibles deben confirmarse con HDC-Tiberi. No
presentar una característica como disponible si no ha sido validada
comercialmente.

------------------------------------------------------------------------

## 14. Página Carrocerías refrigeradas

### H1

Carrocerías refrigeradas para transporte en frío

### Texto principal

Desarrollamos soluciones para el traslado de alimentos, productos
congelados, productos frescos y otras cargas que requieren conservar
condiciones controladas durante el transporte.

La solución puede considerar carrocería aislada, revestimientos
interiores y equipamiento de refrigeración, según las necesidades de la
operación.

### Aspectos a evaluar

-   Rango de temperatura requerido.
-   Duración de los trayectos.
-   Volumen y peso de la carga.
-   Frecuencia de apertura.
-   Condiciones sanitarias.
-   Facilidad de limpieza.
-   Tipo de vehículo.
-   Equipamiento de frío.

No prometer certificaciones sanitarias o cumplimiento normativo
específico sin documentación comprobable.

------------------------------------------------------------------------

## 15. Página Proyectos especiales

### H1

Carrocerías y adaptaciones para proyectos especiales

### Texto

Cuando una operación no encaja en una solución estándar, evaluamos
alternativas de diseño, fabricación y adaptación.

Los proyectos especiales pueden considerar cambios de dimensiones,
accesos, compartimientos, refuerzos, terminaciones o elementos
complementarios.

CTA:

Solicitar evaluación técnica

------------------------------------------------------------------------

## 16. Página Servicios

### H1

Servicios para carrocerías de camiones

Presentar:

-   Fabricación.
-   Montaje.
-   Instalación.
-   Mantención.
-   Reparación.
-   Reacondicionamiento.
-   Adaptaciones.
-   Equipamiento para frío.

Cada servicio debe enlazar a una página independiente.

------------------------------------------------------------------------

## 17. Página Fabricación de carrocerías

### H1

Fabricación de carrocerías para camiones

### Contenido

En HDC-Tiberi fabricamos carrocerías considerando el tipo de carga, las
características del chasis y la forma en que el vehículo operará
diariamente.

El proceso comienza con el levantamiento de requerimientos y continúa
con la definición de dimensiones, accesos, materiales y terminaciones.

Agregar secciones:

-   Información necesaria para cotizar.
-   Etapas del proyecto.
-   Tipos de soluciones.
-   Preguntas frecuentes.
-   CTA.

------------------------------------------------------------------------

## 18. Página Montaje e instalación

### H1

Montaje e instalación de carrocerías

### Texto

Realizamos el montaje de carrocerías sobre camiones y chasis
compatibles, considerando los requerimientos del proyecto y las
condiciones del vehículo.

Antes de iniciar se deben revisar los antecedentes técnicos del chasis y
las características de la carrocería.

Evitar afirmar compatibilidad universal.

------------------------------------------------------------------------

## 19. Página Mantención

### H1

Mantención de carrocerías para camiones

### Texto

La revisión periódica permite detectar desgaste, daños, filtraciones,
problemas en puertas, pisos, cierres, revestimientos y otros componentes
antes de que provoquen una detención mayor.

### Posibles revisiones

-   Puertas y sistemas de cierre.
-   Pisos.
-   Techos.
-   Revestimientos.
-   Sellos.
-   Bisagras.
-   Estructura.
-   Filtraciones.
-   Elementos de fijación.
-   Daños por uso o impacto.

CTA:

Solicitar revisión

------------------------------------------------------------------------

## 20. Página Reparación

### H1

Reparación de carrocerías para camiones

### Texto

Evaluamos daños y deterioros en carrocerías para determinar si es
posible reparar, reemplazar o reacondicionar sus componentes.

El alcance y plazo de una reparación deben confirmarse después de
inspeccionar el equipo.

Formulario contextual con opción "Necesito reparar una carrocería".

------------------------------------------------------------------------

## 21. Página Transporte en frío

### H1

Equipamiento para transporte en frío

### Introducción

Implementamos soluciones para operaciones que necesitan conservar
productos refrigerados o congelados durante el traslado.

La carrocería, la aislación y el equipo de frío deben seleccionarse como
un sistema, considerando la carga, la temperatura requerida y la forma
de operación.

### Secciones

-   Carrocerías aisladas.
-   Equipamiento de refrigeración.
-   Factores para dimensionar una solución.
-   Mantención.
-   Preguntas frecuentes.
-   Cotización.

No mencionar marcas de equipos hasta que el cliente las confirme.

------------------------------------------------------------------------

## 22. Página Proyectos

### H1

Proyectos de carrocerías

Crear una cuadrícula filtrable, sin complejidad excesiva, con
categorías:

-   Carga general.
-   Refrigeradas.
-   Montaje.
-   Reparaciones.
-   Proyectos especiales.

Cada proyecto debe poder almacenar:

``` ts
type Project = {
  slug: string
  title: string
  category: string
  summary: string
  challenge?: string
  solution?: string
  vehicle?: string
  location?: string
  images: string[]
  featured: boolean
}
```

Mientras no existan casos reales documentados, no inventar nombres de
clientes, cifras, resultados o testimonios.

Usar proyectos demostrativos sin atribuirlos a clientes o mostrar
solamente una galería general.

------------------------------------------------------------------------

## 23. Página Nosotros

### H1

Más de 10 años desarrollando soluciones para el transporte

### Texto propuesto

HDC-Tiberi nació en 2015 con el propósito de desarrollar soluciones de
carrozado para empresas y transportistas que necesitan vehículos
preparados para las exigencias de su operación.

Desde nuestra planta en Renca fabricamos, montamos, reparamos y
mantenemos carrocerías para carga general y transporte refrigerado.
También trabajamos con soluciones importadas desde proveedores de
Brasil, ampliando las alternativas disponibles para nuestros clientes.

Atendemos a pequeñas, medianas y grandes empresas, evaluando cada
proyecto según el tipo de vehículo, la carga transportada y las
condiciones de trabajo.

### Principios

-   Trabajo responsable.
-   Atención directa.
-   Soluciones ajustadas a la operación.
-   Comunicación clara.
-   Respaldo posterior.
-   Mejora continua.

No crear nombres, cargos, cantidad de trabajadores, metros cuadrados ni
certificaciones no entregadas por el cliente.

------------------------------------------------------------------------

## 24. Página Contacto

### H1

Contacto

Mostrar:

-   Dirección.
-   Teléfono.
-   WhatsApp.
-   Correo, solamente si se autoriza publicarlo.
-   Horario, con placeholder pendiente.
-   Botón de Google Maps.
-   Mapa.
-   Formulario breve.

### Texto

Conversemos sobre su próximo proyecto de carrocería. Envíenos los
antecedentes principales del vehículo y la carga para orientar la
evaluación.

------------------------------------------------------------------------

## 25. Página Cotizar

### H1

Solicite una cotización

### Texto

Complete los antecedentes disponibles. No es necesario contar con toda
la información técnica para iniciar la conversación.

### Campos

Obligatorios:

-   Nombre.
-   Empresa.
-   Teléfono.
-   Correo.
-   Tipo de solicitud.
-   Descripción del proyecto.
-   Consentimiento de privacidad.

Opcionales:

-   Región.
-   Comuna.
-   Marca del camión.
-   Modelo del camión.
-   Año.
-   Tipo de carga.
-   Temperatura requerida.
-   Dimensiones aproximadas.
-   Plazo esperado.
-   Medio preferido de contacto.

Tipo de solicitud:

-   Fabricación de carrocería.
-   Carrocería de carga general.
-   Carrocería refrigerada.
-   Montaje o instalación.
-   Mantención.
-   Reparación.
-   Proyecto especial.
-   Otra consulta.

No implementar archivos adjuntos en la primera versión. El correo
enviado debe indicar que las fotografías o fichas técnicas podrán
solicitarse posteriormente.

### Estados

-   Inicial.
-   Validando.
-   Enviando.
-   Éxito.
-   Error.
-   Límite de solicitudes.
-   Error de configuración.

### Mensaje de éxito

**Solicitud recibida**

Gracias por enviarnos los antecedentes. Revisaremos la información y nos
pondremos en contacto utilizando los datos indicados.

### Mensaje de error

No fue posible enviar la solicitud. Puede intentarlo nuevamente o
comunicarse directamente por WhatsApp al +56 9 9313 5317.

------------------------------------------------------------------------

## 26. Envío mediante Resend

Crear:

``` text
POST /api/quote
```

O una Server Action equivalente.

Variables de entorno:

``` env
RESEND_API_KEY=
RESEND_FROM_EMAIL=
QUOTE_RECIPIENT_EMAIL=janwrojas@hdc-tiberi.com
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=56993135317
NEXT_PUBLIC_GOOGLE_MAPS_URL=https://maps.app.goo.gl/4FnzLz8iM7FXrguC6
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
```

### Requisitos

-   Verificar el dominio en Resend.
-   No usar como remitente una dirección no verificada.
-   Enviar la cotización a `janwrojas@hdc-tiberi.com`.
-   Configurar `replyTo` con el correo ingresado por el prospecto.
-   Escapar contenido proporcionado por el usuario.
-   No registrar la API key.
-   No exponer detalles internos ante errores.
-   Registrar un identificador de solicitud, fecha y resultado.
-   Evitar guardar datos personales en base de datos durante la primera
    versión.

### Asunto sugerido

``` text
Nueva cotización web — [Tipo de solicitud] — [Empresa]
```

### Contenido del correo

-   Identificador.
-   Fecha.
-   Nombre.
-   Empresa.
-   Correo.
-   Teléfono.
-   Región y comuna.
-   Tipo de solicitud.
-   Camión.
-   Tipo de carga.
-   Temperatura.
-   Dimensiones.
-   Plazo.
-   Descripción.
-   Página de origen.
-   UTM disponibles.

Resend requiere una API key y un dominio remitente verificado para el
flujo normal de producción.

------------------------------------------------------------------------

## 27. WhatsApp

Número normalizado:

``` text
56993135317
```

Enlace base:

``` text
https://wa.me/56993135317
```

Mensaje general:

``` text
Hola, quiero solicitar información sobre una carrocería para camión.
```

Mensaje desde servicio:

``` text
Hola, quiero cotizar el servicio de [nombre del servicio]. Mi nombre es [nombre].
```

### Implementaciones

-   Botón en header.
-   CTA en hero.
-   CTA en páginas de servicio.
-   Botón flotante.
-   CTA en página de contacto.
-   Enlace de emergencia cuando falle el formulario.

### Reglas del botón flotante

-   Usar `aria-label`.
-   No cubrir contenido ni acciones.
-   Respetar safe areas móviles.
-   Abrir en una pestaña nueva.
-   Incluir `rel="noopener noreferrer"`.
-   No mostrar globos animados invasivos.
-   Mantener tamaño táctil mínimo de 44 × 44 px.

------------------------------------------------------------------------

## 28. Blog y contenido SEO

La primera versión puede usar MDX local.

Estructura del contenido:

``` ts
type ArticleMetadata = {
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt?: string
  author: string
  category: string
  tags: string[]
  image: string
  imageAlt: string
  featured?: boolean
}
```

### Requisitos editoriales

-   Un único H1 por página.
-   Índice cuando el contenido sea extenso.
-   Introducción que responda rápidamente la consulta.
-   Uso natural de keywords.
-   Enlaces internos.
-   Fuentes cuando se formulen afirmaciones técnicas.
-   Fecha de publicación.
-   Fecha de actualización.
-   Autor.
-   Sin texto de relleno.
-   Sin repetir párrafos entre artículos.
-   Sin afirmar características técnicas no verificadas.
-   Lenguaje chileno formal y comprensible.
-   Orientación B2B.
-   Incluir llamadas a cotizar sin interrumpir excesivamente la lectura.

------------------------------------------------------------------------

## 29. Artículo inicial: fabricantes de carrocerías en Chile

### URL

`/blog/mejores-fabricantes-de-carrocerias-para-camiones-en-chile`

### Title SEO

Fabricantes de carrocerías para camiones en Chile: cómo elegir

### H1

¿Cómo elegir un fabricante de carrocerías para camiones en Chile?

### Enfoque editorial

No redactar un ranking manipulado que declare a HDC-Tiberi como la mejor
empresa.

El contenido debe explicar criterios reales de selección y presentar a
HDC-Tiberi como una alternativa a evaluar.

### Contenido propuesto

Cuando una empresa compra un camión o necesita renovar una unidad, la
elección de la carrocería puede influir directamente en la capacidad de
carga, la seguridad, los tiempos de operación y la vida útil del
vehículo.

En Chile existen fabricantes, importadores y talleres que ofrecen
soluciones para carga general, distribución, transporte refrigerado y
proyectos especiales. Más que buscar una única empresa "mejor", conviene
comparar proveedores de acuerdo con la operación que debe realizar el
camión.

#### 1. Experiencia en el tipo de carrocería

No todos los fabricantes trabajan las mismas configuraciones. Una
empresa que transporta carga seca tiene necesidades diferentes a otra
que moviliza alimentos refrigerados.

Antes de cotizar, conviene preguntar si el proveedor tiene experiencia
con:

-   Carga general.
-   Distribución urbana.
-   Productos refrigerados.
-   Productos congelados.
-   Aperturas laterales.
-   Proyectos especiales.
-   Reparaciones y adaptaciones.

#### 2. Evaluación del chasis

La carrocería debe ser compatible con las características del vehículo.
El proveedor debería solicitar antecedentes como marca, modelo, año,
distancia entre ejes y capacidad disponible.

Una cotización realizada sin revisar el vehículo puede omitir
restricciones importantes.

#### 3. Materiales y terminaciones

Los materiales deben seleccionarse de acuerdo con la carga, la
exposición ambiental, la frecuencia de limpieza y el desgaste esperado.

No siempre la alternativa más pesada o costosa es la más conveniente. La
solución debe equilibrar resistencia, peso y facilidad de mantención.

#### 4. Capacidad de adaptación

Las operaciones de transporte suelen requerir accesos, pisos, puertas,
compartimientos o elementos de sujeción específicos.

Un proveedor capaz de levantar los requerimientos antes de fabricar
puede reducir modificaciones posteriores.

#### 5. Montaje y soporte

Además de fabricar o suministrar la carrocería, es importante conocer
quién realizará el montaje, cómo se revisará el trabajo y qué soporte
existirá después de la entrega.

#### 6. Mantención y reparación

Las carrocerías están expuestas a vibraciones, carga, golpes, humedad y
uso intensivo. Contar con un proveedor que también realice mantenciones
y reparaciones puede facilitar la continuidad operacional.

### Sección HDC-Tiberi

HDC-Tiberi fabrica, monta y mantiene carrocerías para camiones desde
2015. La empresa trabaja con soluciones de fabricación propia y
alternativas importadas desde Brasil para operaciones de carga general y
transporte refrigerado.

Su planta se encuentra en Renca, Región Metropolitana, desde donde
atiende a empresas y transportistas de diferentes tamaños.

### CTA

¿Está comparando alternativas para carrozar un camión?

Envíenos los antecedentes del vehículo y el tipo de carga para evaluar
su proyecto.

------------------------------------------------------------------------

## 30. SEO técnico

### Metadata

Cada URL debe tener:

-   Title único.
-   Meta description única.
-   Canonical absoluto.
-   Open Graph.
-   Twitter Card.
-   Imagen social.
-   Robots.
-   Alternativa de idioma cuando corresponda.
-   Breadcrumb visible.
-   Breadcrumb en JSON-LD.

### Plantillas

#### Inicio

``` text
Title: Carrocerías para camiones en Chile | HDC-Tiberi
Description: Fabricación, montaje, reparación y mantención de carrocerías para camiones de carga general y transporte refrigerado en Chile.
```

#### Fabricación

``` text
Title: Fabricación de carrocerías para camiones | HDC-Tiberi
Description: Fabricamos carrocerías para camiones de carga general, transporte refrigerado y proyectos especiales en Santiago de Chile.
```

#### Mantención

``` text
Title: Mantención de carrocerías para camiones | HDC-Tiberi
Description: Servicio de revisión, reparación y mantención de carrocerías para camiones. Atención en Renca, Región Metropolitana.
```

### Sitemap

Incluir solamente URLs:

-   Canónicas.
-   Indexables.
-   Con contenido suficiente.
-   Que respondan `200 OK`.

Excluir:

-   API.
-   Páginas de error.
-   Resultados internos.
-   Parámetros.
-   Páginas duplicadas.
-   Entornos de preview.

### Robots

Permitir rastreo general.

Bloquear:

-   `/api/`
-   rutas internas técnicas
-   entornos no productivos, cuando corresponda

Incluir referencia al sitemap.

### Canonicals

-   Absolutos.
-   Autorreferentes en páginas originales.
-   Sin parámetros UTM.
-   No canonicalizar artículos diferentes hacia una sola URL.
-   No usar canonical como sustituto de redirecciones.

### Redirecciones

-   Forzar HTTPS.
-   Elegir dominio con o sin `www`.
-   Redirigir la variante secundaria mediante 301.
-   Evitar cadenas de redirección.
-   Crear 301 si se recuperan URLs del sitio histórico.

### Página 404

Crear una página útil con:

-   Mensaje claro.
-   Enlace al inicio.
-   Enlace a servicios.
-   Enlace a cotización.
-   Botón de WhatsApp.

------------------------------------------------------------------------

## 31. Datos estructurados

Implementar JSON-LD correcto y coherente con el contenido visible.

Google admite datos estructurados de Organization, LocalBusiness y
BreadcrumbList para comunicar información sobre la empresa, ubicación y
jerarquía de navegación. El marcado debe representar contenido real de
la página y no debe incluir reseñas, premios, horarios o certificaciones
inventadas.

### Home

Usar un nodo principal `LocalBusiness` o un subtipo válido
suficientemente general.

No inventar un subtipo de Schema.org.

Propiedades:

-   `@context`
-   `@type`
-   `@id`
-   `name`
-   `url`
-   `logo`
-   `image`
-   `description`
-   `foundingDate`
-   `telephone`
-   `email`, únicamente si se publica
-   `address`
-   `geo`, una vez confirmadas las coordenadas
-   `hasMap`
-   `areaServed`
-   `contactPoint`
-   `sameAs`, cuando existan perfiles oficiales
-   `knowsAbout`

Ejemplo conceptual:

``` json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://dominio.cl/#business",
  "name": "Carrocerías HDC-Tiberi",
  "url": "https://dominio.cl/",
  "foundingDate": "2015",
  "telephone": "+56993135317",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Jorge Hirmas 3131",
    "addressLocality": "Renca",
    "addressRegion": "Región Metropolitana",
    "postalCode": "8641092",
    "addressCountry": "CL"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Chile"
  }
}
```

### Servicios

Usar `Service` relacionado mediante `provider` con el `@id` de la
empresa.

### Artículos

Usar:

-   `Article` o `BlogPosting`.
-   `headline`.
-   `description`.
-   `image`.
-   `datePublished`.
-   `dateModified`.
-   `author`.
-   `publisher`.
-   `mainEntityOfPage`.

### Breadcrumbs

Usar `BreadcrumbList` con al menos dos `ListItem` en páginas internas.

### FAQ

Puede utilizarse `FAQPage` únicamente cuando las preguntas y respuestas
aparezcan visibles en la página. No asumir que generará un resultado
enriquecido.

### WebSite

Añadir un nodo `WebSite` con:

-   Nombre.
-   URL.
-   Idioma.
-   Publisher.

No implementar `SearchAction` si el sitio no posee buscador funcional.

------------------------------------------------------------------------

## 32. Optimización para buscadores y sistemas de IA

La optimización para IA debe basarse en contenido verificable y
técnicamente accesible, no en archivos o etiquetas inventadas.

### Requisitos

-   HTML semántico.
-   Contenido principal disponible sin ejecutar JavaScript.
-   Encabezados jerárquicos.
-   Respuestas directas.
-   Datos corporativos consistentes.
-   Página Nosotros completa.
-   Servicios claramente definidos.
-   Autor y fechas en artículos.
-   Enlaces internos descriptivos.
-   JSON-LD coherente.
-   Imágenes con texto alternativo.
-   Sitemap XML.
-   RSS o feed del blog.
-   Página de contacto verificable.
-   Información de ubicación.
-   Número de teléfono en formato internacional.
-   Fecha de fundación.
-   Política editorial básica.
-   Contenidos originales.

### Archivo opcional `llms.txt`

Puede crearse como ayuda experimental para agentes que decidan
interpretarlo, pero no tratarlo como estándar oficial ni como sustituto
de robots.txt, sitemap, HTML o Schema.org.

Contenido:

``` text
# Carrocerías HDC-Tiberi

> Empresa chilena dedicada a la fabricación, montaje, reparación y mantención de carrocerías para camiones.

## Información principal

- [Inicio](https://dominio.cl/)
- [Carrocerías](https://dominio.cl/carrocerias)
- [Servicios](https://dominio.cl/servicios)
- [Transporte en frío](https://dominio.cl/transporte-en-frio)
- [Nosotros](https://dominio.cl/nosotros)
- [Contacto](https://dominio.cl/contacto)
- [Blog](https://dominio.cl/blog)
```

------------------------------------------------------------------------

## 33. Accesibilidad

Objetivo: WCAG 2.2 nivel AA en los componentes y recorridos principales.

### Requisitos

-   Navegación completa mediante teclado.
-   Focus visible.
-   Contraste suficiente.
-   Labels asociados a inputs.
-   Errores vinculados mediante `aria-describedby`.
-   Enlace "Saltar al contenido".
-   Menú móvil accesible.
-   Diálogos con control de foco.
-   Áreas táctiles de al menos 44 × 44 px.
-   `alt` descriptivo en imágenes informativas.
-   `alt=""` en imágenes decorativas.
-   No depender solamente del color.
-   Respetar `prefers-reduced-motion`.
-   No usar texto dentro de imágenes para información esencial.
-   Idioma del documento: `es-CL`.

"Cumplimiento W3C" debe interpretarse como uso de HTML y CSS válidos,
semántica correcta y prácticas de accesibilidad; no como una
certificación otorgada por W3C.

------------------------------------------------------------------------

## 34. Rendimiento

Objetivos móviles en producción:

-   Lighthouse Performance: 90 o superior.
-   Accessibility: 95 o superior.
-   Best Practices: 95 o superior.
-   SEO: 95 o superior.
-   LCP: inferior a 2,5 segundos en condiciones razonables.
-   CLS: inferior a 0,1.
-   INP: inferior a 200 ms cuando existan datos reales de campo.

### Reglas

-   Convertir imágenes a AVIF o WebP.
-   Definir ancho y alto.
-   Priorizar solamente la imagen LCP.
-   Carga diferida para imágenes inferiores.
-   No cargar el mapa hasta aproximarse al viewport.
-   Evitar paquetes grandes.
-   Evitar animaciones JavaScript para elementos simples.
-   No cargar bibliotecas de carrusel si no se usan.
-   No usar video de fondo.
-   Limitar fuentes y pesos.
-   No incorporar múltiples sistemas de iconos.

------------------------------------------------------------------------

## 35. Imágenes provisionales

Crear un archivo central:

``` text
src/data/site-images.ts
```

Cada imagen debe incluir:

``` ts
type SiteImage = {
  src: string
  alt: string
  width: number
  height: number
  placeholder?: boolean
  replacementNote?: string
}
```

Las imágenes genéricas deben:

-   Estar relacionadas con camiones, fabricación industrial o
    transporte.
-   Tener licencias válidas.
-   No mostrar logos de competidores.
-   No inducir a pensar que corresponden a proyectos reales de
    HDC-Tiberi.
-   Estar marcadas internamente como provisionales.

Añadir un archivo:

``` text
docs/IMAGE-REPLACEMENT.md
```

Debe indicar qué archivo reemplazar, dimensiones recomendadas y dónde
aparece.

------------------------------------------------------------------------

## 36. Privacidad y cookies

### Política de privacidad

Debe explicar:

-   Qué datos recopila el formulario.
-   Para qué se utilizan.
-   A qué correo se envían.
-   Durante cuánto tiempo podrían conservarse.
-   Cómo solicitar modificación o eliminación.
-   Uso de servicios externos como Resend, Google Maps y analítica.
-   Identidad o razón social pendiente de completar.
-   Correo de privacidad pendiente de confirmar.

### Cookies

No mostrar un banner de consentimiento vacío o engañoso.

Si solo se utilizan cookies estrictamente necesarias, explicarlo en la
política.

Si se implementa GA4, Google Ads, Meta Pixel u otra medición no
esencial, crear consentimiento previo adecuado antes de activar las
etiquetas correspondientes.

------------------------------------------------------------------------

## 37. Seguridad

-   Validar todos los datos en el servidor.
-   Limitar tamaño de payload.
-   Rechazar campos inesperados.
-   Sanitizar contenido utilizado en correos.
-   Rate limiting.
-   Honeypot.
-   Turnstile preparado.
-   Cabeceras de seguridad.
-   No exponer stack traces.
-   No enviar secretos al cliente.
-   No incluir API keys en variables `NEXT_PUBLIC_*`.
-   Política CSP razonable y compatible con Google Maps y Resend.
-   `X-Content-Type-Options: nosniff`.
-   `Referrer-Policy`.
-   `Permissions-Policy`.
-   Protección contra clickjacking mediante CSP `frame-ancestors`.
-   Dependabot o Renovate opcional.
-   No almacenar solicitudes en logs de forma indefinida.
-   Enmascarar datos personales en registros cuando sea posible.

------------------------------------------------------------------------

## 38. Analítica

Preparar una capa de eventos desacoplada.

Eventos:

-   `quote_form_view`
-   `quote_form_start`
-   `quote_form_submit`
-   `quote_form_success`
-   `quote_form_error`
-   `whatsapp_click`
-   `phone_click`
-   `email_click`
-   `map_click`
-   `service_cta_click`
-   `project_view`

Parámetros permitidos:

-   Página.
-   Servicio.
-   Posición del CTA.
-   Tipo de dispositivo.
-   UTM.

No enviar al sistema de analítica:

-   Nombre.
-   Correo.
-   Teléfono.
-   Mensaje.
-   Patente.
-   Identificadores personales.

------------------------------------------------------------------------

## 39. Estructura de proyecto

``` text
src/
  app/
    (marketing)/
      page.tsx
      carrocerias/
      servicios/
      transporte-en-frio/
      proyectos/
      nosotros/
      blog/
      contacto/
      cotizar/
      terminos-y-condiciones/
      politica-de-privacidad/
      politica-de-cookies/
    api/
      quote/
        route.ts
    layout.tsx
    sitemap.ts
    robots.ts
    manifest.ts
    not-found.tsx
    globals.css

  components/
    layout/
    sections/
    forms/
    seo/
    ui/

  content/
    blog/

  data/
    navigation.ts
    services.ts
    body-types.ts
    projects.ts
    company.ts
    site-images.ts
    faqs.ts

  emails/
    quote-notification.tsx

  lib/
    env.ts
    metadata.ts
    schema.ts
    resend.ts
    rate-limit.ts
    validations/
    analytics.ts
    utils.ts

public/
  images/
    brand/
    placeholders/
    services/
    projects/
    blog/

docs/
  DEPLOYMENT.md
  CONTENT.md
  IMAGE-REPLACEMENT.md
  SEO-CHECKLIST.md
  ENVIRONMENT.md
```

------------------------------------------------------------------------

## 40. Gestión de contenido

No incorporar CMS en la primera versión.

El contenido debe quedar desacoplado de los componentes mediante:

-   Archivos TypeScript para servicios y datos corporativos.
-   MDX para artículos.
-   Arrays tipados para proyectos.
-   Configuración central para dirección, teléfono y enlaces.

Evitar escribir el teléfono, correo o dirección directamente en
múltiples componentes.

Crear:

``` ts
export const company = {
  name: "Carrocerías HDC-Tiberi",
  legalName: "",
  foundedYear: 2015,
  phoneDisplay: "+56 9 9313 5317",
  phoneE164: "+56993135317",
  whatsappNumber: "56993135317",
  quoteEmail: "janwrojas@hdc-tiberi.com",
  address: {
    street: "Av. Jorge Hirmas 3131",
    commune: "Renca",
    region: "Región Metropolitana",
    postalCode: "8641092",
    country: "Chile",
    countryCode: "CL"
  }
}
```

------------------------------------------------------------------------

## 41. Deploy en Hostinger

Crear documentación para dos escenarios.

### Escenario A: Hostinger con soporte Node.js

-   Conectar repositorio de GitHub.
-   Configurar versión de Node.
-   Configurar comando de instalación.
-   Configurar comando de build.
-   Configurar comando de inicio.
-   Añadir variables de entorno.
-   Configurar dominio.
-   Activar HTTPS.
-   Revisar logs.
-   Hacer prueba del formulario.
-   Confirmar persistencia del proceso.

Comandos:

``` bash
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

### Escenario B: hosting sin Node.js

No intentar subir una aplicación Next.js SSR como si fueran archivos
PHP.

Alternativas:

1.  Cambiar el plan de Hostinger.
2.  Desplegar el frontend como exportación estática.
3.  Alojar el endpoint del formulario en un servicio externo.
4.  Reemplazar Next.js por Astro estático si no se requiere backend
    propio.

La decisión debe tomarse antes de finalizar la integración de Resend.

------------------------------------------------------------------------

## 42. Variables pendientes que no deben inventarse

Mostrar como pendientes en el README o en configuración:

-   Dominio definitivo: carroceriastiberi.cl.
-   Razón social.
-   RUT.
-   Correo público general.
-   Horario de atención.
-   Coordenadas exactas.
-   Redes sociales oficiales.
-   Marcas de equipos de frío.
-   Certificaciones.
-   Garantías.
-   Plazos habituales.
-   Cobertura fuera de Santiago.
-   Condiciones comerciales.
-   Nombre del proveedor brasileño.
-   Fotografías definitivas.
-   Testimonios.
-   Clientes autorizados.
-   Logos de clientes.
-   Casos de éxito.
-   Nombre y cargo del responsable editorial.

------------------------------------------------------------------------

## 43. Criterios de aceptación

### Funcionalidad

-   Todas las URLs definidas cargan correctamente.
-   No existen enlaces rotos.
-   El formulario valida en cliente y servidor.
-   El formulario envía un correo real mediante Resend.
-   El correo llega a `janwrojas@hdc-tiberi.com`.
-   El botón de WhatsApp utiliza el número correcto.
-   Teléfono, dirección y mapa funcionan.
-   El menú móvil puede utilizarse con teclado.
-   Existe una página 404 personalizada.

### SEO

-   Cada página tiene metadata única.
-   Sitemap válido.
-   Robots válido.
-   Canonicals correctos.
-   Breadcrumbs visibles y estructurados.
-   Organization o LocalBusiness válido en home.
-   Service en páginas de servicio.
-   BlogPosting en artículos.
-   No existen páginas indexables vacías.
-   No existe contenido duplicado evidente.
-   Las imágenes tienen atributos alt adecuados.
-   El contenido principal se encuentra en HTML renderizado.

### Diseño

-   Diseño consistente en móvil, tablet y escritorio.
-   Bordes redondeados en tarjetas, formularios e imágenes.
-   Uso correcto de `#07527C`.
-   Sin desbordamiento horizontal.
-   Sin texto ilegible sobre imágenes.
-   CTA visible en páginas comerciales.
-   Fotografías reemplazables desde datos centralizados.

### Rendimiento

-   Imágenes optimizadas.
-   Fuentes optimizadas.
-   No existen errores en consola.
-   No existen errores durante `pnpm build`.
-   No existen errores TypeScript.
-   Lighthouse SEO igual o superior a 95 en las páginas principales.
-   Lighthouse Accessibility igual o superior a 95 en las páginas
    principales.

### Contenido

-   No se inventan clientes.
-   No se inventan certificaciones.
-   No se inventan garantías.
-   No se inventan especificaciones técnicas.
-   No se declara a HDC-Tiberi como líder o mejor fabricante sin
    respaldo.
-   Se utiliza 2015 como año de inicio.
-   La redacción utiliza español de Chile.
-   El nombre se presenta consistentemente como HDC-Tiberi.

------------------------------------------------------------------------

## 44. Entregables

1.  Repositorio completo.
2.  Aplicación Next.js funcional.
3.  README.
4.  `.env.example`.
5.  Documentación de despliegue.
6.  Documentación para reemplazar fotografías.
7.  Checklist SEO.
8.  Plantilla de correo.
9.  Contenidos iniciales.
10. Páginas legales provisionales con campos pendientes identificados.
11. Sitemap.
12. Robots.
13. Feed del blog.
14. Datos estructurados.
15. Pruebas básicas del formulario.
16. Reporte Lighthouse inicial.

------------------------------------------------------------------------

## 45. Instrucciones específicas para Codex

1.  Leer el PRD completo antes de modificar archivos.
2.  Crear primero la arquitectura y los datos centralizados.
3.  No empezar por animaciones.
4.  Implementar primero header, footer, layout, tipografía y tokens.
5.  Construir componentes reutilizables.
6.  Crear la página de inicio completa.
7.  Crear posteriormente las páginas de servicios.
8.  Implementar metadata y schema durante la creación de cada página, no
    al final.
9.  Crear el formulario solo después de estabilizar la estructura
    visual.
10. Validar variables de entorno al iniciar la aplicación.
11. No inventar información corporativa.
12. Usar placeholders explícitos para datos pendientes.
13. No instalar dependencias sin una necesidad concreta.
14. Priorizar Server Components.
15. Documentar cualquier desviación del PRD.
16. Ejecutar antes de finalizar:

``` bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

17. Corregir todos los errores antes de considerar terminada una fase.
18. Mantener componentes pequeños y legibles.
19. No utilizar `any`.
20. No dejar texto lorem ipsum.
21. No dejar botones sin acción.
22. No añadir un modo oscuro salvo que se solicite posteriormente.
23. No añadir CMS, base de datos ni panel administrativo en esta
    versión.
24. No depender de servicios exclusivos de Vercel.
25. Entregar una aplicación apta para Hostinger con Node.js.
