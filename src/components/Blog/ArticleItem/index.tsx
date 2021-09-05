import { Link } from "components/common/Link";
import { format } from "date-fns";
import { FaLink } from "react-icons/fa";

export function ArticleItem() {
  return (
    <article className="flex flex-col space-y-5 m-5">
      <time
        dateTime=""
        className="text-sm font-medium text-primary-600 dark:text-primary-300"
      >
        {format(new Date(), "dd/MM/yyyy")}
      </time>
      <h3>Title</h3>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
        laudantium exercitationem deserunt. Doloribus iusto, itaque, repellendus
        animi quas quis illum, dolore accusantium hic aliquam pariatur omnis.
        Vel ducimus nemo hic!
      </p>
      <Link to="/" className="justify-start">
        <span>Read More</span>
        <FaLink />
      </Link>
    </article>
  );
}
