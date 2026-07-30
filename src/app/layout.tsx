import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./mobile.css";
import "./leaflet.css";
import "./map-layout.css";
import "./gallery.css";
import { Header, Footer, WhatsApp } from "@/components/site-shell";
import { siteUrl } from "@/data/company";
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-G9EVZTK7NX";
export const metadata: Metadata = { metadataBase: new URL(siteUrl), title: {default:"Carrocerías para camiones en Chile | HDC-Tiberi",template:"%s | HDC-Tiberi"}, description:"Fabricación, montaje, reparación y mantención de carrocerías para camiones de carga general y transporte refrigerado en Chile.", openGraph:{type:"website",locale:"es_CL",siteName:"Carrocerías HDC-Tiberi"}, twitter:{card:"summary_large_image"} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="es-CL"><body><a className="skip" href="#contenido">Saltar al contenido</a><Header/><main id="contenido">{children}</main><Footer/><WhatsApp/><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "${gaMeasurementId}");`}</Script><Script src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} strategy="afterInteractive" /></body></html>; }
