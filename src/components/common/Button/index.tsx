export function Button(props: ButtonProps) {
  const { onClick, type, children, label, transparent } = props;

  return (
    <button
      className={`button ${transparent ? "!bg-transparent shadow-none" : ""}`}
      type={type}
      onClick={onClick}
      aria-label={label}
    >
      {children}
    </button>
  );
}
