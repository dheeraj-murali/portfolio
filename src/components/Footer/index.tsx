import { format } from "date-fns";

export function Footer() {
  return (
    <footer className="container mx-auto section px-5 lg:px-10 flex justify-between text-xs">
      <p>Designed and developed by @_mdrj.</p>
      <p>© {format(new Date(), "yyyy")} @_mdrj. All rights reserved.</p>
    </footer>
  );
}
