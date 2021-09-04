import { format } from "date-fns";

export function Footer() {
  return (
    <footer className="section section-dark flex flex-row justify-between">
      <p>Designed and developed by @_mdrj.</p>
      <p>© {format(new Date(), "yyyy")} @_mdrj. All rights reserved.</p>
    </footer>
  );
}
