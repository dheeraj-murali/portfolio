import { Link } from "components/common/Link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export function PortfolioCard() {
  return (
    <article className="flex flex-col space-y-3 m-5">
      <Image
        src="/icon.png"
        alt=""
        width="50"
        height="50"
        layout="fixed"
        className="rounded overflow-hidden"
      />

      <h3>Product title</h3>

      <p className="text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
        similique explicabo? Voluptas minima, natus facilis necessitatibus atque
        perspiciatis totam suscipit officia id aliquam tempora modi nisi,
        repudiandae distinctio culpa ipsum.
      </p>

      <ul className="inline-flex flex-wrap space-x-3 my-5">
        <li>tool</li>
        <li>tool</li>
        <li>tool</li>
        <li>tool</li>
      </ul>

      <Link to="#" external className="justify-end">
        <span>Visit Website</span>
        <FaArrowRight />
      </Link>
    </article>
  );
}
