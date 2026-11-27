import { ui } from "@/content/shared";
import { isPlaceholder } from "@/lib/placeholder";
import { telHref, whatsappHref } from "@/lib/phone";
import { Copy } from "./Copy";

/** An email address as a mailto link. While still a placeholder, shows the highlighted placeholder. */
export function EmailLink({ email }: { email: string }) {
  if (isPlaceholder(email)) return <Copy text={email} />;
  return (
    <a className="link" href={`mailto:${email}`}>
      {email}
    </a>
  );
}

/**
 * A phone number shown as text, linked with tel:, with a WhatsApp link beside it.
 * `whatsapp` defaults to the same number; pass a different number if WhatsApp uses another line.
 */
export function PhoneLink({
  phone,
  whatsapp = phone,
  showWhatsapp = true,
}: {
  phone: string;
  whatsapp?: string;
  showWhatsapp?: boolean;
}) {
  return (
    <>
      {isPlaceholder(phone) ? (
        <Copy text={phone} />
      ) : (
        <a className="link whitespace-nowrap" href={telHref(phone)}>
          {phone}
        </a>
      )}
      {showWhatsapp ? (
        <>
          {" "}
          <WhatsappLink number={whatsapp} />
        </>
      ) : null}
    </>
  );
}

/**
 * WhatsApp link to wa.me, in international format.
 * With `showNumber`, the number itself is shown as the link text after the label
 * (for a WhatsApp line that differs from the phone number beside it).
 */
export function WhatsappLink({
  number,
  label = ui.whatsapp,
  showNumber = false,
}: {
  number: string;
  label?: string;
  showNumber?: boolean;
}) {
  if (isPlaceholder(number)) {
    return showNumber ? (
      <span>
        {label} <Copy text={number} />
      </span>
    ) : (
      <span>{label}</span>
    );
  }
  if (showNumber) {
    return (
      <span>
        {label}{" "}
        <a className="link whitespace-nowrap" href={whatsappHref(number)} rel="noopener">
          {number}
        </a>
      </span>
    );
  }
  return (
    <a className="link" href={whatsappHref(number)} rel="noopener">
      {label}
    </a>
  );
}
