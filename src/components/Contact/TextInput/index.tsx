export function TextInput(props: TextInputProps) {
  const { label, name, placeholder, autoComplete, disabled, required, legend } =
    props;

  return (
    <fieldset disabled={disabled} className="flex flex-col space-y-2">
      <label className="sr-only" htmlFor={name}>
        {label}
      </label>
      <input
        className="input"
        autoComplete={autoComplete || "off"}
        required={required}
        id={name}
        name={name}
        placeholder={placeholder}
      />
      {legend && <legend className="text-sm">{legend}</legend>}
    </fieldset>
  );
}
