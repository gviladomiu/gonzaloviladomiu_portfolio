import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Test" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-surface text-ink antialiased">{children}
        <Analytics />
      </body>
    </html>
  );
}
