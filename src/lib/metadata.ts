import type { Metadata } from "next";
import { site } from "@/content/shared";

/**
 * The public address of the site:
 * 1. SITE_URL, when set (use this once the site has its own domain);
 * 2. on Vercel, the project's production address, which Vercel provides automatically;
 * 3. locally, http://localhost:3000.
 * The production build refuses to run without 1 or 2 (scripts/check-placeholders.mjs).
 */
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const siteUrl = (
  process.env.SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000")
).replace(/\/$/, "");

/** Per-page title, description, canonical URL and Open Graph data. */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "en_NG",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
