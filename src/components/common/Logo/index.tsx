import { Link } from "../Link";

export function Logo() {
  return (
    <Link
      to="/"
      className="max-w-min font-bold text-xl"
      label="go to home page"
    >
      @_mdrj
    </Link>
  );
}
