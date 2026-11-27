/**
 * The site's one graphic motif: two concentric semicircles echoing the mark, stroke widths
 * 9:7, brand-tint outer and brand-light inner, on a flat baseline. Decorative only.
 * Colours come from the tokens, so the arcs adapt on navy and photographic grounds.
 *
 * - "large": a backdrop pair, thinner relative to its size.
 * - "small": a 48px pair using the mark's own proportions, above a heading.
 */
export function Arcs({ variant, className }: { variant: "large" | "small"; className?: string }) {
  if (variant === "small") {
    return (
      <svg viewBox="9 15 82 46" width={48} height={27} aria-hidden="true" focusable="false" className={className}>
        <path d="M14 56 A36 36 0 0 1 86 56" fill="none" stroke="var(--brand-tint)" strokeWidth="9" strokeLinecap="round" />
        <path d="M26 56 A24 24 0 0 1 74 56" fill="none" stroke="var(--brand-light)" strokeWidth="7" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 105" aria-hidden="true" focusable="false" className={className}>
      <path d="M12 100 A88 88 0 0 1 188 100" fill="none" stroke="var(--brand-tint)" strokeWidth="9" strokeLinecap="round" />
      <path d="M32 100 A68 68 0 0 1 168 100" fill="none" stroke="var(--brand-light)" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}
