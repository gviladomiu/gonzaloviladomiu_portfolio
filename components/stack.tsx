"use client";

import { stack, certifications } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Stack() {
  return (
    <section
      id="stack"
      className="relative bg-surface-alt py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          {/* Ajustado el gap a md:gap-12 para igualar a la sección Experience */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
            {/* Reducido a col-span-3 */}
            <div className="md:col-span-3">
              <div className="eyebrow mb-3">Stack</div>
              <h2 className="h-section text-ink">Tools &amp; competencies</h2>
            </div>
            
            {/* Aumentado a col-span-9, añadido md:pt-8 para bajarlo a la altura del título */}
            <div className="md:col-span-9 md:pt-8">
              {/* Eliminado max-w-xl para que se estire a la derecha */}
              <p className="text-base md:text-lg text-ink-700 leading-relaxed">
                A working stack built across platforms, cloud, data governance and
                delivery — the technologies and disciplines I&apos;ve operated with at depth.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-200 border border-ink-200">
            {stack.map((group) => (
              <div
                key={group.category}
                className="bg-surface p-6 md:p-7 min-h-[180px] flex flex-col"
              >
                <div className="eyebrow text-accent mb-4">{group.category}</div>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-[15px] text-ink-800 font-medium tracking-snug"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          {/* Añadido md:gap-12 para mantener consistencia con el bloque superior */}
          <div className="mt-20 md:mt-24 grid md:grid-cols-12 gap-8 md:gap-12">
            {/* Reducido a col-span-3 para alinear con el encabezado superior */}
            <div className="md:col-span-3">
              <div className="eyebrow mb-3">Certifications</div>
              <p className="text-sm text-ink-500 max-w-xs leading-relaxed">
                Salesforce stack, privacy, analytics and networking foundations.
              </p>
            </div>
            
            {/* Aumentado a col-span-9 y eliminado md:col-start-6 para alineación perfecta */}
            <div className="md:col-span-9">
              <div className="flex flex-wrap gap-2">
                {certifications.map((c) => (
                  <span
                    key={c}
                    className="font-mono text-[12px] tracking-snug text-ink-700 bg-surface border border-ink-200 px-3 py-1.5 hover:border-accent hover:text-accent transition-colors"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
