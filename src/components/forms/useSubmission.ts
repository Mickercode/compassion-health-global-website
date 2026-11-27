"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { HONEYPOT, fieldsFor, validate, type FieldErrors, type FormName } from "@/lib/validation";

const noSubscribe = () => () => {};

type Status = "idle" | "sending" | "sent" | "failed";

/**
 * Shared behaviour for the Serve and Contact forms.
 *
 * Without JavaScript the form posts straight to /api/submit and the server redirects to
 * the confirmation page. With JavaScript it validates first, posts in the background,
 * and swaps the form for the confirmation message.
 */
export function useSubmission(form: FormName) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const confirmationRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLParagraphElement>(null);

  // True once JavaScript is running (false in the server-rendered HTML). Our own validation
  // messages then replace the browser's.
  const enhanced = useSyncExternalStore(noSubscribe, () => true, () => false);

  useEffect(() => {
    if (status === "sent") confirmationRef.current?.focus();
    if (status === "failed") summaryRef.current?.focus();
  }, [status]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const element = event.currentTarget;
    const data = new FormData(element);
    const values: Record<string, string> = {};
    for (const key of fieldsFor(form)) values[key] = String(data.get(key) ?? "");

    const found = validate(form, values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      setStatus("idle");
      (element.querySelector(`[name="${first}"]`) as HTMLElement | null)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const body = new URLSearchParams();
      body.set("form", form);
      body.set(HONEYPOT, String(data.get(HONEYPOT) ?? ""));
      for (const [key, value] of Object.entries(values)) body.set(key, value);

      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });
      const result = (await response.json().catch(() => null)) as
        | { ok: true }
        | { ok: false; errors?: FieldErrors }
        | null;

      if (response.ok && result?.ok) {
        setStatus("sent");
        return;
      }
      if (result && !result.ok && result.errors && Object.keys(result.errors).length) {
        setErrors(result.errors);
        setStatus("idle");
        return;
      }
      setStatus("failed");
    } catch {
      setStatus("failed");
    }
  }

  return { errors, status, enhanced, onSubmit, confirmationRef, summaryRef };
}
