import { cacheLife } from "next/cache";
import Link from "next/link";
import { footer, site, ui } from "@/content/shared";
import { Arcs } from "./Arcs";
import { Logo } from "./Logo";

/** The year, computed once at build time. `use cache` lets the static prerender read the clock. */
async function BuildYear() {
  "use cache";
  cacheLife("max");
  return <>{new Date().getFullYear()}</>;
}

function LinkColumn({ heading, links }: { heading: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="t-eyebrow text-ink-muted">{heading}</h2>
      <ul className="mt-4">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="t-body inline-flex min-h-11 items-center text-ink no-underline transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Institutional footer on deep navy. */
export function Footer() {
  return (
    <footer className="tone-navy relative overflow-hidden">
      <Arcs
        variant="large"
        className="pointer-events-none absolute -right-40 -bottom-6 w-[520px] opacity-40 md:w-[640px]"
      />
      <div className="container-site relative pt-16 pb-10 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Logo />
            <p className="mt-8 max-w-[22ch] font-serif text-[28px] leading-[34px] font-semibold text-ink md:text-[34px] md:leading-[40px]">
              {site.tagline}
            </p>
            <p className="t-body measure mt-5 text-ink-muted">{site.message}</p>
          </div>
          <nav aria-label={ui.footerNav} className="grid grid-cols-2 gap-8 lg:col-span-5 lg:col-start-8">
            <LinkColumn heading={footer.explore.heading} links={footer.explore.links} />
            <LinkColumn heading={footer.involved.heading} links={footer.involved.links} />
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-hairline pt-8 md:flex-row md:items-center md:justify-between">
          <a
            href={site.parentUrl}
            className="t-eyebrow inline-flex min-h-11 items-center self-start tracking-[0.2em] text-endorse no-underline hover:underline md:self-auto"
          >
            {footer.endorsement}
          </a>
          <p className="t-secondary">
            &copy; <BuildYear /> {footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
