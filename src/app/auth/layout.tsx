import Image from "next/image";
import { ReactNode } from "react";

import logo from "../../../public/logo.svg";

type Props = {
  children: ReactNode;
};
export default function AuthLayout({ children }: Props) {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="absolute top-0 left-0 w-full flex justify-center">
        <div className="w-[400px] flex items-center gap-2 px-2">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="Hyper Cinema Logo"
            className="w-[30px] h-30px tablet:w-[40px] tablet:h-[40px]"
          />
          <h1>Hyper Cinema</h1>
        </div>
      </div>
      {children}
    </div>
  );
}
