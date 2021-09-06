import Image from "next/image";
import heroBg from "../../../../public/hero/heroBg.png";

export function HeroImage() {
  return (
    <div className="relative  p-5">
      <Image
        src={heroBg}
        alt="The protagonist working on his computer"
        width="500"
        height="400"
        placeholder="blur"
      />
    </div>
  );
}
