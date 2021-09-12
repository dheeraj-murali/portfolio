import { Link } from "components/common/Link";
import { format } from "date-fns";
import { FaLink } from "react-icons/fa";

export function ArticleItem(props: ArticleItemProps) {
  const { createdAt, permalink, excerpt, title, tags } = props;

  return (
    <article className="flex flex-col space-y-3">
      <time
        dateTime=""
        className="text-xs font-medium text-primary-600 dark:text-primary-300"
      >
        {format(new Date(createdAt), "dd/MM/yyyy")}
      </time>

      <h3>{title}</h3>

      <p className="text-sm">{excerpt}</p>

      <ul className="inline-flex items-center space-x-3">
        {tags.split(",").map((tag, index) => (
          <li key={index} className="text-xs font-bold text-secondary-500">
            #{tag.trim()}
          </li>
        ))}
      </ul>

      <Link to={permalink} className="justify-start" label="read full article">
        <span>View full article</span>
        <FaLink />
      </Link>
    </article>
  );
}
