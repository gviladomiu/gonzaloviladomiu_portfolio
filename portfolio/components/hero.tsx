"use client";

import { profile } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-10 grid-bg"
    >
      <div className="max-w-6xl mx-auto">
        {/* Status line */}
        <div
          className="eyebrow flex items-center gap-3 mb-10 md:mb-14 animate-fade-in"
          style={{ animationDelay: "60ms", opacity: 0 }}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-accent" />
          <span>Currently at PUIG · Barcelona · Open to inbound</span>
        </div>

        {/* Main headline — factual identifier */}
        <h1
          className="h-display text-ink max-w-4xl animate-fade-up"
          style={{ animationDelay: "120ms", opacity: 0 }}
        >
          Gonzalo Viladomiu.
          <br />
          <span className="text-ink-500">Technology Manager —</span>
          <br />
          consumer engagement, data, AI.
        </h1>

        {/* Factual one-liner */}
        <p
          className="mt-10 md:mt-14 text-lg md:text-xl text-ink-700 max-w-2xl leading-relaxed animate-fade-up"
          style={{ animationDelay: "240ms", opacity: 0 }}
        >
          {profile.about}
        </p>

        {/* Actions */}
        <div
          className="mt-10 flex flex-wrap gap-3 animate-fade-up"
          style={{ animationDelay: "360ms", opacity: 0 }}
        >
          <a href="#experience" className="btn">
            View experience
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="/cv-gonzalo-viladomiu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Download CV
          </a>
        </div>

        {/* Identifier grid — factual data points */}
        <div
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 border-t border-ink-100 animate-fade-up"
          style={{ animationDelay: "480ms", opacity: 0 }}
        >
          {[
            { label: "Based in", value: "Barcelona" },
            { label: "Years in tech", value: "~10" },
            { label: "Current focus", value: "Data · AI · CRM" },
            { label: "Work auth.", value: "EU" },
          ].map((d, i) => (
            <div
              key={i}
              className={`py-7 md:py-9 px-0 md:px-4 ${
                i < 3 ? "md:border-r border-ink-100" : ""
              } ${i === 1 ? "border-r md:border-r border-ink-100" : ""} ${
                i < 2 ? "border-r md:border-r-0 md:border-r border-ink-100" : ""
              }`}
            >
              <div className="eyebrow mb-2">{d.label}</div>
              <div className="text-xl md:text-2xl font-medium tracking-snug text-ink">
                {d.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
