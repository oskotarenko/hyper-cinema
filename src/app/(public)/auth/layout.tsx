"use client";

import { ReactNode } from "react";

import Disclaimer from "./_module/components/Disclaimer";

type Props = {
  children: ReactNode;
};
export default function AuthLayout({ children }: Props) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative">
      <Disclaimer />
      {children}
    </div>
  );
}
