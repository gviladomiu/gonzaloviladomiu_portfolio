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
              <div className="eyebrow mb-3">— Experience</div>
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

        {/* Each role as a card on white surface for internal contrast */}
        <div className="space-y-5 md:space-y-6">
          {experience.map((exp, i) => (
            <Reveal key={exp.company}>
              <article className="bg-surface border border-ink-200/70 p-6 md:p-10 hover:border-ink-300 transition-colors">
                <div className="grid md:grid-cols-12 gap-6 md:gap-10">
                  {/* Left: logo + meta */}
                  <div className="md:col-span-4">
                    {exp.logo && (
                      <div className="relative h-10 w-44 mb-6">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          fill
                          className="object-contain object-left mix-blend-multiply"
                          priority={i === 0}
                        />
                      </div>
                    )}

                    <div className="eyebrow text-accent mb-4">
                      {String(i + 1).padStart(2, "0")} / {exp.period}
                    </div>
                    <div className="text-2xl md:text-3xl font-medium tracking-tight text-ink leading-tight">
                      {exp.company}
                    </div>
                    <div className="mt-2 text-[15px] text-ink-700 font-medium">
                      {exp.role}
                    </div>
                    <div className="mt-1 text-sm text-ink-500">{exp.location}</div>

                    {/* Stack chips */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[11px] tracking-snug text-ink-600 bg-surface-alt border border-ink-200 px-2.5 py-1"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: summary + highlights */}
                  <div className="md:col-span-8">
                    <p className="text-base md:text-lg text-ink-700 leading-relaxed mb-6 border-l-2 border-accent/60 pl-5 italic">
                      {exp.summary}
                    </p>

                    <ul className="space-y-0">
                      {exp.highlights.map((h, hi) => (
                        <li
                          key={hi}
                          className="flex gap-5 py-3.5 border-b border-ink-100 last:border-b-0 text-[14px] md:text-[15px] text-ink-700 leading-relaxed"
                        >
                          <span className="font-mono text-[11px] text-ink-400 pt-1.5 flex-shrink-0">
                            {String(hi + 1).padStart(2, "0")}
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
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
