/* Form primitives shared by the Bug report and Feature request pages.

   They are deliberately small and uncontrolled-looking: FeedbackShell owns
   the values/errors state and passes each field its slice, so the two pages
   only describe *which* questions they ask, never how a field is wired. */

import { useEffect, useRef, useState } from "react";
import { FaImage, FaXmark } from "react-icons/fa6";

const fieldClass = (error) => `fb-field${error ? " fb-field-invalid" : ""}`;

/* A numbered block of related questions ("01 — About you"). The number gives
   a long form a sense of progress without a real multi-step wizard.

   Deliberately NOT a <fieldset>/<legend>: a legend is pulled out of normal
   flow and painted over the fieldset's border, which notched a gap in the
   divider and left the heading sitting on the line with nothing above it.
   No amount of margin fixes that — the element has to be in flow. */
export const FieldGroup = ({ step, title, hint, children }) => (
  <section className="fb-group">
    <div className="fb-group-head">
      <span className="fb-group-step" aria-hidden="true">
        {step}
      </span>
      <div className="fb-group-heading">
        <h3 className="fb-group-title">{title}</h3>
        {hint && <p className="fb-group-hint">{hint}</p>}
      </div>
    </div>
    <div className="fb-group-body">{children}</div>
  </section>
);

/* Two fields side by side on desktop, stacked on mobile. */
export const FieldRow = ({ children }) => (
  <div className="fb-row">{children}</div>
);

const Label = ({ htmlFor, label, optional }) => (
  <label className="fb-label" htmlFor={htmlFor}>
    {label}
    {optional && <span className="fb-optional">optional</span>}
  </label>
);

const Error = ({ id, error }) =>
  error ? (
    <p className="fb-error" id={id} role="alert">
      {error}
    </p>
  ) : null;

/* Hints sit BELOW the control, not between the label and it. Above, a hint on
   one field of a two-column row pushed that field's input down while its
   neighbour's stayed put, so the inputs in a row never lined up.

   A hint hides while an error is showing: stacking both puts two lines of
   small print under one field, and the error copy already says what the hint
   would have. It comes back as soon as the field is fixed. */
const Hint = ({ id, hint, error }) =>
  hint && !error ? (
    <p className="fb-hint" id={id}>
      {hint}
    </p>
  ) : null;

/* Ties the control to whichever of the two is actually on screen. */
const describedBy = (id, hint, error) =>
  (error ? `${id}-error` : hint ? `${id}-hint` : undefined);

export const TextField = ({
  id,
  label,
  optional,
  error,
  hint,
  value,
  onChange,
  ...rest
}) => (
  <div className={fieldClass(error)}>
    <Label htmlFor={id} label={label} optional={optional} />
    <input
      id={id}
      className="fb-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-invalid={error ? true : undefined}
      aria-describedby={describedBy(id, hint, error)}
      {...rest}
    />
    <Hint id={`${id}-hint`} hint={hint} error={error} />
    <Error id={`${id}-error`} error={error} />
  </div>
);

/* The one place a hint stays ABOVE its control: a textarea's hint is a prompt
   for what to write, so it has to be read before the box, and a textarea is
   always full-width here — never in a row — so it can't knock a neighbour
   out of alignment. */
export const TextArea = ({
  id,
  label,
  optional,
  error,
  hint,
  value,
  onChange,
  rows = 5,
  ...rest
}) => (
  <div className={fieldClass(error)}>
    <Label htmlFor={id} label={label} optional={optional} />
    <Hint id={`${id}-hint`} hint={hint} error={error} />
    <textarea
      id={id}
      className="fb-input fb-textarea"
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-invalid={error ? true : undefined}
      aria-describedby={describedBy(id, hint, error)}
      {...rest}
    />
    <Error id={`${id}-error`} error={error} />
  </div>
);

export const SelectField = ({
  id,
  label,
  optional,
  error,
  hint,
  value,
  onChange,
  options,
  placeholder = "Pick one",
}) => (
  <div className={fieldClass(error)}>
    <Label htmlFor={id} label={label} optional={optional} />
    <div className="fb-select-wrap">
      <select
        id={id}
        className="fb-input fb-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, hint, error)}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
    <Hint id={`${id}-hint`} hint={hint} error={error} />
    <Error id={`${id}-error`} error={error} />
  </div>
);

/* Radio group rendered as pills. Real inputs underneath, so keyboard and
   screen-reader behaviour is the browser's rather than something re-invented. */
export const ChoiceGroup = ({
  name,
  label,
  optional,
  error,
  hint,
  value,
  onChange,
  options,
}) => (
  <div className={fieldClass(error)} role="radiogroup" aria-labelledby={`${name}-label`}>
    <span className="fb-label" id={`${name}-label`}>
      {label}
      {optional && <span className="fb-optional">optional</span>}
    </span>
    <div className="fb-choices">
      {options.map((opt) => {
        const optValue = typeof opt === "string" ? opt : opt.value;
        const optLabel = typeof opt === "string" ? opt : opt.label;
        const id = `${name}-${optValue.replace(/\W+/g, "-").toLowerCase()}`;
        return (
          <label
            key={optValue}
            className={`fb-choice${value === optValue ? " fb-choice-on" : ""}`}
            htmlFor={id}
          >
            <input
              type="radio"
              id={id}
              name={name}
              value={optValue}
              checked={value === optValue}
              onChange={() => onChange(optValue)}
            />
            <span>{optLabel}</span>
          </label>
        );
      })}
    </div>
    <Hint id={`${name}-hint`} hint={hint} error={error} />
    <Error id={`${name}-error`} error={error} />
  </div>
);

