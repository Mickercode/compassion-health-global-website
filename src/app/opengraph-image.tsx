import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/shared";

/**
 * The one share image, 1200 x 630: the logo on white with the arcs.
 * Rendered to a static PNG at build time. Colours are the fixed light-mode brand values,
 * because an image cannot read CSS variables.
 */
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND = "#295CA4";
const BRAND_LIGHT = "#4A90D9";
const BRAND_TINT = "#DEEAFA";

const montserrat = await readFile(
  join(process.cwd(), "node_modules/@fontsource/montserrat/files/montserrat-latin-700-normal.woff"),
);

export default async function OpengraphImage() {

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#FFFFFF", position: "relative" }}>
        <svg
          width="640"
          height="336"
          viewBox="0 0 200 105"
          style={{ position: "absolute", right: -80, bottom: 0 }}
        >
          <path d="M12 100 A88 88 0 0 1 188 100" fill="none" stroke={BRAND_TINT} strokeWidth="9" strokeLinecap="round" />
          <path d="M32 100 A68 68 0 0 1 168 100" fill="none" stroke={BRAND_LIGHT} strokeWidth="7" strokeLinecap="round" />
        </svg>
        <div style={{ display: "flex", alignItems: "center", gap: 28, position: "absolute", left: 88, top: 140 }}>
          <svg width="144" height="144" viewBox="0 0 100 100">
            <path d="M14 56 A36 36 0 0 1 86 56" fill="none" stroke={BRAND} strokeWidth="9" strokeLinecap="round" />
            <path d="M26 56 A24 24 0 0 1 74 56" fill="none" stroke={BRAND_LIGHT} strokeWidth="7" strokeLinecap="round" />
            <path
              d="M11 64 H38 L44 64 L48 48 L54 78 L59 64 H89"
              fill="none"
              stroke={BRAND}
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div style={{ fontFamily: "Montserrat", fontSize: 52, fontWeight: 700, color: BRAND, lineHeight: 1 }}>
            {site.name}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Montserrat", data: montserrat, style: "normal", weight: 700 }],
    },
  );
}
