"use client";

import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight, Mail, Linkedin, MapPin, FileDown } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-block-ink text-cream-50 py-24 md:py-40 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <div className="eyebrow text-cream-100/60 mb-6">— Contact</div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="h-display max-w-5xl">
            Let&apos;s build{" "}
            <span className="display italic text-cream-100/70">something</span>
            <br />
            worth shipping.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-10 md:mt-12 text-lg md:text-xl text-cream-100/70 max-w-2xl leading-relaxed">
            Open to conversations on data governance, consumer engagement,
            AI in luxury, digital transformation — or to advisory and
            speaking opportunities.
          </p>
        </Reveal>

        {/* Action grid */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-12 gap-5 md:gap-6">
          {/* Primary email card */}
          <Reveal delay={300} className="md:col-span-7">
            <a
              href={`mailto:${profile.email}`}
              className="group block h-full bg-cream-50 text-ink rounded-3xl p-8 md:p-10 transition-all duration-500 hover:bg-accent hover:text-cream-50"
            >
              <div className="flex items-start justify-between gap-6 h-full">
                <div className="flex-1">
                  <div className="eyebrow opacity-60 mb-4">Primary</div>
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-5 h-5" />
                    <span className="text-sm font-medium tracking-snug">Email</span>
                  </div>
                  <div className="h-block break-all leading-tight">
                    {profile.email}
                  </div>
                </div>
                <ArrowUpRight className="w-7 h-7 flex-shrink-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          </Reveal>

          <div className="md:col-span-5 grid grid-cols-1 gap-5 md:gap-6">
            <Reveal delay={400}>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-cream-100/[0.07] border border-cream-100/15 rounded-3xl p-6 md:p-7 transition-all duration-500 hover:bg-cream-100/[0.12] hover:border-cream-100/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5" />
                    <span className="text-base font-medium tracking-snug">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </a>
            </Reveal>

            <Reveal delay={500}>
              <a
                href="/cv-gonzalo-viladomiu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-cream-100/[0.07] border border-cream-100/15 rounded-3xl p-6 md:p-7 transition-all duration-500 hover:bg-cream-100/[0.12] hover:border-cream-100/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileDown className="w-5 h-5" />
                    <span className="text-base font-medium tracking-snug">Download CV</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </a>
            </Reveal>

            <Reveal delay={600}>
              <div className="bg-cream-100/[0.07] border border-cream-100/15 rounded-3xl p-6 md:p-7">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-base font-medium tracking-snug">Based in</span>
                </div>
                <div className="text-cream-100/80 text-sm mt-1">
                  Barcelona, Spain · Available across Europe
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-block-ink text-cream-100/50 border-t border-cream-100/10 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 text-xs md:text-sm">
        <div className="font-medium">
          © {new Date().getFullYear()} Gonzalo Viladomiu Claraso
        </div>
        <div className="md:text-center display italic">
          Crafted with intent in Barcelona.
        </div>
        <div className="md:text-right">
          <a
            href="#top"
            className="hover:text-cream-50 transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
