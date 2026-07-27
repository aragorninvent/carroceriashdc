export type Card = { title: string; text: string; href: string };
export const bodyTypes: Card[] = [
  { title: "Carga general", text: "Carrocerías para transporte, distribución y operaciones logísticas, configuradas según su carga y vehículo.", href: "/carrocerias/carga-general" },
  { title: "Transporte refrigerado", text: "Soluciones aisladas y equipamiento para operaciones que requieren conservar la temperatura.", href: "/carrocerias/refrigeradas" },
  { title: "Mantención y reparación", text: "Revisión, reparación y reacondicionamiento para recuperar la operación de su carrocería.", href: "/servicios/mantencion-de-carrocerias" }
];
export const services: Card[] = [
  { title: "Fabricación de carrocerías", text: "Soluciones definidas según carga, chasis y forma de operación.", href: "/servicios/fabricacion-de-carrocerias" },
  { title: "Montaje e instalación", text: "Montaje sobre chasis compatibles, revisando antecedentes técnicos antes de iniciar.", href: "/servicios/montaje-e-instalacion" },
  { title: "Mantención", text: "Revisiones para detectar desgaste y prevenir detenciones mayores.", href: "/servicios/mantencion-de-carrocerias" },
  { title: "Reparación", text: "Evaluación de daños para reparar, reemplazar o reacondicionar componentes.", href: "/servicios/reparacion-de-carrocerias" }
];
export const benefits = ["Fabricación y montaje en Chile", "Evaluación según vehículo y operación", "Soluciones para carga seca y refrigerada", "Alternativas de fabricación propia e importación", "Atención directa durante el proyecto", "Mantención y soporte posterior"];
export const process = ["Conocemos la operación", "Definimos la solución", "Fabricamos o suministramos", "Montamos y verificamos"];
export const projects = [
  { title: "Carga general", text: "Carrocería para operación de carga", src: "/images/pending/WhatsApp Image 2026-07-27 at 08.45.01.jpeg", alt: "Camión amarillo con carrocería de carga general", width: 1200, height: 1600 },
  { title: "Montaje de frío", text: "Instalación de equipo de refrigeración", src: "/images/pending/WhatsApp Image 2026-07-27 at 08.44.20.jpeg", alt: "Instalación de equipo de frío sobre carrocería", width: 1600, height: 900 },
  { title: "Furgón de carga", text: "Solución cerrada para distribución", src: "/images/pending/WhatsApp Image 2026-07-27 at 08.47.57.jpeg", alt: "Camión con furgón metálico de carga", width: 1600, height: 900 },
  { title: "Terminaciones", text: "Detalle de carrocería y estructura", src: "/images/pending/WhatsApp Image 2026-07-27 at 09.22.16.jpeg", alt: "Detalle lateral de carrocería blanca", width: 1600, height: 1200 },
  { title: "Carrocería con persianas", text: "Configuración para carga y descarga", src: "/images/pending/WhatsApp Image 2026-07-27 at 08.44.20 (1).jpeg", alt: "Camión con carrocería amarilla y persianas metálicas", width: 1600, height: 1200 },
  { title: "Carrocería sider", text: "Solución lateral para transporte", src: "/images/pending/WhatsApp Image 2026-07-27 at 09.07.32.jpeg", alt: "Camión con carrocería sider negra", width: 1600, height: 900 },
  { title: "Furgón de distribución", text: "Carrocería cerrada para reparto", src: "/images/pending/WhatsApp Image 2026-07-27 at 08.44.59.jpeg", alt: "Camión liviano con furgón blanco", width: 1200, height: 1200 }
];
export const faqs = [
  ["¿Qué información necesito para cotizar?", "El modelo del camión, tipo de carga, dimensiones aproximadas y cómo se utiliza el vehículo ayudan a orientar la evaluación. No necesita contar con toda la información técnica para iniciar."],
  ["¿Las configuraciones son estándar?", "Cada proyecto se revisa según la operación. La disponibilidad de configuraciones y accesorios debe confirmarse con HDC-Tiberi."],
  ["¿Pueden revisar una carrocería existente?", "Sí. El alcance de una mantención o reparación se confirma después de inspeccionar el equipo."]
];
