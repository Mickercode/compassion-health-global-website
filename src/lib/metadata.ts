import type { Metadata } from "next";
import { site } from "@/content/shared";

/**
 * The public address of the site, from the SITE_URL environment variable.
 * The production build refuses to run without it (scripts/check-placeholders.mjs).
 */
export const siteUrl = (process.env.SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

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
