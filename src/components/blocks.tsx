/**
 * Shared content blocks for every page. Server-rendered HTML that reads fine with
 * JavaScript off. No icon grids, no coloured side borders, no decorative shadows.
 */
import Link from "next/link";
import { Arcs } from "./Arcs";
import { Copy } from "./Copy";

/** Small uppercase section marker, with an optional short rule before it. */
export function Eyebrow({
  children,
  className = "",
  rule = true,
  as: Tag = "p",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  rule?: boolean;
  as?: "p" | "h2";
  id?: string;
}) {
  return (
    <Tag id={id} className={`t-eyebrow flex items-center gap-3 ${className}`}>
      {rule ? <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" /> : null}
      {children}
    </Tag>
  );
}

/** Paragraphs with even rhythm. */
export function Prose({ paragraphs, className = "", size = "body" }: { paragraphs: string[]; className?: string; size?: "body" | "lead" }) {
  return (
    <div className={`flow ${className}`}>
      {paragraphs.map((p) => (
        <p key={p} className={size === "lead" ? "t-lead" : "t-body"}>
          <Copy text={p} />
        </p>
      ))}
    </div>
  );
}

/** Text link with an arrow that moves on hover. For calls to action that sit among text. */
export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="cta-link">
      {children}
      <svg aria-hidden="true" viewBox="0 0 20 12" className="arrow h-3 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 6h17M13 1l5 5-5 5" />
      </svg>
    </Link>
  );
}

/** Inner-page opening: eyebrow, serif title, lead. Optional small arcs. */
export function PageIntro({
  eyebrow,
  heading,
  lead,
  arcs = false,
  children,
}: {
  eyebrow: string;
  heading: string;
  lead?: string;
  arcs?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-[860px]">
      {arcs ? <Arcs variant="small" className="mb-6" /> : null}
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 id="page-heading" className="t-title mt-5">
        {heading}
      </h1>
      {lead ? (
        <p className="t-lead measure-wide mt-6 text-ink-muted">
          <Copy text={lead} />
        </p>
      ) : null}
      {children}
    </div>
  );
}

/** Licence body as a small brand-tint pill with brand text. */
export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-pill bg-brand-tint px-3 py-1 font-display text-[12px] leading-4 font-bold tracking-[0.08em] text-brand">
      {children}
    </span>
  );
}

/**
 * The vision at true scale: 774 dots, one for each envisioned community clinic, and 37 rings
 * for the envisioned state and FCT hospitals. Deliberately not a map: no locations are implied.
 */
export function VisionField({ className = "" }: { className?: string }) {
  const cols = 43;
  const rows = 18; // 43 x 18 = 774
  const gap = 10;
  const dots: React.ReactNode[] = [];
  // Spread 37 hospital rings through the field: one in each equal stretch of the grid, at a
  // fixed pseudo-random offset, so they read as scattered rather than as a pattern.
  const stretch = 774 / 37;
  const hospitalAt = new Set(
    Array.from({ length: 37 }, (_, i) => {
      const jitter = (Math.sin((i + 1) * 12.9898) * 43758.5453) % 1;
      return Math.floor(i * stretch + Math.abs(jitter) * (stretch - 1));
    }),
  );
  for (let i = 0; i < cols * rows; i++) {
    const x = (i % cols) * gap + 5;
    const y = Math.floor(i / cols) * gap + 5;
    dots.push(
      hospitalAt.has(i) ? (
        <circle key={i} cx={x} cy={y} r={3.4} fill="none" stroke="var(--brand)" strokeWidth={1.4} />
      ) : (
        <circle key={i} cx={x} cy={y} r={1.6} fill="var(--brand-light)" />
      ),
    );
  }
  return (
    <svg viewBox={`0 0 ${cols * gap} ${rows * gap}`} className={className} aria-hidden="true" focusable="false">
      {dots}
    </svg>
  );
}

/**
 * Seven areas around one mission, each joined to the centre and to its neighbours:
 * an interconnected system rather than a straight line.
 */
export function ConnectedDiagram({ areas, centre }: { areas: { id: string; short: string; number: string }[]; centre: string }) {
  const size = 640;
  const c = size / 2;
  const r = 230;
  const points = areas.map((a, i) => {
    const angle = (i / areas.length) * Math.PI * 2 - Math.PI / 2;
    return { ...a, x: c + r * Math.cos(angle), y: c + r * Math.sin(angle) };
  });

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-labelledby="diagram-title">
      <title id="diagram-title">{`${centre}: ${areas.map((a) => a.short).join(", ")}, each connected to the others.`}</title>
      <circle cx={c} cy={c} r={r} fill="none" stroke="var(--hairline)" strokeWidth={1.5} />
      {points.map((p, i) => {
        const next = points[(i + 2) % points.length];
        return (
          <g key={p.id}>
            <line x1={c} y1={c} x2={p.x} y2={p.y} stroke="var(--brand-light)" strokeWidth={1.25} strokeOpacity={0.55} />
            <line x1={p.x} y1={p.y} x2={next.x} y2={next.y} stroke="var(--hairline)" strokeWidth={1} />
          </g>
        );
      })}
      <circle cx={c} cy={c} r={78} fill="var(--brand)" />
      <text x={c} y={c + 7} textAnchor="middle" fill="var(--on-brand)" style={{ font: "600 22px var(--font-serif)" }}>
        {centre}
      </text>
      {points.map((p) => (
        <g key={`${p.id}-node`}>
          <circle cx={p.x} cy={p.y} r={52} fill="var(--surface)" stroke="var(--brand)" strokeWidth={1.5} />
          <text x={p.x} y={p.y - 8} textAnchor="middle" fill="var(--brand-light)" style={{ font: "700 12px var(--font-display)", letterSpacing: "0.12em" }}>
            {p.number}
          </text>
          <text x={p.x} y={p.y + 14} textAnchor="middle" fill="var(--ink)" style={{ font: "600 17px var(--font-text)" }}>
            {p.short}
          </text>
        </g>
      ))}
    </svg>
  );
}
