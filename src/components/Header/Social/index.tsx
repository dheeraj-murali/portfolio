import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import data from "Data/data.json";
import { Link } from "components/common/Link";
import { v4 } from "uuid";

const { social } = data;

const getService = (service: string) => {
  switch (service) {
    case "GitHub":
      return <SiGithub />;
    case "LinkedIn":
      return <SiLinkedin />;
    case "Twitter":
      return <SiTwitter />;

    default:
      return null;
  }
};

export function Social() {
  return (
    <div className="inline-flex space-x-5">
      {social.map((item) => (
        <Link key={v4()} to={item.link} external>
          {getService(item.service)}
        </Link>
      ))}
    </div>
  );
}
