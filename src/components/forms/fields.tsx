/**
 * Form fields: label above, 48px inputs, 4px radius, hairline border, focus ring.
 * Errors appear under the field in words, in critical, and are tied to it with aria-describedby.
 */
import { ui } from "@/content/shared";

type Base = {
  name: string;
  label: string;
  error?: string;
  required?: boolean;
};

function describedBy(name: string, error?: string) {
  return error ? `${name}-error` : undefined;
}

function Label({ name, label, required }: { name: string; label: string; required?: boolean }) {
  return (
    <label htmlFor={name} className="t-label mb-2 block text-ink">
      {label}
      {required ? null : <span className="font-normal text-ink-muted"> {ui.optional}</span>}
    </label>
  );
}

export function FieldError({ name, error }: { name: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={`${name}-error`} className="t-secondary mt-2 font-semibold text-critical">
      {error}
    </p>
  );
}

export function TextField({
  name,
  label,
  error,
  required,
  type = "text",
  autoComplete,
  inputMode,
}: Base & {
  type?: "text" | "email" | "tel";
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div>
      <Label name={name} label={label} required={required} />
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={200}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(name, error)}
        className="field-input"
      />
      <FieldError name={name} error={error} />
    </div>
  );
}

export function TextArea({ name, label, error, required }: Base) {
  return (
    <div>
      <Label name={name} label={label} required={required} />
      <textarea
        id={name}
        name={name}
        required={required}
        rows={5}
        maxLength={4000}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(name, error)}
        className="field-input"
      />
      <FieldError name={name} error={error} />
    </div>
  );
}

export function SelectField({
  name,
  label,
  error,
  required,
  options,
  onChange,
}: Base & { options: readonly string[]; onChange?: (value: string) => void }) {
  return (
    <div>
      <Label name={name} label={label} required={required} />
      <div className="select-wrap">
        <select
          id={name}
          name={name}
          required={required}
          defaultValue=""
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(name, error)}
          className="field-input"
        >
          <option value="">{ui.choose}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <FieldError name={name} error={error} />
    </div>
  );
}

export function RadioGroup({ name, label, error, options }: Omit<Base, "required"> & { options: readonly string[] }) {
  return (
    <fieldset aria-describedby={describedBy(name, error)}>
      <legend className="t-label mb-2 text-ink">
        {label}
        <span className="font-normal text-ink-muted"> {ui.optional}</span>
      </legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const id = `${name}-${option.toLowerCase().replace(/\W+/g, "-")}`;
          return (
            <label key={option} htmlFor={id} className="choice t-body">
              <input
                id={id}
                type="radio"
                name={name}
                value={option}
                className="size-5 shrink-0 accent-brand"
              />
              {option}
            </label>
          );
        })}
      </div>
      <FieldError name={name} error={error} />
    </fieldset>
  );
}

/**
 * Hidden honeypot. Off-screen and out of the tab order, so people never see it;
 * spam bots that fill in every field do, and their submissions are dropped.
 */
export function Honeypot({ name }: { name: string }) {
  return (
    <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
      <label htmlFor={name}>Leave this field empty</label>
      <input id={name} name={name} type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
    </div>
  );
}
