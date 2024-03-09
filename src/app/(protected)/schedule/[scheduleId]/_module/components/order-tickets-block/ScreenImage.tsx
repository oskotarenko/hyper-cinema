import Image from "next/image";
import screen from "public/screen.svg";

export function ScreenImage() {
  return (
    <div className="w-full max-w-[350px] sm:max-w-[500px] lg:w-full">
      <Image src={screen} width={500} height={100} alt="screen-image" />
    </div>
  );
}
