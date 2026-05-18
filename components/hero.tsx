"use client";

import { ArrowUpRight } from "lucide-react";

const credentialedAt = [
  "PUIG",
  "Deloitte",
  "Unitronics",
  "Fira Barcelona",
  "La Salle URL",
  "MWC Barcelona",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-44 md:pt-52 pb-20 md:pb-28 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div
          className="eyebrow text-ink-500 mb-8 md:mb-12 animate-fade-up"
          style={{ animationDelay: "100ms", opacity: 0 }}
        >
          Technology Manager · Barcelona · Available for advisory
        </div>

        {/* Hero declarative statement — Synthesis-style "We invest in the future of food." */}
        <h1
          className="h-display max-w-5xl text-ink animate-fade-up"
          style={{ animationDelay: "200ms", opacity: 0 }}
        >
          I build the technology that
          <br className="hidden md:block" />{" "}
          <span className="display italic font-normal text-ink-700">
            makes luxury feel personal,
          </span>
          <br className="hidden md:block" /> at scale, everywhere.
        </h1>

        {/* Sub-statement */}
        <div
          className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 animate-fade-up"
          style={{ animationDelay: "400ms", opacity: 0 }}
        >
          <div className="md:col-span-6">
            <p className="text-lg md:text-xl leading-relaxed text-ink-500 max-w-xl">
              I&apos;m Gonzalo. Currently Technology Manager at PUIG, leading
              Consumer Engagement Technology across a global luxury group
              present in 150+ countries — data governance, AI, clienteling and
              the platforms that connect every brand to its consumer.
            </p>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex md:justify-end items-end">
            <div className="flex flex-wrap gap-3">
              <a href="#work" className="pill-link">
                See the work
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="/cv-gonzalo-viladomiu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-link"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Stats strip — Synthesis-inspired */}
        <div
          className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 border-t border-cream-200 animate-fade-up"
          style={{ animationDelay: "600ms", opacity: 0 }}
        >
          {[
            { num: "10", label: "Years in tech" },
            { num: "150+", label: "Countries served at PUIG" },
            { num: "4", label: "Companies, one trajectory" },
            { num: "1", label: "Mission: data into experience" },
          ].map((s, i) => (
            <div
              key={i}
              className={`py-8 md:py-10 ${i < 3 ? "md:border-r border-cream-200" : ""} ${i === 1 ? "border-r md:border-r border-cream-200" : ""} ${i < 2 ? "border-r md:border-r-0 md:border-r border-cream-200" : ""} px-1`}
            >
              <div className="h-block text-ink">{s.num}</div>
              <div className="mt-2 text-sm text-ink-500 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Credential strip — Perk-inspired logo marquee, but text-based for typography integrity */}
      <div className="relative mt-20 md:mt-28 overflow-hidden border-t border-b border-cream-200 py-5 marquee">
        <div className="marquee-track">
          {[...credentialedAt, ...credentialedAt, ...credentialedAt].map((c, i) => (
            <span
              key={i}
              className="display italic text-3xl md:text-4xl text-ink-400 whitespace-nowrap"
            >
              {c}
              <span className="mx-8 text-ink-300 not-italic">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
