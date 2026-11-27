import Link from "next/link";
import { site } from "@/content/shared";

/**
 * The mark, drawn inline from the brand master (mark.svg). Its colours are fixed brand values
 * set in globals.css (.mark-*). Never recolour, outline, stretch or enclose it.
 */
export function Mark({ size = 36, title }: { size?: number; title?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
      className="shrink-0"
    >
      <path className="mark-primary" d="M14 56 A36 36 0 0 1 86 56" fill="none" strokeWidth="9" strokeLinecap="round" />
      <path className="mark-secondary" d="M26 56 A24 24 0 0 1 74 56" fill="none" strokeWidth="7" strokeLinecap="round" />
      <path
        className="mark-primary"
        d="M11 64 H38 L44 64 L48 48 L54 78 L59 64 H89"
        fill="none"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Mark at 36px beside the name as live Montserrat 700 text. Never an image of the wordmark. */
export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex min-h-12 items-center gap-2 rounded-md font-display text-[18px] leading-6 font-bold text-brand no-underline"
    >
      <Mark size={36} />
      <span className="max-w-[12rem] leading-5 sm:max-w-none sm:leading-6">{site.name}</span>
    </Link>
  );
}
