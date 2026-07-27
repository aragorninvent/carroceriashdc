export type SiteImage = { src: string; alt: string; width: number; height: number; placeholder?: boolean; replacementNote?: string };
export const images = {
  hero: { src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1800&q=85", alt: "Camión de carga en ruta", width: 1800, height: 1000, placeholder: true, replacementNote: "Reemplazar por fotografía autorizada de HDC-Tiberi, 1800×1000 px." },
  workshop: { src: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=1200&q=80", alt: "Trabajo industrial", width: 1200, height: 800, placeholder: true, replacementNote: "Reemplazar por fotografía de fabricación o montaje." }
} satisfies Record<string, SiteImage>;
