"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "work", label: "Work" },
  { id: "thinking", label: "Thinking" },
  { id: "story", label: "Story" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div
        className={cn(
          "mx-auto transition-all duration-500 flex items-center justify-between px-5",
          scrolled
            ? "max-w-[680px] bg-cream-50/85 backdrop-blur-xl border border-cream-200 rounded-full py-2.5"
            : "max-w-6xl py-2"
        )}
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-medium text-[15px] tracking-snug text-ink"
        >
          <span className="display italic text-xl leading-none">Gonzalo Viladomiu</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-[13px] font-medium tracking-snug text-ink-500 hover:text-ink transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:gonzaloviladomiu@gmail.com"
          className={cn(
            "text-[13px] font-medium tracking-snug px-4 py-2 rounded-full transition-all",
            "bg-ink text-cream-50 hover:bg-ink-700"
          )}
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
