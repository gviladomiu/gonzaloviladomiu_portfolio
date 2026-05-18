import type { Metadata } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gonzalo Viladomiu — Technology Manager, Data & Consumer Engagement",
  description:
    "Technology Manager at PUIG. Building the future of consumer engagement through data, AI and digital transformation in global luxury beauty. Based in Barcelona.",
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
  authors: [{ name: "Gonzalo Viladomiu Claraso" }],
  openGraph: {
    title: "Gonzalo Viladomiu — Technology Manager",
    description:
      "Building the future of consumer engagement through data, AI and digital transformation.",
    url: "https://gonzaloviladomiu.com",
    siteName: "Gonzalo Viladomiu",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonzalo Viladomiu",
    description: "Technology Manager · Data & Consumer Engagement.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body className="grain">{children}</body>
    </html>
  );
}
