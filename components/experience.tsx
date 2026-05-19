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
          <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-28">
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

        {/* Full-width blocks separated by space and hairlines */}
        <div>
          {experience.map((exp, i) => (
            <Reveal key={exp.company}>
              <article
                className={`grid md:grid-cols-12 gap-8 md:gap-12 py-20 md:py-28 ${
                  i > 0 ? "border-t border-ink-200" : ""
                }`}
              >
                {/* Left: identity (logo + meta) */}
                <div className="md:col-span-4">
                  <div className="md:sticky md:top-28">
                    {/* Logo block — large, monochrome via CSS filter for consistency */}
                    <div className="relative h-16 md:h-20 w-full max-w-[200px] mb-8 flex items-center">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={220}
                        height={80}
                        className="logo-mono object-contain object-left max-h-full w-auto"
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
                          className="font-mono text-[11px] tracking-snug text-ink-600 bg-surface border border-ink-200 px-2.5 py-1"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: narrative content */}
                <div className="md:col-span-7 md:col-start-6">
                  {/* Lead — large summary statement */}
                  <p className="text-xl md:text-2xl text-ink leading-snug tracking-snug font-medium mb-10 max-w-2xl">
                    {exp.summary}
                  </p>

                  {/* Highlights — no numbers, no bullets, just rhythmic hairlines */}
                  <div className="space-y-0">
                    {exp.highlights.map((h, hi) => (
                      <div
                        key={hi}
                        className="py-4 border-t border-ink-200/70 last:border-b last:border-b-ink-200/70 text-[15px] md:text-[16px] text-ink-700 leading-relaxed"
                      >
                        {h}
                      </div>
                    ))}
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
