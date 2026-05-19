"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "top", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("top");

  // Refs to each link so we can measure its position for the sliding indicator
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const navListRef = useRef<HTMLElement | null>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  // Scroll listener — sets `scrolled` and computes active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);

      // Determine active section: pick the last one whose top is past 120px
      const offset = 120;
      let current = "top";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) current = s.id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Measure the active link and animate the underline indicator
  useEffect(() => {
    const measure = () => {
      const link = linkRefs.current[activeId];
      const list = navListRef.current;
      if (!link || !list) {
        setIndicator((i) => ({ ...i, opacity: 0 }));
        return;
      }
      const linkRect = link.getBoundingClientRect();
      const listRect = list.getBoundingClientRect();
      setIndicator({
        left: linkRect.left - listRect.left,
        width: linkRect.width,
        opacity: 1,
      });
    };
    // Two ticks: once now, once after layout/transition settles
    measure();
    const t = setTimeout(measure, 520);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, [activeId, scrolled]);

  // Visible nav links (skip "Home" — it's only used as a default activeId)
  const visibleSections = sections.filter((s) => s.id !== "top");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div
        className={cn(
          "mx-auto transition-all duration-500 flex items-center gap-4 md:gap-6 px-5",
          scrolled
            ? "max-w-[760px] bg-surface/85 backdrop-blur-xl border border-ink-100 rounded-full py-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            : "max-w-6xl py-2"
        )}
      >
        {/* Brand — never wraps */}
        <a
          href="#top"
          className="flex items-baseline gap-2 text-[14px] font-medium tracking-snug text-ink whitespace-nowrap flex-shrink-0"
        >
          Gonzalo Viladomiu
          <span
            className={cn(
              "text-ink-400 transition-opacity duration-300 hidden md:inline",
              scrolled ? "opacity-0 md:hidden" : "opacity-100"
            )}
          >
            / Technology Manager
          </span>
        </a>

        {/* Center nav — flexes, contains the sliding indicator */}
        <nav
          ref={navListRef}
          className="hidden md:flex items-center gap-7 flex-1 justify-center relative"
        >
          {visibleSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              ref={(el) => {
                linkRefs.current[s.id] = el;
              }}
              className={cn(
                "text-[13px] font-medium transition-colors whitespace-nowrap relative",
                activeId === s.id ? "text-ink" : "text-ink-500 hover:text-ink"
              )}
            >
              {s.label}
            </a>
          ))}

          {/* Sliding underline indicator */}
          <span
            aria-hidden
            className="absolute -bottom-1.5 h-px bg-accent transition-all duration-500 ease-out pointer-events-none"
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.opacity,
            }}
          />
        </nav>

        {/* CTA — black pill block */}
        <a
          href="mailto:gonzaloviladomiu@gmail.com"
          className="text-[13px] font-medium tracking-snug px-4 py-2 rounded-full bg-ink text-surface hover:bg-accent transition-colors whitespace-nowrap flex-shrink-0"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
