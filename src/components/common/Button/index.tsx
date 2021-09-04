export function Button(props: ButtonProps) {
  const { onClick, type, children } = props;

  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}
