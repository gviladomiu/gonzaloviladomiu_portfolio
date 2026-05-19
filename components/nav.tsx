"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "stack", label: "Stack" },
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
            ? "max-w-[700px] bg-surface/85 backdrop-blur-xl border border-ink-100 rounded-full py-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            : "max-w-6xl py-2"
        )}
      >
        <a
          href="#top"
          className="flex items-baseline gap-2 text-[14px] font-medium tracking-snug text-ink"
        >
          Gonzalo Viladomiu
          <span
            className={cn(
              "text-ink-400 transition-opacity duration-300",
              scrolled ? "opacity-0 hidden md:inline" : "opacity-100"
            )}
          >
            / Technology Manager
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-[13px] font-medium text-ink-500 hover:text-ink transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:gonzaloviladomiu@gmail.com"
          className="text-[13px] font-medium tracking-snug px-4 py-2 rounded-full bg-ink text-surface hover:bg-accent transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
