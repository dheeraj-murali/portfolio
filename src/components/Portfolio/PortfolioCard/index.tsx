import { Link } from "components/common/Link";
import Image from "next/image";

export function PortfolioCard() {
  return (
    <article className="card">
      <div className="relative w-full h-44 lg:h-60">
        <Image src="/icon.png" alt="" layout="fill" />
      </div>
      <div className="flex flex-col w-full p-5">
        <h3>Product title</h3>
        <p className="text-sm text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
          similique explicabo? Voluptas minima, natus facilis necessitatibus
          atque perspiciatis totam suscipit officia id aliquam tempora modi
          nisi, repudiandae distinctio culpa ipsum.
        </p>
        <ul className="inline-flex flex-wrap space-x-3 my-5">
          <li>tool</li>
          <li>tool</li>
          <li>tool</li>
          <li>tool</li>
        </ul>
        <Link to="#">Visit Website</Link>
      </div>
    </article>
  );
}
