export const company = {
  name: "Carrocerías HDC-Tiberi", foundedYear: 2015,
  phoneDisplay: "+56 9 9313 5317", phoneE164: "+56993135317", whatsappNumber: "56993135317",
  quoteEmail: "janwrojas@hdc-tiberi.com", mapsUrl: "https://maps.app.goo.gl/4FnzLz8iM7FXrguC6",
  address: { street: "Av. Jorge Hirmas 3131", commune: "Renca", region: "Región Metropolitana", postalCode: "8641092", country: "Chile" }
} as const;
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://carroceriastiberi.cl";
export const whatsappHref = (message = "Hola, quiero solicitar información sobre una carrocería para camión.") => `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
