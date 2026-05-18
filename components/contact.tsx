"use client";

import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight, Mail, MapPin, Linkedin, FileDown } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 lg:px-12 py-24 md:py-40 border-t border-ink-700 overflow-hidden"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(200,169,110,0.08), transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="mono text-[10px] tracking-[0.3em] uppercase text-gold mb-8">
            — Chapter 04 / Get in touch
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="display text-5xl md:text-8xl lg:text-[8rem] leading-[0.95] font-light tracking-[-0.03em] text-ink-100">
            Let&apos;s build
            <br />
            <span className="italic text-ink-200">something</span>
            <br />
            <span className="text-gold">worth shipping.</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-10 text-ink-300 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
            Open to conversations on data governance, consumer engagement, AI in luxury,
            digital transformation — or to advisory and speaking opportunities.
          </p>
        </Reveal>

        {/* Action grid */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-12 gap-6">
          <Reveal delay={300} className="md:col-span-7">
            <a
              href={`mailto:${profile.email}`}
              className="group block border border-ink-700 hover:border-gold transition-colors p-8 md:p-10 bg-ink-800/30 hover:bg-ink-800/60"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="mono text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
                    — Primary
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-5 h-5 text-ink-300 group-hover:text-gold transition-colors" />
                    <span className="mono text-[11px] tracking-[0.2em] uppercase text-ink-300">
                      Email
                    </span>
                  </div>
                  <div className="display text-2xl md:text-3xl text-ink-100 font-light mt-2 break-all">
                    {profile.email}
                  </div>
                </div>
                <ArrowUpRight className="w-6 h-6 text-ink-400 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
              </div>
            </a>
          </Reveal>

          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            <Reveal delay={400}>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-ink-700 hover:border-gold transition-colors p-6 bg-ink-800/30 hover:bg-ink-800/60"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-ink-300 group-hover:text-gold transition-colors" />
                    <span className="mono text-[11px] tracking-[0.2em] uppercase text-ink-200 group-hover:text-ink-100 transition-colors">
                      LinkedIn
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-400 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </a>
            </Reveal>

            <Reveal delay={500}>
              <a
                href="/cv-gonzalo-viladomiu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-ink-700 hover:border-gold transition-colors p-6 bg-ink-800/30 hover:bg-ink-800/60"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileDown className="w-4 h-4 text-ink-300 group-hover:text-gold transition-colors" />
                    <span className="mono text-[11px] tracking-[0.2em] uppercase text-ink-200 group-hover:text-ink-100 transition-colors">
                      Download CV
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-400 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </a>
            </Reveal>

            <Reveal delay={600}>
              <div className="border border-ink-700 p-6 bg-ink-800/30">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-4 h-4 text-ink-300" />
                  <span className="mono text-[11px] tracking-[0.2em] uppercase text-ink-300">
                    Based in
                  </span>
                </div>
                <div className="text-ink-100 text-base font-light mt-1">
                  Barcelona, Spain
                </div>
                <div className="text-ink-400 text-sm font-light">
                  Available across Europe
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative px-6 lg:px-12 py-12 border-t border-ink-700">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mono text-[10px] tracking-[0.25em] uppercase text-ink-400">
        <div>
          © {new Date().getFullYear()} Gonzalo Viladomiu Claraso
        </div>
        <div className="md:text-center text-ink-300">
          — Crafted with intent in Barcelona —
        </div>
        <div className="md:text-right">
          <a
            href="#top"
            className="hover:text-gold transition-colors link-underline"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
