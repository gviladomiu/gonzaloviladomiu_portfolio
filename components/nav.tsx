"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "work", label: "Work" },
  { id: "focus", label: "Focus" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 24);
      setProgress(h > 0 ? (y / h) * 100 : 0);

      // Determine active section
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < 120) {
          setActive(s.id);
          return;
        }
      }
      setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ink-900/80 backdrop-blur-md border-b border-ink-700/50"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <span className="mono text-[10px] tracking-[0.3em] text-ink-300 group-hover:text-gold transition-colors">
            GV
          </span>
          <span className="block h-px w-6 bg-ink-500 group-hover:bg-gold group-hover:w-10 transition-all duration-500" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "mono text-[10px] tracking-[0.25em] uppercase transition-colors",
                active === s.id
                  ? "text-gold"
                  : "text-ink-300 hover:text-ink-100"
              )}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:gonzaloviladomiu@gmail.com"
          className="mono text-[10px] tracking-[0.25em] uppercase text-ink-100 link-underline hidden sm:inline-block"
        >
          Get in touch
        </a>
      </div>

      {/* Scroll progress hairline */}
      <div className="absolute bottom-0 left-0 h-px bg-gold/70" style={{ width: `${progress}%` }} />
    </header>
  );
}
