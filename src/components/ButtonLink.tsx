import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

/** Primary or secondary button that navigates. Never put more than two together. */
export function ButtonLink({ href, children, variant = "primary", className = "" }: Props) {
  return (
    <Link href={href} className={`btn btn-${variant} ${className}`}>
      {children}
    </Link>
  );
}
