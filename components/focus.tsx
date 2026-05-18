"use client";

import { focusAreas } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Focus() {
  return (
    <section id="focus" className="relative px-6 lg:px-12 py-24 md:py-40 border-t border-ink-700">
      {/* Soft top glow */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(200,169,110,0.08), transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-6 mb-16 md:mb-20">
            <div className="md:col-span-3 mono text-[10px] tracking-[0.3em] uppercase text-gold">
              — Chapter 02 / Focus
            </div>
            <div className="md:col-span-9">
              <h2 className="display text-4xl md:text-6xl text-ink-100 leading-tight font-light tracking-tight">
                Four questions
                <br />
                <span className="italic text-ink-300">that drive my work.</span>
              </h2>
              <p className="mt-6 text-ink-300 text-base md:text-lg max-w-2xl leading-relaxed font-light">
                The technology decisions worth obsessing over — at the intersection of
                data, AI, privacy and the consumer experience.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-px bg-ink-700 border border-ink-700">
          {focusAreas.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="h-full bg-ink-900 p-8 md:p-12 group transition-colors hover:bg-ink-800/60">
                <div className="flex items-start gap-6 mb-6">
                  <span className="mono text-[10px] tracking-[0.3em] uppercase text-gold pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="block h-px w-8 bg-gold mt-3 group-hover:w-16 transition-all duration-500" />
                </div>
                <h3 className="display text-2xl md:text-3xl text-ink-100 font-light leading-snug mb-4">
                  {f.title}
                </h3>
                <p className="text-ink-300 text-base leading-relaxed font-light">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
