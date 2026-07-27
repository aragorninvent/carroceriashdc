export type SiteImage = { src: string; alt: string; width: number; height: number; placeholder?: boolean; replacementNote?: string };
export const images = {
  hero: { src: "/images/pending/HERO_camion-hdc-tiberi.webp", alt: "Camión con carrocería cerrada circulando por ruta de montaña", width: 1366, height: 768 },
  workshop: { src: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=1200&q=80", alt: "Trabajo industrial", width: 1200, height: 800, placeholder: true, replacementNote: "Reemplazar por fotografía de fabricación o montaje." }
} satisfies Record<string, SiteImage>;
