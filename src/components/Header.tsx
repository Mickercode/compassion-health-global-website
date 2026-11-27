import { navCta, ui } from "@/content/shared";
import { ButtonLink } from "./ButtonLink";
import { HeaderScrollState } from "./HeaderScrollState";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { NavBar } from "./NavLinks";

/** Sticky header: 64px on phones, 76px on desktop. A hairline appears once the page scrolls. */
export function Header() {
  return (
    <header id="site-header" className="site-header sticky top-0 z-50 bg-surface">
      <HeaderScrollState />
      <div className="container-site flex h-[var(--header-h)] items-center justify-between gap-3">
        <Logo />
        <div className="hidden items-center gap-8 nav:flex">
          <nav aria-label={ui.mainNav}>
            <NavBar />
          </nav>
          <ButtonLink href={navCta.href}>{navCta.label}</ButtonLink>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
