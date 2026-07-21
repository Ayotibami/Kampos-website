/* Form primitives shared by the Bug report and Feature request pages.

   They are deliberately small and uncontrolled-looking: FeedbackShell owns
   the values/errors state and passes each field its slice, so the two pages
   only describe *which* questions they ask, never how a field is wired. */

const fieldClass = (error) => `fb-field${error ? " fb-field-invalid" : ""}`;

/* A numbered block of related questions ("01 — About you"). The eyebrow gives
   a long form a sense of progress without a real multi-step wizard. */
export const FieldGroup = ({ step, title, hint, children }) => (
  <fieldset className="fb-group">
    <legend className="fb-group-legend">
      <span className="fb-group-step">{step}</span>
      <span className="fb-group-title">{title}</span>
    </legend>
    {hint && <p className="fb-group-hint">{hint}</p>}
    <div className="fb-group-body">{children}</div>
  </fieldset>
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
    {hint && <p className="fb-hint">{hint}</p>}
    <input
      id={id}
      className="fb-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      {...rest}
    />
    <Error id={`${id}-error`} error={error} />
  </div>
);

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
    {hint && <p className="fb-hint">{hint}</p>}
    <textarea
      id={id}
      className="fb-input fb-textarea"
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
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
    {hint && <p className="fb-hint">{hint}</p>}
    <div className="fb-select-wrap">
      <select
        id={id}
        className="fb-input fb-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
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
    {hint && <p className="fb-hint">{hint}</p>}
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
    <Error id={`${name}-error`} error={error} />
  </div>
);

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
