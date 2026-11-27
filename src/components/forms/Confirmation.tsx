import { Copy } from "../Copy";

/** Shown in place of a form once it has been sent. Receives focus so screen readers announce it. */
export function Confirmation({ message, ref }: { message: string; ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={ref} tabIndex={-1} role="status" className="callout measure">
      <p className="t-item">
        <Copy text={message} />
      </p>
    </div>
  );
}
