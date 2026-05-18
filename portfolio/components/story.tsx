"use client";

import { education, certifications, skillGroups } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Story() {
  return (
    <section id="story" className="relative bg-cream-100 py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="eyebrow text-ink-400 mb-6">— Story</div>
          <h2 className="h-section max-w-4xl text-ink">
            How I got here, <br className="hidden md:block" />
            <span className="display italic text-ink-500">and where I&apos;m heading.</span>
          </h2>
        </Reveal>

        {/* Bio narrative — three substantive paragraphs */}
        <Reveal delay={100}>
          <div className="mt-16 md:mt-20 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="eyebrow text-ink-400 sticky top-32">— Biography</div>
            </div>
            <div className="md:col-span-7 space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed text-ink-700 max-w-2xl">
                I started in the engine room of large-scale events — designing and
                operating the networks that kept Mobile World Congress, Smart City Expo
                and Fira Barcelona running. That foundation in real-time, high-pressure
                infrastructure shaped how I still think about technology:{" "}
                <span className="display italic text-ink">
                  reliability, clarity and outcomes first.
                </span>
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-ink-500 max-w-2xl">
                Years at Deloitte translated that mindset into the language of business.
                As an IT Consultant I led end-to-end CRM transformations across insurance,
                consumer goods and hospitality — building governance models, aligning
                C-level stakeholders and delivering with multidisciplinary teams.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-ink-500 max-w-2xl">
                Today at PUIG I&apos;m responsible for global data quality, consumer
                data governance, analytics, AI and the platforms that connect every
                brand to its consumer. The mission is simple in words and hard in
                execution: make luxury feel personal, at scale, everywhere.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Education */}
        <Reveal>
          <div className="mt-24 md:mt-32 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="eyebrow text-ink-400 mb-6">— Education</div>
              <div className="text-base text-ink-500 max-w-xs">
                Engineering, technology management and digital innovation —
                with a Master&apos;s focused on transformation and emerging tech.
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="border-t border-cream-200">
                {education.map((ed) => (
                  <div
                    key={ed.degree}
                    className="grid grid-cols-12 gap-4 py-7 border-b border-cream-200 group"
                  >
                    <div className="col-span-12 md:col-span-3 mono text-[11px] tracking-wider text-ink-500 pt-1">
                      {ed.period}
                    </div>
                    <div className="col-span-12 md:col-span-9">
                      <div className="text-xl md:text-2xl font-medium tracking-snug text-ink">
                        {ed.degree}
                      </div>
                      <div className="display italic text-base text-ink-500 mt-1">
                        {ed.school}
                      </div>
                      <div className="text-sm text-ink-500 mt-2 max-w-xl">
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
          <div className="mt-24 md:mt-32 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="eyebrow text-ink-400 mb-6">— Competencies</div>
              <div className="text-base text-ink-500 max-w-xs">
                A hybrid skillset built across data, platforms, leadership and the
                languages you need to make all three work together.
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6 md:gap-8">
              {skillGroups.map((group) => (
                <div
                  key={group.label}
                  className="bg-cream-50 rounded-2xl p-6 md:p-7 border border-cream-200"
                >
                  <div className="eyebrow text-accent mb-5">{group.label}</div>
                  <ul className="space-y-2.5">
                    {group.items.map((s) => (
                      <li key={s} className="text-[15px] text-ink-700 leading-snug">
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
          <div className="mt-24 md:mt-32 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="eyebrow text-ink-400 mb-6">— Certifications</div>
              <div className="text-base text-ink-500 max-w-xs">
                Industry credentials across CRM, privacy, cloud and analytics.
              </div>
            </div>
            <div className="md:col-span-8 flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="text-[13px] font-medium tracking-snug text-ink-700 bg-cream-50 border border-cream-200 px-4 py-2 rounded-full hover:bg-ink hover:text-cream-50 hover:border-ink transition-colors"
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
