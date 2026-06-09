"use client";

import { profile, metrics } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-10 grid-bg"
    >
      <div className="max-w-6xl mx-auto">
        {/* Quiet status line — no pulsing dot, no inbound signaling */}
        <div
          className="eyebrow mb-10 md:mb-14 animate-fade-in"
          style={{ animationDelay: "60ms", opacity: 0 }}
        >
          Currently at PUIG · Barcelona
        </div>

        {/* Direct, declarative headline */}
        <h1
          className="h-display text-ink max-w-4xl animate-fade-up"
          style={{ animationDelay: "120ms", opacity: 0 }}
        >
          Gonzalo Viladomiu.
          <br />
          Technology Manager at PUIG.
          <br />
          <span className="text-ink-500">
            Consumer engagement, data and AI.
          </span>
        </h1>

        <p
          className="mt-10 md:mt-14 text-lg md:text-xl text-ink-700 max-w-2xl leading-relaxed animate-fade-up"
          style={{ animationDelay: "240ms", opacity: 0 }}
        >
          {profile.about}
        </p>

        {/* Trajectory line — explicit CIO orientation, kept understated */}
        <p
          className="mt-6 text-sm md:text-base text-ink-500 max-w-2xl leading-relaxed animate-fade-up"
          style={{ animationDelay: "300ms", opacity: 0 }}
        >
          Building toward CIO across data, AI and consumer technology.
        </p>

        <div
          className="mt-10 flex flex-wrap gap-3 animate-fade-up"
          style={{ animationDelay: "360ms", opacity: 0 }}
        >
          <a href="#experience" className="btn">
            View experience
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
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
      </div>
    </section>
  );
}

// Metrics band — surfaced as a standalone block right after the hero
export function Metrics() {
  return (
    <section
      className="relative bg-ink text-surface px-6 md:px-10 py-14 md:py-20"
      aria-labelledby="metrics-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div id="metrics-heading" className="eyebrow text-ink-400 mb-8 md:mb-10">
          By the numbers
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-700">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="bg-ink p-6 md:p-8 flex flex-col justify-between min-h-[140px]"
            >
              <div className="text-4xl md:text-6xl font-medium tracking-tighter text-surface leading-none">
                {m.value}
              </div>
              <div className="mt-4 text-sm md:text-base text-ink-300 leading-snug max-w-[18ch]">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
