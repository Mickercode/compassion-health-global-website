/**
 * Turn a Nigerian phone number as people write it ("0803 000 0000", "+234 803 000 0000")
 * into international digits without the plus ("2348030000000"), for tel: and wa.me links.
 */
export function toInternational(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("234")) return digits;
  if (digits.startsWith("0")) return `234${digits.slice(1)}`;
  return digits;
}

export function telHref(raw: string): string {
  return `tel:+${toInternational(raw)}`;
}

export function whatsappHref(raw: string): string {
  return `https://wa.me/${toInternational(raw)}`;
}
