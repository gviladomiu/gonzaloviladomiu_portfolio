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
          <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20">
            <div className="md:col-span-4">
              <div className="eyebrow text-ink-400 mb-3">— Contact</div>
              <h2 className="h-section">Get in touch</h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-base md:text-lg text-ink-200 leading-relaxed max-w-xl">
                The most reliable channels are below. For new conversations, email is
                preferred.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Contact entries as records */}
        <Reveal>
          <div className="border-t border-ink-700">
            {[
              { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { label: "LinkedIn", value: "linkedin.com/in/gviladomiu", href: profile.linkedin },
              { label: "CV", value: "Download PDF", href: "/cv-gonzalo-viladomiu.pdf" },
              { label: "Location", value: "Barcelona, Spain · Available across Europe", href: null },
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
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-lg md:text-xl font-medium tracking-snug text-surface hover:text-accent transition-colors"
                    >
                      {row.value}
                      <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
