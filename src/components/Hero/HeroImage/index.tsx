import Image from "next/image";
import heroBg from "../../../../public/hero/heroBg.png";

export function HeroImage() {
  return (
    <div className="relative  p-5">
      <Image
        src={heroBg}
        alt="A glass window background through outside world is visible"
        width="700"
        height="600"
        placeholder="blur"
      />
    </div>
  );
}
