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
    "Gonzalo Viladomiu",
    "Technology Manager",
    "PUIG",
    "Consumer Engagement",
    "Data Governance",
    "Digital Transformation",
    "CIO",
    "Barcelona",
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
  // If you verified Search Console via DNS already, you can leave this out.
  // To verify by meta tag instead, paste your code here:
  // verification: { google: "YOUR_CODE" },
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
