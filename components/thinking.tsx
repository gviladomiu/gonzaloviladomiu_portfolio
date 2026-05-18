"use client";

import { focusAreas } from "@/lib/data";
import { Reveal } from "@/components/reveal";

// Each card alternates between a tinted block and a stark light card — Apple grid-of-features feel.
const cardStyles = [
  "bg-block-sky text-ink",
  "bg-cream-100 text-ink border border-cream-200",
  "bg-block-peach text-ink",
  "bg-ink text-cream-50",
];

export function Thinking() {
  return (
    <section id="thinking" className="relative bg-cream-50 py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="eyebrow text-ink-400 mb-6">— Thinking</div>
          <h2 className="h-section max-w-4xl text-ink">
            Four questions
            <br className="hidden md:block" /> that{" "}
            <span className="display italic text-ink-500">drive my work.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-ink-500 max-w-2xl leading-relaxed">
            The technology decisions worth obsessing over — where data, AI,
            privacy and the consumer experience meet.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-5 md:gap-6">
          {focusAreas.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div
                className={`${cardStyles[i % cardStyles.length]} rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between min-h-[360px] md:min-h-[420px]`}
              >
                <div className="eyebrow opacity-70">
                  {String(i + 1).padStart(2, "0")} / Focus
                </div>
                <div>
                  <h3 className="h-block mb-5 max-w-md">{f.title}</h3>
                  <p className="text-base md:text-lg leading-relaxed opacity-80 max-w-md">
                    {f.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
