import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gonzalo Viladomiu — Technology Manager",
  description:
    "Technology Manager at PUIG. Consumer engagement, data governance and digital transformation across global luxury beauty.",
  authors: [{ name: "Gonzalo Viladomiu Claraso" }],
  openGraph: {
    title: "Gonzalo Viladomiu — Technology Manager",
    description:
      "Consumer engagement, data governance and digital transformation across global luxury beauty.",
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
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-surface text-ink antialiased">{children}</body>
    </html>
  );
}
