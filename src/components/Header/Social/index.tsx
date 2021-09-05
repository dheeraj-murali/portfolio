import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Social() {
  return (
    <div className="inline-flex space-x-5">
      <a
        className="link"
        target="_blank"
        href="https://github.com/dheeraj-murali"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        className="link"
        target="_blank"
        href="https://www.linkedin.com/in/dheeraj-murali/"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        className="link"
        target="_blank"
        href="https://twitter.com/_mdrj"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
  );
}
