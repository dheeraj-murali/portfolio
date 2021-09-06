import NextLink from "next/link";

export function Link(props: LinkProps) {
  const { to, asButton, className, children, external, label } = props;

  if (external)
    return (
      <a
        href={to}
        target="_blank"
        className={`${asButton ? "button" : "link"} ${className}`}
        rel="noreferrer"
        aria-label={label}
      >
        {children}
      </a>
    );

  return (
    <NextLink href={to} passHref>
      <a
        aria-label={label}
        className={`${asButton ? "button" : "link"} ${className}`}
      >
        {children}
      </a>
    </NextLink>
  );
}
