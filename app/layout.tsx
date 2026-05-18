import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gonzalo Viladomiu — Technology, data & consumer engagement",
  description:
    "Technology Manager at PUIG. Building the future of consumer engagement through data, AI and digital transformation in global luxury beauty. Based in Barcelona.",
  authors: [{ name: "Gonzalo Viladomiu Claraso" }],
  openGraph: {
    title: "Gonzalo Viladomiu — Technology Manager",
    description:
      "Building the future of consumer engagement through data, AI and digital transformation.",
    locale: "en_GB",
    type: "website",
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
      className={`${GeistSans.variable} ${instrument.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-cream-50 text-ink antialiased">{children}</body>
    </html>
  );
}
