import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

import { toasConfig } from "@/config/toaster.config";

type Props = {
  children: ReactNode;
};
export function Providers({ children }: Props) {
  return (
    <>
      {children}
      <Toaster toastOptions={toasConfig} />
    </>
  );
}
