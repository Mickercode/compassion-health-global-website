"use client";

import { contactPage } from "@/content/contact";
import { contactFields } from "@/content/forms";
import { ui } from "@/content/shared";
import { HONEYPOT } from "@/lib/validation";
import { Confirmation } from "./Confirmation";
import { Honeypot, RadioGroup, TextArea, TextField } from "./fields";
import { useSubmission } from "./useSubmission";

export function ContactForm() {
  const { errors, status, enhanced, onSubmit, confirmationRef, summaryRef } = useSubmission("contact");

  if (status === "sent") return <Confirmation ref={confirmationRef} message={contactPage.form.success} />;

  return (
    <form action="/api/submit" method="post" noValidate={enhanced} onSubmit={onSubmit} className="relative grid gap-6">
      <input type="hidden" name="form" value="contact" />
      <Honeypot name={HONEYPOT} />

      {status === "failed" ? (
        <p ref={summaryRef} tabIndex={-1} role="alert" className="t-body font-semibold text-critical">
          {ui.sendFailed}
        </p>
      ) : null}

      <TextField name="name" label={contactFields.name} required autoComplete="name" error={errors.name} />
      <div className="grid gap-6 md:grid-cols-2">
        <TextField name="email" label={contactFields.email} type="email" autoComplete="email" error={errors.email} />
        <TextField name="phone" label={contactFields.phone} type="tel" inputMode="tel" autoComplete="tel" error={errors.phone} />
      </div>
      <RadioGroup name="topic" label={contactFields.topic} options={contactFields.topicOptions} error={errors.topic} />
      <TextArea name="message" label={contactFields.message} required error={errors.message} />

      <div>
        <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status === "sending"} aria-busy={status === "sending"}>
          {contactPage.form.submit}
        </button>
      </div>
    </form>
  );
}
