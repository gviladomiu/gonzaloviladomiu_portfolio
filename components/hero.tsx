"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

export function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const opts: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/Madrid",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setTime(now.toLocaleTimeString("en-GB", opts));
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 lg:px-12 overflow-hidden"
    >
      {/* Atmospheric gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(200,169,110,0.10) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 90% 80%, rgba(200,169,110,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Top meta bar */}
      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-6 mono text-[10px] tracking-[0.25em] uppercase text-ink-300 animate-fade-in">
        <div>
          <div className="text-ink-400 mb-1">— Profile</div>
          <div className="text-ink-100">N°·001</div>
        </div>
        <div>
          <div className="text-ink-400 mb-1">— Based in</div>
          <div className="text-ink-100">Barcelona / 41.4°N</div>
        </div>
        <div>
          <div className="text-ink-400 mb-1">— Status</div>
          <div className="text-gold flex items-center gap-2">
            <span className="block h-1.5 w-1.5 rounded-full bg-gold animate-shimmer" />
            In motion
          </div>
        </div>
        <div>
          <div className="text-ink-400 mb-1">— Local time</div>
          <div className="text-ink-100">{time || "—"}</div>
        </div>
      </div>

      {/* Display headline */}
      <div className="relative max-w-6xl mx-auto w-full mt-16 md:mt-24">
        <div
          className="mono text-[10px] tracking-[0.4em] uppercase text-gold mb-8 animate-fade-up"
          style={{ animationDelay: "100ms", opacity: 0 }}
        >
          — Technology, data &amp; consumer engagement
        </div>

        <h1
          className="display text-[12vw] md:text-[8.5vw] lg:text-[7.5vw] leading-[0.92] font-light tracking-[-0.03em] text-ink-100 animate-fade-up"
          style={{ animationDelay: "200ms", opacity: 0 }}
        >
          Gonzalo
          <br />
          <span className="italic font-extralight text-ink-200">Viladomiu.</span>
        </h1>

        <div
          className="mt-10 md:mt-14 grid md:grid-cols-12 gap-6 animate-fade-up"
          style={{ animationDelay: "400ms", opacity: 0 }}
        >
          <div className="md:col-span-1 hidden md:flex justify-end pt-2">
            <span className="block h-px w-12 bg-gold mt-3" />
          </div>
          <p className="md:col-span-8 text-lg md:text-xl text-ink-200 leading-relaxed max-w-2xl font-light">
            Currently <span className="text-gold">Technology Manager</span> at PUIG —
            leading Consumer Engagement Technology across a global luxury group
            present in <span className="text-ink-100">150+ countries</span>.
          </p>
          <div className="md:col-span-3 flex md:justify-end mono text-[10px] tracking-[0.25em] uppercase text-ink-400 md:text-right pt-2">
            <div>
              <div className="text-ink-100">2016 →</div>
              <div>~10 yrs in tech</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom — tagline + scroll cue */}
      <div className="relative max-w-6xl mx-auto w-full mt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <p
          className="display text-ink-300 text-2xl md:text-3xl leading-snug italic max-w-xl font-extralight animate-fade-up"
          style={{ animationDelay: "600ms", opacity: 0 }}
        >
          "{profile.tagline}"
        </p>

        <a
          href="#work"
          className="group mono text-[10px] tracking-[0.3em] uppercase text-ink-300 hover:text-gold transition-colors flex items-center gap-3"
        >
          Scroll
          <span className="block h-px w-10 bg-ink-400 group-hover:w-16 group-hover:bg-gold transition-all duration-500" />
        </a>
      </div>
    </section>
  );
}
