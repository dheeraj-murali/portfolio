import NextLink from "next/link";

export function Link(props: LinkProps) {
  const { to, asButton, className, children, external } = props;

  if (external)
    return (
      <a
        href={to}
        target="_blank"
        className={`${asButton ? "button" : "link"} ${className}`}
        rel="noreferrer"
      >
        {children}
      </a>
    );

  return (
    <NextLink href={to} passHref>
      <a className={`${asButton ? "button" : "link"} ${className}`}>
        {children}
      </a>
    </NextLink>
  );
}
