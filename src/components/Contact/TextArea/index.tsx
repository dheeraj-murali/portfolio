export function TextAreaInput(props: TextInputProps) {
  const {
    label,
    name,
    placeholder,
    autoComplete,
    disabled,
    required,
    legend,
    spellCheck,
  } = props;

  return (
    <fieldset disabled={disabled}>
      <label className="sr-only" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="input"
        spellCheck={spellCheck}
        autoComplete={autoComplete || "off"}
        required={required}
        id={name}
        name={name}
        placeholder={placeholder}
        rows={5}
      />
      {legend && <legend>{legend}</legend>}
    </fieldset>
  );
}
