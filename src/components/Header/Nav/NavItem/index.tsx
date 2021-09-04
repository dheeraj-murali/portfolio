import { Link } from "components/common/Link";

export function NavItem(props: NavItemProps) {
  const { link, title } = props;
  return (
    <Link to={link} className="p-3">
      {title}
    </Link>
  );
}
