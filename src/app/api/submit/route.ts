import { deliverSubmission } from "@/lib/deliver";
import { HONEYPOT, fieldsFor, validate, type FormName, type FormValues } from "@/lib/validation";

/**
 * Handler for the Contact form. (Volunteer registration on /serve is handled by Jotform.)
 * The `form` field names the form, so more forms can share this handler later.
 *
 * - Background posts (Accept: application/json) get a JSON reply.
 * - Plain form posts, when JavaScript is off, are redirected to the confirmation page,
 *   or back to the form if the server rejects the details.
 */
const FORMS: Record<FormName, { page: string; sent: string }> = {
  contact: { page: "/contact#message", sent: "/contact/sent" },
};

const MAX_BODY_BYTES = 32 * 1024;

function isFormName(value: unknown): value is FormName {
  return value === "contact";
}

export async function POST(request: Request) {
  const wantsJson = (request.headers.get("accept") ?? "").includes("application/json");
  const reply = (status: number, body: object, redirectTo?: string) =>
    wantsJson || !redirectTo
      ? Response.json(body, { status })
      : Response.redirect(new URL(redirectTo, request.url), 303);

  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) return reply(413, { ok: false });

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return reply(400, { ok: false });
  }

  const form = data.get("form");
  if (!isFormName(form)) return reply(400, { ok: false });
  const target = FORMS[form];

  // Honeypot filled in: a bot. Pretend it worked and drop it.
  if (String(data.get(HONEYPOT) ?? "") !== "") {
    return reply(200, { ok: true }, target.sent);
  }

  const values: FormValues = {};
  for (const key of fieldsFor(form)) values[key] = String(data.get(key) ?? "").trim();

  const errors = validate(form, values);
  if (Object.keys(errors).length > 0) {
    return reply(422, { ok: false, errors }, target.page);
  }

  try {
    await deliverSubmission({ form, values, receivedAt: new Date().toISOString() });
  } catch (error) {
    console.error("[form submission failed]", error);
    return reply(500, { ok: false }, target.page);
  }

  return reply(200, { ok: true }, target.sent);
}
