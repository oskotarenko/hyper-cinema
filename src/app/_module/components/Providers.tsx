import { ReactNode } from "react";
import { Toaster, ToastOptions } from "react-hot-toast";

const toastOptions: ToastOptions = {
  position: "bottom-right",
  style: {
    borderRadius: "10px",
    background: "#5a5d66",
    color: "#eeeeee",
  },
};

type Props = {
  children: ReactNode;
};
export function Providers({ children }: Props) {
  return (
    <>
      {children}
      <Toaster toastOptions={toastOptions} />
    </>
  );
}
