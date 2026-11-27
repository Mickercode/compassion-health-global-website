/** Matches a [bracketed placeholder] in approved copy. */
export const PLACEHOLDER = /\[[^\]\n]+\]/g;

/** True when the whole value is still a placeholder, e.g. "[phone]". */
export function isPlaceholder(value: string): boolean {
  return /^\[[^\]\n]+\]$/.test(value.trim());
}

/** True when the value contains a placeholder anywhere. */
export function hasPlaceholder(value: string): boolean {
  return new RegExp(PLACEHOLDER.source).test(value);
}
