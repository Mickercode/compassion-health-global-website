"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { navCta, site, ui } from "@/content/shared";
import { ButtonLink } from "./ButtonLink";
import { NavPanel } from "./NavLinks";

/**
 * Phone menu: a full-screen panel. Built on <details>, so it opens and closes with
 * JavaScript turned off. With JavaScript it also closes on navigation and Escape, and
 * locks page scrolling while open.
 */
export function MobileMenu() {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  useEffect(() => {
    const details = ref.current;
    if (!details) return;
    const onToggle = () => {
      document.documentElement.style.overflow = details.open ? "hidden" : "";
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && details.open) {
        details.open = false;
        details.querySelector("summary")?.focus();
      }
    };
    details.addEventListener("toggle", onToggle);
    document.addEventListener("keydown", onKey);
    return () => {
      details.removeEventListener("toggle", onToggle);
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <details ref={ref} className="group nav:hidden">
      <summary className="btn btn-secondary list-none px-4 [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">{ui.menuOpen}</span>
        <span className="hidden group-open:inline">{ui.menuClose}</span>
      </summary>
      <div className="fixed inset-x-0 top-[var(--header-h)] bottom-0 z-40 flex flex-col bg-surface shadow-menu">
        <nav aria-label={ui.mainNav} className="container-site flex-1 overflow-y-auto pt-2">
          <NavPanel />
          <p className="t-secondary mt-8 mb-6 font-serif text-[17px] italic">{site.tagline}</p>
        </nav>
        <div className="container-site border-t border-hairline py-4">
          <ButtonLink href={navCta.href} className="w-full">
            {navCta.label}
          </ButtonLink>
        </div>
      </div>
    </details>
  );
}
