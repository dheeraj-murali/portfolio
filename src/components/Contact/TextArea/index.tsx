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
    value,
    onChange,
    error,
  } = props;

  return (
    <fieldset disabled={disabled}>
      <label className="sr-only" htmlFor={name}>
        {label}
      </label>
      <textarea
        className={`input ${error ? "border-2 border-red-500" : ""}`}
        value={value}
        onChange={onChange}
        spellCheck={spellCheck}
        autoComplete={autoComplete || "off"}
        required={required}
        id={name}
        name={name}
        placeholder={placeholder}
        rows={5}
      />
      <p className="text-red-500 text-xs">{error}</p>
      {legend && <legend>{legend}</legend>}
    </fieldset>
  );
}
