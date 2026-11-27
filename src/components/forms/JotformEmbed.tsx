"use client";

import { useEffect, useRef } from "react";

/**
 * A Jotform form, embedded as an iframe.
 *
 * Jotform's <script src=".../jsform/ID"> snippet writes the form with document.write, which
 * does not run in a React page, so we use Jotform's iframe embed instead: same form, same
 * submissions in your Jotform account. The iframe works with JavaScript off (at a fixed
 * height); with JavaScript it resizes to fit the form, using the "setHeight" messages
 * Jotform sends from inside the frame.
 */
export function JotformEmbed({ formId, title, minHeight = 1400 }: { formId: string; title: string; minHeight?: number }) {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!/^https:\/\/([a-z0-9-]+\.)?jotform\.com$/.test(event.origin)) return;
      if (typeof event.data !== "string") return;
      const [command, value, id] = event.data.split(":");
      if (command === "setHeight" && (!id || id === formId) && ref.current) {
        const height = Number(value);
        if (Number.isFinite(height) && height > 200) ref.current.style.height = `${height + 20}px`;
      }
      if (command === "scrollIntoView" && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [formId]);

  return (
    <iframe
      ref={ref}
      id={`JotFormIFrame-${formId}`}
      title={title}
      src={`https://form.jotform.com/${formId}`}
      loading="lazy"
      allow="geolocation; microphone; camera; fullscreen"
      className="block w-full border-0"
      style={{ minHeight: 540, height: minHeight }}
    />
  );
}
