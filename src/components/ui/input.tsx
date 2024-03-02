import { LucideIcon } from "lucide-react";
import { HTMLInputTypeAttribute } from "react";

type Props = {
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  Icon: LucideIcon;
  autoComplete?: string;
};

export function Input({ type, name, placeholder, Icon, autoComplete }: Props) {
  return (
    <div className="flex flex-1 gap-2 bg-gray text-sm tablet:text-base px-2 tablet:px-3 py-1.5 tablet:py-2 rounded-lg w-full cursor-text">
      <Icon />
      <input
        className="bg-gray outline-none w-full"
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete ? autoComplete : "off"}
      />
    </div>
  );
}
