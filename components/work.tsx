"use client";

import { experience } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight } from "lucide-react";

// One color block per company — Perk-style modular sections
const blockStyles = [
  { bg: "bg-block-olive", text: "text-cream-50", muted: "text-cream-100/70", border: "border-cream-100/20", eyebrowColor: "text-cream-100" },
  { bg: "bg-block-peach", text: "text-ink", muted: "text-ink-700", border: "border-ink/15", eyebrowColor: "text-ink-700" },
  { bg: "bg-block-sand", text: "text-ink", muted: "text-ink-700", border: "border-ink/15", eyebrowColor: "text-ink-700" },
  { bg: "bg-block-rose", text: "text-ink", muted: "text-ink-700", border: "border-ink/15", eyebrowColor: "text-ink-700" },
];

export function Work() {
  return (
    <section id="work" className="relative">
      {/* Section header on cream */}
      <div className="px-6 md:px-12 pt-24 md:pt-40 pb-16 md:pb-24 max-w-7xl mx-auto">
        <Reveal>
          <div className="eyebrow text-ink-400 mb-6">— Work</div>
          <h2 className="h-section max-w-4xl text-ink">
            Ten years across networks, consulting and{" "}
            <span className="display italic text-ink-500">luxury beauty.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-ink-500 max-w-2xl leading-relaxed">
            A trajectory built deliberately — from operating the networks behind
            Mobile World Congress to leading consumer engagement technology at
            a global beauty group.
          </p>
        </Reveal>
      </div>

      {/* Modular color blocks per experience */}
      <div className="space-y-0">
        {experience.map((exp, i) => {
          const style = blockStyles[i % blockStyles.length];
          return (
            <Reveal key={exp.company}>
              <article className={`${style.bg} ${style.text} py-16 md:py-24 px-6 md:px-12 border-b ${style.border}`}>
                <div className="max-w-7xl mx-auto">
                  <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                    {/* Left column: meta */}
                    <div className="md:col-span-4">
                      <div className={`eyebrow ${style.eyebrowColor} mb-6`}>
                        {String(i + 1).padStart(2, "0")} / {exp.period}
                      </div>
                      <div className="display italic text-4xl md:text-5xl leading-none mb-4">
                        {exp.company}
                      </div>
                      <div className="text-base md:text-lg font-medium leading-snug">
                        {exp.role}
                      </div>
                      <div className={`mt-1 text-sm ${style.muted}`}>{exp.location}</div>

                      {/* Tags */}
                      <div className="mt-8 flex flex-wrap gap-2">
                        {exp.tags.slice(0, 5).map((t) => (
                          <span
                            key={t}
                            className={`text-[11px] tracking-snug font-medium px-3 py-1.5 rounded-full border ${style.border}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right column: context + highlights */}
                    <div className="md:col-span-7 md:col-start-6">
                      <p className={`text-lg md:text-xl leading-relaxed mb-10 max-w-xl`}>
                        {exp.context}
                      </p>

                      <div className={`eyebrow ${style.eyebrowColor} mb-5`}>
                        Selected work
                      </div>
                      <ul className="space-y-4">
                        {exp.highlights.map((h, hi) => (
                          <li
                            key={hi}
                            className={`flex gap-5 text-[15px] md:text-base leading-relaxed ${style.muted} pb-4 border-b ${style.border} last:border-b-0`}
                          >
                            <span className={`mono text-[11px] pt-1 ${style.muted} flex-shrink-0`}>
                              {String(hi + 1).padStart(2, "0")}
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
