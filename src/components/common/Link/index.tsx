import NextLink from "next/link";

export function Link(props: LinkProps) {
  const { to, asButton, className, children } = props;
  return (
    <NextLink href={to} passHref>
      <a
        className={`${
          asButton ? "button" : "link"
        } ${className} inline-flex justify-between items-center space-x-3`}
      >
        {children}
      </a>
    </NextLink>
  );
}
