"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll reveals, done with restraint.
 *
 * Any element marked `data-reveal-item` fades and rises into place as it enters the viewport.
 * Content is fully visible without JavaScript and for visitors who prefer reduced motion
 * (see globals.css). Items already on screen when the page loads are never hidden, so
 * nothing flickers.
 */
export function RevealController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-js", "");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal-item]"));
    const viewport = window.innerHeight;
    for (const item of items) {
      if (item.getBoundingClientRect().top < viewport * 0.95) item.setAttribute("data-revealed", "");
    }
    root.setAttribute("data-reveal", "");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    for (const item of items) if (!item.hasAttribute("data-revealed")) observer.observe(item);

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

/** Wrap content to have it reveal on scroll. `delay` staggers siblings (ms). */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  return (
    <Tag data-reveal-item="" className={className} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}
