"use client";

import { useEffect } from "react";

/** Marks the header once the page has scrolled, so its hairline can fade in. */
export function HeaderScrollState() {
  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;
    let ticking = false;
    const update = () => {
      header.dataset.scrolled = window.scrollY > 8 ? "true" : "false";
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return null;
}
