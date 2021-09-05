import { Link } from "components/common/Link";
import { MdWork } from "react-icons/md";

export function AboutCard() {
  return (
    <aside>
      <p className="text-sm mb-2">Currently working as,</p>
      <div className="flex items-center space-x-3">
        <MdWork className="fill-current text-secondary-500 animate-bounce text-lg" />
        <div>
          <p>Senior engineer</p>
          <span className="inline-flex">
            @
            <Link to="https://www.rapidvaluesolutions.com/" external>
              RapidValue Solutions
            </Link>
          </span>
        </div>
      </div>
    </aside>
  );
}
