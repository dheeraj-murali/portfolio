import Image from "next/image";
import heroBg from "../../../../public/hero/heroBg.png";

export function HeroImage() {
  return (
    <div className="relative  p-5">
      <Image
        src={heroBg}
        alt="A glass window background through outside world is visible"
        width="500"
        height="400"
        placeholder="blur"
      />
    </div>
  );
}
