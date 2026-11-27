"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { nav, type NavGroup, type NavItem } from "@/content/shared";

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

function isGroup(item: NavItem): item is NavGroup {
  return "children" in item;
}

const barLink =
  "relative flex min-h-12 items-center rounded-sm t-label text-ink no-underline transition-colors hover:text-brand";
const currentBar = "text-brand after:absolute after:inset-x-0 after:bottom-2 after:h-0.5 after:bg-brand";

/**
 * "Get Involved" on desktop: a small disclosure menu built on <details>, so it works with
 * JavaScript off. With JavaScript it closes on outside click, Escape and navigation.
 */
function GroupMenu({ group, pathname }: { group: NavGroup; pathname: string }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const active = group.children.some((c) => isCurrent(pathname, c.href));

  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  useEffect(() => {
    const details = ref.current;
    if (!details) return;
    const onClick = (e: MouseEvent) => {
      if (details.open && !details.contains(e.target as Node)) details.open = false;
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && details.open) {
        details.open = false;
        details.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <details ref={ref} className="group/menu relative">
      <summary
        className={`${barLink} ${active ? currentBar : ""} cursor-pointer list-none gap-1.5 [&::-webkit-details-marker]:hidden`}
      >
        {group.label}
        <svg
          aria-hidden="true"
          viewBox="0 0 12 12"
          className="size-3 transition-transform group-open/menu:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2.5 4.5 6 8l3.5-3.5" />
        </svg>
      </summary>
      <ul className="absolute top-full left-1/2 z-50 mt-1 w-56 -translate-x-1/2 rounded-lg border border-hairline bg-surface p-2 shadow-menu">
        {group.children.map((child) => {
          const current = isCurrent(pathname, child.href);
          return (
            <li key={child.href}>
              <Link
                href={child.href}
                aria-current={current ? "page" : undefined}
                className={`flex min-h-12 items-center rounded-md px-3 t-label no-underline hover:bg-surface-tint ${
                  current ? "text-brand" : "text-ink"
                }`}
              >
                {child.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </details>
  );
}

/** Desktop navigation bar. */
export function NavBar() {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-7">
      {nav.map((item) =>
        isGroup(item) ? (
          <li key={item.label}>
            <GroupMenu group={item} pathname={pathname} />
          </li>
        ) : (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
              className={`${barLink} ${isCurrent(pathname, item.href) ? currentBar : ""}`}
            >
              {item.label}
            </Link>
          </li>
        ),
      )}
    </ul>
  );
}

/** Phone menu list: large serif links; groups shown as a labelled sub-list. */
export function NavPanel() {
  const pathname = usePathname();
  const link = (href: string, label: string, sub = false) => {
    const current = isCurrent(pathname, href);
    return (
      <Link
        href={href}
        aria-current={current ? "page" : undefined}
        className={`flex min-h-14 items-center justify-between no-underline ${
          sub ? "t-body pl-4" : "font-serif text-[26px] leading-8 font-semibold"
        } ${current ? "text-brand" : "text-ink"}`}
      >
        {label}
        {current ? <span aria-hidden="true" className="size-2 rounded-pill bg-brand" /> : null}
      </Link>
    );
  };

  return (
    <ul className="flex flex-col">
      {nav.map((item) =>
        isGroup(item) ? (
          <li key={item.label} className="border-b border-hairline py-3">
            <p className="t-eyebrow pt-2 pb-1">{item.label}</p>
            <ul>
              {item.children.map((child) => (
                <li key={child.href}>{link(child.href, child.label, true)}</li>
              ))}
            </ul>
          </li>
        ) : (
          <li key={item.href} className="border-b border-hairline">
            {link(item.href, item.label)}
          </li>
        ),
      )}
    </ul>
  );
}
