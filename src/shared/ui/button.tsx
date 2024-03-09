import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  children: string | ReactNode;
  onClick?: () => void;
  variant: "filled" | "outline" | "link";
  icon?: LucideIcon;
  type?: "submit" | "reset" | "button";
  classname?: string;
};

export function Button({ children, onClick, ...props }: Props) {
  return (
    <button
      className={clsx(
        "w-full flex items-center gap-2 text-sm tablet:text-base px-2 tablet:px-3 py-1.5 tablet:py-2 rounded-lg hover-colors",
        props.variant === "filled" && "bg-primary text-black hover:bg-primary/70",
        props.variant === "outline" && "border border-white hover:border-primary hover:text-primary",
        props.variant === "link" && "text-white underline hover:text-primary/70",
        props.classname,
      )}
      onClick={onClick}
      type={props.type || "button"}
    >
      {props.icon && <props.icon />}
      <p className="flex-1 flex items-center justify-center gap-2 font-medium">{children}</p>
    </button>
  );
}
