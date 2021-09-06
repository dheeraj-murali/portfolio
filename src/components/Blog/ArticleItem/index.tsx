import { Link } from "components/common/Link";
import { format } from "date-fns";
import { FaLink } from "react-icons/fa";

export function ArticleItem(props: ArticleItemProps) {
  const { createdAt, permalink, excerpt, title } = props;

  return (
    <article className="flex flex-col space-y-5">
      <time
        dateTime=""
        className="text-sm font-medium text-primary-600 dark:text-primary-300"
      >
        {format(new Date(createdAt), "dd/MM/yyyy")}
      </time>

      <h3>{title}</h3>

      <hr />

      <p>{excerpt}</p>

      <Link to={permalink} className="justify-start" label="read full article">
        <span>View full article</span>
        <FaLink />
      </Link>
    </article>
  );
}
