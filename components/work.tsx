"use client";

import { useState } from "react";
import { experience } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Work() {
  const [active, setActive] = useState(0);
  const item = experience[active];

  return (
    <section id="work" className="relative px-6 lg:px-12 py-24 md:py-40">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <Reveal>
          <div className="grid md:grid-cols-12 gap-6 mb-16 md:mb-24">
            <div className="md:col-span-3 mono text-[10px] tracking-[0.3em] uppercase text-gold">
              — Chapter 01 / Work
            </div>
            <div className="md:col-span-9">
              <h2 className="display text-4xl md:text-6xl text-ink-100 leading-tight font-light tracking-tight">
                Ten years across
                <br />
                <span className="italic text-ink-300">networks, consulting and luxury.</span>
              </h2>
              <p className="mt-6 text-ink-300 text-base md:text-lg max-w-2xl leading-relaxed font-light">
                A trajectory built deliberately — from operating networks at
                Mobile World Congress, to delivering CRM transformations at Deloitte,
                to leading consumer engagement technology at PUIG.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Two-column: nav left, detail right */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Left: company list */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32 space-y-1">
              <div className="mono text-[10px] tracking-[0.3em] uppercase text-ink-400 mb-6">
                — Trajectory
              </div>
              {experience.map((exp, i) => (
                <button
                  key={exp.company}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group w-full text-left py-4 px-4 -mx-4 border-l-2 transition-all duration-300",
                    active === i
                      ? "border-gold bg-ink-700/40"
                      : "border-ink-700 hover:border-ink-500 hover:bg-ink-700/20"
                  )}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span
                      className={cn(
                        "display text-xl md:text-2xl font-light transition-colors",
                        active === i ? "text-ink-100" : "text-ink-300 group-hover:text-ink-100"
                      )}
                    >
                      {exp.company}
                    </span>
                    <span
                      className={cn(
                        "mono text-[10px] tracking-widest transition-colors",
                        active === i ? "text-gold" : "text-ink-400"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div
                    className={cn(
                      "mono text-[10px] tracking-[0.2em] uppercase mt-1 transition-colors",
                      active === i ? "text-ink-200" : "text-ink-400"
                    )}
                  >
                    {exp.role}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: detail panel */}
          <div className="md:col-span-8">
            <Reveal key={item.company}>
              <article className="border border-ink-700 bg-ink-800/40 p-6 md:p-10">
                {/* Header */}
                <div className="border-b border-ink-700 pb-6 mb-6">
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <span className="mono text-[10px] tracking-[0.3em] uppercase text-gold">
                      {item.period}
                    </span>
                    <span className="mono text-[10px] tracking-[0.25em] uppercase text-ink-400">
                      / {item.location}
                    </span>
                  </div>
                  <h3 className="display text-3xl md:text-4xl text-ink-100 font-light leading-tight">
                    {item.role}
                  </h3>
                  <div className="mt-2 mono text-[11px] tracking-[0.2em] uppercase text-ink-300">
                    at {item.company}
                  </div>
                  <p className="mt-5 text-ink-300 text-sm md:text-base leading-relaxed italic max-w-2xl font-light">
                    {item.context}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <div className="mono text-[10px] tracking-[0.3em] uppercase text-ink-400 mb-5">
                    — Selected work
                  </div>
                  <ul className="space-y-4">
                    {item.highlights.map((h, hi) => (
                      <li key={hi} className="flex gap-4 group">
                        <span className="mono text-[10px] text-gold/70 mt-1.5 flex-shrink-0">
                          {String(hi + 1).padStart(2, "0")}
                        </span>
                        <span className="text-ink-200 text-sm md:text-[15px] leading-relaxed font-light">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-ink-700 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="mono text-[10px] tracking-[0.15em] uppercase text-ink-300 border border-ink-700 px-3 py-1.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
