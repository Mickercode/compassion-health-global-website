/**
 * Form validation shared by the browser (instant feedback) and the route handler
 * (the real check). Pure functions only, so this file is safe to import on either side.
 */
import { contactFields } from "@/content/forms";
import { ui } from "@/content/shared";

export type FormName = "contact";
export type FormValues = Record<string, string>;
export type FieldErrors = Record<string, string>;

/** Name of the hidden anti-spam field. Real people never fill it in. */
export const HONEYPOT = "website";

const LONG_FIELDS = new Set(["message"]);
const LIMITS = { short: 200, long: 4000 };

const CONTACT_KEYS = ["name", "email", "phone", "topic", "message"] as const;

export function fieldsFor(form: FormName): readonly string[] {
  void form;
  return CONTACT_KEYS;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function digitCount(value: string): number {
  return value.replace(/\D/g, "").length;
}

function isPhone(value: string): boolean {
  return /^[+\d\s()-]+$/.test(value) && digitCount(value) >= 7 && digitCount(value) <= 15;
}

function checkLength(values: FormValues, errors: FieldErrors, keys: readonly string[]) {
  for (const key of keys) {
    const limit = LONG_FIELDS.has(key) ? LIMITS.long : LIMITS.short;
    if ((values[key] ?? "").length > limit && !errors[key]) errors[key] = ui.errors.tooLong;
  }
}

function checkChoice(values: FormValues, errors: FieldErrors, key: string, options: readonly string[]) {
  const value = values[key];
  if (value && !options.includes(value)) errors[key] = ui.errors.invalidChoice;
}

export function validateContact(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  const v = (key: string) => (values[key] ?? "").trim();

  if (!v("name")) errors.name = ui.errors.name;
  const email = v("email");
  const phone = v("phone");
  if (!email && !phone) {
    errors.email = ui.errors.reach;
  } else {
    if (email && !EMAIL.test(email)) errors.email = ui.errors.email;
    if (phone && !isPhone(phone)) errors.phone = ui.errors.phone;
  }
  if (!v("message")) errors.message = ui.errors.message;

  checkChoice(values, errors, "topic", contactFields.topicOptions);
  checkLength(values, errors, CONTACT_KEYS);
  return errors;
}

export function validate(form: FormName, values: FormValues): FieldErrors {
  void form;
  return validateContact(values);
}
