"use client";

import { education } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Education() {
  return (
    <section
      id="education"
      className="relative bg-surface py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20">
            <div className="md:col-span-4">
              <div className="eyebrow mb-3">— Education</div>
              <h2 className="h-section text-ink">Academic record</h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-base md:text-lg text-ink-700 leading-relaxed max-w-xl">
                Engineering foundation reoriented towards business and technology
                management — closing with a Master&apos;s in digital innovation.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="border-t border-ink-200">
            {education.map((ed) => (
              <div
                key={ed.degree}
                className="grid grid-cols-12 gap-4 py-7 border-b border-ink-200"
              >
                <div className="col-span-12 md:col-span-3 font-mono text-[12px] tracking-snug text-ink-500 pt-1">
                  {ed.period}
                </div>
                <div className="col-span-12 md:col-span-9 md:grid md:grid-cols-9 md:gap-6">
                  <div className="md:col-span-5">
                    <div className="text-lg md:text-xl font-medium tracking-snug text-ink leading-snug">
                      {ed.degree}
                    </div>
                    <div className="mt-1 text-sm text-ink-500">{ed.school}</div>
                  </div>
                  <div className="md:col-span-4 mt-3 md:mt-0 text-sm text-ink-700 leading-relaxed">
                    {ed.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
