import { Fragment } from "react";
import { PLACEHOLDER } from "@/lib/placeholder";

/**
 * Renders approved copy. Any [bracketed placeholder] inside it is highlighted in development
 * so it cannot be missed. (The production build fails while any remain.)
 */
export function Copy({ text }: { text: string }) {
  const parts = text.split(new RegExp(`(${PLACEHOLDER.source})`, "g"));
  if (parts.length === 1) return <>{text}</>;

  const highlight = process.env.NODE_ENV !== "production";
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 && highlight ? (
          <mark key={i} className="placeholder-copy" title="Placeholder: copy still to be supplied">
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
