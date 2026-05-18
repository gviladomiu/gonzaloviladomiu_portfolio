"use client";

import { education, certifications, skillGroups } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Background() {
  return (
    <section id="background" className="relative px-6 lg:px-12 py-24 md:py-40 border-t border-ink-700">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-6 mb-16 md:mb-20">
            <div className="md:col-span-3 mono text-[10px] tracking-[0.3em] uppercase text-gold">
              — Chapter 03 / Background
            </div>
            <div className="md:col-span-9">
              <h2 className="display text-4xl md:text-6xl text-ink-100 leading-tight font-light tracking-tight">
                Foundations
                <br />
                <span className="italic text-ink-300">— rigor as a habit.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Bio */}
        <Reveal delay={100}>
          <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-28">
            <div className="md:col-span-3 mono text-[10px] tracking-[0.3em] uppercase text-ink-400 pt-1">
              — Brief biography
            </div>
            <div className="md:col-span-9 space-y-5">
              <p className="text-ink-200 text-base md:text-lg leading-relaxed font-light max-w-3xl">
                I started in the engine room of large-scale events — designing and
                operating the networks that kept Mobile World Congress, Smart City Expo
                and Fira Barcelona running. That foundation in real-time, high-pressure
                infrastructure shaped how I still think about technology:{" "}
                <span className="text-gold">reliability, clarity and outcomes first.</span>
              </p>
              <p className="text-ink-300 text-base md:text-lg leading-relaxed font-light max-w-3xl">
                Years at Deloitte translated that mindset into the language of business.
                As an IT Consultant I led end-to-end CRM transformations across insurance,
                consumer goods and hospitality — building governance models, aligning
                C-level stakeholders and delivering with multidisciplinary teams.
              </p>
              <p className="text-ink-300 text-base md:text-lg leading-relaxed font-light max-w-3xl">
                Today at PUIG I&apos;m responsible for global data quality, consumer data
                governance, analytics, AI and the platforms that connect every brand to its
                consumer. The mission is simple in words and hard in execution:{" "}
                <span className="italic text-ink-100">
                  make luxury feel personal, at scale, everywhere.
                </span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* Education */}
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-24">
            <div className="md:col-span-3 mono text-[10px] tracking-[0.3em] uppercase text-ink-400 pt-1">
              — Education
            </div>
            <div className="md:col-span-9">
              <div className="border-t border-ink-700">
                {education.map((ed) => (
                  <div
                    key={ed.degree}
                    className="grid grid-cols-12 gap-4 py-6 border-b border-ink-700 group hover:bg-ink-800/30 transition-colors -mx-4 px-4"
                  >
                    <div className="col-span-12 md:col-span-3 mono text-[11px] tracking-[0.2em] uppercase text-gold pt-1">
                      {ed.period}
                    </div>
                    <div className="col-span-12 md:col-span-9">
                      <div className="display text-xl md:text-2xl text-ink-100 font-light leading-snug">
                        {ed.degree}
                      </div>
                      <div className="mono text-[11px] tracking-[0.2em] uppercase text-ink-300 mt-1">
                        {ed.school}
                      </div>
                      <div className="text-ink-400 text-sm mt-2 max-w-xl font-light">
                        {ed.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Skills */}
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-24">
            <div className="md:col-span-3 mono text-[10px] tracking-[0.3em] uppercase text-ink-400 pt-1">
              — Competencies
            </div>
            <div className="md:col-span-9 grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="mono text-[10px] tracking-[0.25em] uppercase text-gold">
                      {group.label}
                    </span>
                    <span className="flex-1 h-px bg-ink-700" />
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((s) => (
                      <li key={s} className="text-ink-200 text-sm leading-relaxed font-light">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Certifications */}
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3 mono text-[10px] tracking-[0.3em] uppercase text-ink-400 pt-1">
              — Certifications
            </div>
            <div className="md:col-span-9 flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="mono text-[10px] tracking-[0.15em] uppercase text-ink-200 border border-ink-700 px-3 py-1.5 hover:border-gold hover:text-gold transition-colors"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