/* One preview tile. Owns its own object URL so the browser can render the file
   before it's uploaded anywhere, and revokes it on unmount so we don't leak a
   blob for every image the user adds and removes. */
const ImageThumb = ({ file, onRemove }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file);
    setUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <div className="fb-thumb">
      {url && <img src={url} alt={file.name} />}
      <button
        type="button"
        className="fb-thumb-remove"
        onClick={onRemove}
        aria-label={`Remove ${file.name}`}
      >
        <FaXmark aria-hidden="true" />
      </button>
    </div>
  );
};

/* Up to `max` image attachments. Value is an array of File objects held in
   form state; the submit layer turns those into uploads later. Click or
   drag-and-drop; oversized or non-image files are rejected with a message
   rather than silently dropped. */
export const ImageUpload = ({
  id,
  label,
  optional,
  hint,
  error,
  files = [],
  onChange,
  max = 3,
  maxSizeMB = 5,
}) => {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [localError, setLocalError] = useState("");
  const full = files.length >= max;

  const addFiles = (incoming) => {
    const picked = Array.from(incoming);
    if (!picked.length) return;

    const room = max - files.length;
    const accepted = [];
    let rejected = "";

    for (const file of picked) {
      if (accepted.length >= room) {
        rejected = `You can attach up to ${max} images.`;
        break;
      }
      if (!file.type.startsWith("image/")) {
        rejected = "Only image files can be attached.";
        continue;
      }
      if (file.size > maxSizeMB * 1024 * 1024) {
        rejected = `Each image must be under ${maxSizeMB}MB.`;
        continue;
      }
      accepted.push(file);
    }

    if (accepted.length) onChange([...files, ...accepted]);
    setLocalError(rejected);
  };

  const onInput = (e) => {
    addFiles(e.target.files);
    // Reset so picking the same file again still fires a change.
    e.target.value = "";
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (full) return;
    addFiles(e.dataTransfer.files);
  };

  const removeAt = (index) => {
    onChange(files.filter((_, i) => i !== index));
    setLocalError("");
  };

  const shownError = error || localError;

  return (
    <div className={fieldClass(shownError)}>
      <Label htmlFor={id} label={label} optional={optional} />
      <Hint id={`${id}-hint`} hint={hint} error={shownError} />

      <div className="fb-uploads">
        {files.map((file, i) => (
          <ImageThumb
            key={`${file.name}-${file.lastModified}-${i}`}
            file={file}
            onRemove={() => removeAt(i)}
          />
        ))}

        {!full && (
          <button
            type="button"
            className={`fb-dropzone${dragging ? " fb-dropzone-over" : ""}`}
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={onDrop}
          >
            <FaImage aria-hidden="true" />
            <span className="fb-dropzone-lead">
              {files.length ? "Add another" : "Add a screenshot"}
            </span>
            <span className="fb-dropzone-sub">Tap or drop · up to {max}</span>
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        id={id}
        type="file"
        accept="image/*"
        multiple
        className="fb-file-input"
        onChange={onInput}
        aria-describedby={describedBy(id, hint, shownError)}
      />

      <p className="fb-upload-count">
        {files.length} / {max} added
      </p>
      <Error id={`${id}-error`} error={shownError} />
    </div>
  );
};

export const CheckboxField = ({ id, label, checked, onChange }) => (
  <label className="fb-checkbox" htmlFor={id}>
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
    <span>{label}</span>
  </label>
);

/* The "who are you" block both forms open with. Email is the only required
   field here — it's the only way the team can come back with a fix or a
   follow-up question. */
export const IdentityFields = ({ values, setField, errors }) => (
  <>
    <FieldRow>
      <TextField
        id="fullName"
        label="Your name"
        optional
        value={values.fullName}
        onChange={(v) => setField("fullName", v)}
        placeholder="e.g. Tomiwa A."
        autoComplete="name"
      />
      <TextField
        id="email"
        label="Email"
        type="email"
        error={errors.email}
        hint="So we can get back to you. We won't spam you, promise."
        value={values.email}
        onChange={(v) => setField("email", v)}
        placeholder="you@example.com"
        autoComplete="email"
      />
    </FieldRow>

    <FieldRow>
      <TextField
        id="avitag"
        label="Your Avitag"
        optional
        hint="Your unique name on Kampos — helps us find your account fast."
        value={values.avitag}
        onChange={(v) => setField("avitag", v)}
        placeholder="@yourAvitag"
      />
      <TextField
        id="school"
        label="Your school"
        optional
        value={values.school}
        onChange={(v) => setField("school", v)}
        placeholder="e.g. University of Ibadan"
      />
    </FieldRow>
  </>
);
