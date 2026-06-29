import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gonzaloviladomiu.xyz"),
  title: "Gonzalo Viladomiu — Technology Manager",
  description:
    "Technology Manager at PUIG. Consumer engagement, data governance and digital transformation across global luxury beauty. Building toward CIO.",
  authors: [{ name: "Gonzalo Viladomiu Claraso" }],
  robots: { index: true, follow: true },
keywords: [
    // Identidad y Marca Personal
    "Gonzalo Viladomiu",
    "Gonzalo Viladomiu Claraso",
    "Portfolio",
    
    // Roles Principales
    "Technology Manager",
    "IT Project Manager",
    "Product Manager",
    
    // Sector y Especialidad
    "Consumer Engagement",
    "Digital Transformation",
    "Luxury Beauty Tech",
    "PUIG",
    "Loyalty Programs",
    "CRM",
    
    // Competencias Técnicas y de Datos
    "Data Governance",
    "Data Quality",
    "SQL",
    "BigQuery",
    
    // Herramientas y Metodologías
    "Agile",
    "Jira",
    "Confluence",
    
    // Intereses Tecnológicos y de Diseño paralelos
    "Artificial Intelligence",
    "UX Design",
    "Product Design",
    
    // Ubicación (Clave para búsquedas locales de talento)
    "Barcelona",
    "Spain"
  ],
  openGraph: {
    title: "Gonzalo Viladomiu — Technology Manager",
    description:
      "Consumer engagement, data governance and digital transformation across global luxury beauty.",
    url: "https://gonzaloviladomiu.xyz",
    siteName: "Gonzalo Viladomiu",
    locale: "en_GB",
    type: "website",
  },
};

// JSON-LD structured data — tells Google this site is a person's professional identity
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gonzalo Viladomiu Claraso",
  alternateName: "Gonzalo Viladomiu",
  url: "https://gonzaloviladomiu.xyz",
  jobTitle: "Technology Manager",
  worksFor: {
    "@type": "Organization",
    name: "PUIG",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barcelona",
    addressCountry: "ES",
  },
  email: "mailto:gonzaloviladomiu@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/gviladomiu",
    "https://github.com/gviladomiu",
  ],
  knowsAbout: [
    "Data Governance",
    "Consumer Engagement",
    "Digital Transformation",
    "Artificial Intelligence",
    "CRM",
    "Data Quality",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-surface text-ink antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
