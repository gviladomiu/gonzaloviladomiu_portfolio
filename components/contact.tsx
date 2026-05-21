"use client";

import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-ink text-surface py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          {/* Ajustado el gap a md:gap-12 para mantener la consistencia */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
            {/* Reducido a col-span-3 */}
            <div className="md:col-span-3">
              <div className="eyebrow text-ink-400 mb-3">Contact</div>
              <h2 className="h-section">Get in touch</h2>
            </div>
            
            {/* Aumentado a col-span-9 y añadido md:pt-8 para alinear con el título */}
            <div className="md:col-span-9 md:pt-8">
              {/* Eliminado max-w-xl para aprovechar todo el ancho a la derecha */}
              <p className="text-base md:text-lg text-ink-200 leading-relaxed">
                The most reliable channels are below. For new conversations, email is
                preferred.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="border-t border-ink-700">
            {[
              {
                label: "Email",
                value: profile.email,
                href: `mailto:${profile.email}`,
                external: false,
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/gviladomiu",
                href: profile.linkedin,
                external: true,
              },
              {
                label: "CV",
                value: "Download PDF",
                href: "/cv-gonzalo-viladomiu.pdf",
                external: true,
              },
              {
                label: "Location",
                value: "Barcelona, Spain",
                href: null,
                external: false,
              },
              {
                label: "Languages",
                value: profile.languages.join(" · "),
                href: null,
                external: false,
              },
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-4 py-6 border-b border-ink-700 items-center"
              >
                <div className="col-span-12 md:col-span-3 eyebrow text-ink-400">
                  {row.label}
                </div>
                <div className="col-span-12 md:col-span-9">
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.external ? "_blank" : undefined}
                      rel={row.external ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-2 text-lg md:text-xl font-medium tracking-snug text-surface hover:text-accent transition-colors"
                    >
                      {row.value}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </a>
                  ) : (
                    <span className="text-lg md:text-xl font-medium tracking-snug text-ink-200">
                      {row.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-500 border-t border-ink-700 py-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs font-mono tracking-snug">
        <div>© {new Date().getFullYear()} Gonzalo Viladomiu Claraso</div>
        <a href="#top" className="hover:text-surface transition-colors">
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
