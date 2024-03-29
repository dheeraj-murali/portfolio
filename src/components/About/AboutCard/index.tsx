import { Link } from "components/common/Link";
import data from "data/data.json";
import { MdWork } from "react-icons/md";

const { work } = data;

export function AboutCard() {
  return (
    <aside>
      <p className="text-sm mb-2">Currently working as,</p>
      <div className="flex items-center space-x-3">
        <MdWork className="fill-current text-secondary-500 animate-bounce text-lg" />
        <div>
          <p>{work.role}</p>
          <span className="inline-flex">
            @
            <Link to={work.link} external label="company website link">
              {work.at}
            </Link>
          </span>
        </div>
      </div>
    </aside>
  );
}
