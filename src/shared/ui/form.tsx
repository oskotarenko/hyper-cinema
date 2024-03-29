import clsx from "clsx";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { ReactNode } from "react";

type FormProps = {
  action: (formData: FormData) => Promise<any> | any;
  children: ReactNode;
  title?: string;
};
export function Form({ action, children, title }: FormProps) {
  return (
    <form action={action} noValidate className="flex flex-col gap-2 w-full">
      <div className="flex justify-center">
        <h1>{title}</h1>
      </div>
      {children}
    </form>
  );
}

type FormMessageProps = {
  type: "success" | "warning" | "error";
  message: string;
};

export function FormMessage({ type, message }: FormMessageProps) {
  if (!message) return null;

  return (
    <div
      className={clsx(
        type === "warning" && "text-yellow-400",
        type === "success" && "text-primary",
        type === "error" && "text-red-500",
        "flex py-0.5 px-2 tablet:py-1 tabelt:px-3 tablet rounded-lg items-center",
      )}
    >
      <p className="flex gap-2 items-center text-sm tablet:text-base">
        {type === "success" && <CheckCircle2 size={20} className="min-w-[20px] min-h-[20px]" />}
        {type === "warning" && <AlertCircle size={20} className="min-w-[20px] min-h-[20px]" />}
        {type === "error" && <XCircle size={20} className="min-w-[20px] min-h-[20px]" />}
        {message}
      </p>
    </div>
  );
}
