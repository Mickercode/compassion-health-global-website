/**
 * Copy shared by every page: brand lines, contact details, navigation, footer, interface wording.
 * Source: "Compassion Health Global Website Copy" (supplied 27 Nov 2026).
 * Anything in [square brackets] is a placeholder: highlighted in development, and
 * `npm run build` fails while any remain.
 */

export const site = {
  name: "Compassion Health Global",
  parentName: "The Rain Church Global",
  parentUrl: "https://therainchurch.global",
  tagline: "Healthcare with compassion. Healing within reach.",
  promise: "Care that reaches. Compassion that stays.",
  message:
    "We are building a future where quality healthcare is accessible, compassionate and within reach for communities across Nigeria.",
};

export const contact = {
  servingEmail: "compassionhealthglobal@gmail.com",
  partnershipsEmail: "compassionhealthglobal@gmail.com",
  generalEmail: "compassionhealthglobal@gmail.com",
  /** Shown with tel: and WhatsApp links. Local (0803 000 0000) or international (+234 ...) format. */
  phone: "+234 701 864 3382",
  whatsapp: "+234 701 864 3382",
  office: "Surulere, Lagos, Nigeria",
};

export type NavLink = { href: string; label: string };
export type NavGroup = { label: string; children: NavLink[] };
export type NavItem = NavLink | NavGroup;

/** Header navigation. "Get Involved" opens to Serve With Us and Partner With Us. */
export const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
  { href: "/the-plan", label: "The Plan" },
  {
    label: "Get Involved",
    children: [
      { href: "/serve", label: "Serve With Us" },
      { href: "/partner", label: "Partner With Us" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

/** The primary call to action, at the far right of the header and foot of the phone menu. */
export const navCta = { label: "Join the Mission", href: "/serve" };

export const footer = {
  explore: {
    heading: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/our-work", label: "Our Work" },
      { href: "/the-plan", label: "Our Vision" },
    ],
  },
  involved: {
    heading: "Get Involved",
    links: [
      { href: "/serve", label: "Serve" },
      { href: "/partner", label: "Partner" },
      { href: "/contact", label: "Contact" },
    ],
  },
  endorsement: "A ministry of The Rain Church Global",
  rights: "Compassion Health Global. All rights reserved.",
};

/**
 * Interface wording not in the supplied copy, needed for the site to work.
 * Kept short and plain, in the brand voice. Please review.
 */
export const ui = {
  skipLink: "Skip to content",
  menuOpen: "Menu",
  menuClose: "Close",
  mainNav: "Main",
  footerNav: "Footer",
  optional: "(optional)",
  choose: "Choose one",
  whatsapp: "WhatsApp",
  sendFailed: "Your message was not sent. Check your connection and try again.",
  errors: {
    fullName: "Enter your full name.",
    name: "Enter your name.",
    phone: "Enter a phone or WhatsApp number, with at least 7 digits.",
    email: "Enter an email address like name@example.com.",
    reach: "Enter an email address or a phone number so we can reply.",
    message: "Enter your message.",
    tooLong: "This is too long. Please shorten it.",
    invalidChoice: "Choose one of the options given.",
  },
};
