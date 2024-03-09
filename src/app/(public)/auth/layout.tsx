import { ReactNode } from "react";

import { Logo } from "@/shared/ui/logo";

type Props = {
  children: ReactNode;
};
export default function AuthLayout({ children }: Props) {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="absolute top-0 left-0 w-full flex justify-center">
        <div className="w-[400px] flex items-center gap-2 px-2">
          <Logo />
          <h1>Hyper Cinema</h1>
        </div>
      </div>
      {children}
    </div>
  );
}
