export function TextInput(props: TextInputProps) {
  const {
    label,
    name,
    placeholder,
    autoComplete,
    disabled,
    required,
    legend,
    value,
    onChange,
    error,
  } = props;

  return (
    <fieldset disabled={disabled} className="flex flex-col">
      <label className="sr-only" htmlFor={name}>
        {label}
      </label>
      <input
        autoComplete={autoComplete || "off"}
        required={required}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`input ${error ? "border-2 border-red-500" : ""}`}
        value={value}
        onChange={onChange}
      />
      <p className="text-red-500 text-xs">{error}</p>
      {legend && <legend className="text-sm">{legend}</legend>}
    </fieldset>
  );
}
