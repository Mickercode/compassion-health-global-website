import type { FormName, FormValues } from "./validation";

export type Submission = {
  form: FormName;
  values: FormValues;
  receivedAt: string;
};

/**
 * The one place form submissions leave the site.
 *
 * TODO: Decide where submissions are delivered (email, a spreadsheet, a form service or a
 * database) and send them from here. Nothing else needs to change. The Serve form holds
 * personal data and licence numbers, so the Nigeria Data Protection Act 2023 applies to
 * wherever they end up.
 */
export async function deliverSubmission(submission: Submission): Promise<void> {
  if (process.env.NODE_ENV === "development") {
    console.log("[form submission]", JSON.stringify(submission, null, 2));
    return;
  }

  // Until delivery is decided, production submissions are logged so none are lost silently.
  console.warn("[form submission: delivery not configured]", JSON.stringify(submission));
}
