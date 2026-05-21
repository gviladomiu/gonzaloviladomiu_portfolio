"use client";

import Image from "next/image";
import { experience } from "@/lib/data";
import { Reveal } from "@/components/reveal";

/*
  Per-logo optical sizing.
  All four logos now have roughly square viewBoxes, but their visual weight
  (how much "ink" fills the square) varies. We assign each a tailored
  container height so the perceived size feels uniform across the four cards.

  Keyed by company name → className string for the logo wrapper.
*/
const logoSize: Record<string, string> = {
  PUIG: "h-16 max-w-[150px]",
  Deloitte: "h-8 max-w-[150px]",
  Unitronics: "h-[88px] max-w-[160px]",
  "Fira Barcelona": "h-[88px] max-w-[160px]",
};

const defaultSize = "h-14 max-w-[140px]";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-surface-alt py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <Reveal>
          {/* Añadido md:gap-12 para igualar el gap de las tarjetas inferiores */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
            <div className="md:col-span-4">
              <div className="eyebrow mb-3">Experience</div>
              <h2 className="h-section text-ink">Trajectory</h2>
            </div>

            {/* Eliminado el md:col-start-* para que fluya naturalmente como en las cards */}
            <div className="md:col-span-8">
              <p className="text-base md:text-lg text-ink-700 leading-relaxed max-w-xl">
                Ten years across four organizations — from operating networks at
                Mobile World Congress, to delivering CRM and digital transformation
                at Deloitte, to leading consumer engagement technology at PUIG.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Soft Apple-style blocks separated by gap */}
        <div className="space-y-4 md:space-y-5">
          {experience.map((exp, i) => {
            const sizeClass = logoSize[exp.company] || defaultSize;

            return (
              <Reveal key={exp.company}>
                <article className="bg-surface rounded-2xl md:rounded-3xl p-7 md:p-12 transition-shadow duration-300 hover:shadow-[0_4px_24px_rgba(10,10,10,0.04)]">
                  <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                    {/* Left: identity (logo + meta) */}
                    <div className="md:col-span-4">
                      {/* Per-logo optical frame — sized individually for visual balance */}
                      <div
                        className={`${sizeClass} w-full mb-7 flex items-center`}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            sizes="150px"
                            className="object-contain object-left"
                            priority={i === 0}
                          />
                        </div>
                      </div>

                      <div className="eyebrow text-accent mb-3">
                        {exp.period}
                      </div>

                      <div className="text-[15px] font-medium text-ink-700 leading-snug">
                        {exp.role}
                      </div>

                      <div className="mt-1 text-sm text-ink-500">
                        {exp.location}
                      </div>

                      {/* Stack chips */}
                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {exp.stack.map((s) => (
                          <span
                            key={s}
                            className="font-mono text-[11px] tracking-snug text-ink-600 bg-surface-alt border border-ink-200 px-2.5 py-1 rounded-full"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: narrative content */}
                    <div className="md:col-span-8">
                      {/* Lead — Apple-style large statement */}
                      <p className="text-xl md:text-2xl text-ink leading-snug tracking-snug font-medium mb-8 max-w-2xl">
                        {exp.summary}
                      </p>

                      {/* Highlights — numbered list */}
                      <div className="space-y-0">
                        {exp.highlights.map((h, hi) => (
                          <div
                            key={hi}
                            className="grid grid-cols-[42px_1fr] items-start gap-4 py-3.5 border-t border-ink-100 first:pt-0 first:border-t-0"
                          >
                            <div className="font-mono text-[11px] text-ink-400 pt-1">
                              {String(hi + 1).padStart(2, "0")}
                            </div>

                            <div className="text-[14px] md:text-[15px] text-ink-700 leading-relaxed">
                              {h}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
