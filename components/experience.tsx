"use client";

import Image from "next/image";
import { experience } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-surface-alt py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20">
            <div className="md:col-span-4">
              <div className="eyebrow mb-3">Experience</div>
              <h2 className="h-section text-ink">Trajectory</h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
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
          {experience.map((exp, i) => (
            <Reveal key={exp.company}>
              <article className="bg-surface rounded-2xl md:rounded-3xl p-7 md:p-12 transition-shadow duration-300 hover:shadow-[0_4px_24px_rgba(10,10,10,0.04)]">
                <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                  {/* Left: identity (logo + meta) */}
                  <div className="md:col-span-4">
                    {/* Logo — original colors, contained */}
                    <div className="relative h-12 md:h-14 w-full max-w-[180px] mb-7 flex items-center">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={220}
                        height={56}
                        className="object-contain object-left max-h-full w-auto"
                        priority={i === 0}
                      />
                    </div>

                    <div className="eyebrow text-accent mb-3">
                      {exp.period}
                    </div>
                    <div className="text-[15px] font-medium text-ink leading-snug">
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

                    {/* Highlights — hairlines, no bullets */}
                    <div className="space-y-0">
                      {exp.highlights.map((h, hi) => (
                        <div
                          key={hi}
                          className="py-3.5 border-t border-ink-100 last:border-b-0 text-[14px] md:text-[15px] text-ink-700 leading-relaxed first:pt-0 first:border-t-0"
                        >
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
