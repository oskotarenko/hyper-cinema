import { LucideIcon } from "lucide-react";
import { ChangeEvent, HTMLInputTypeAttribute } from "react";

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

type InputFileProps = {
  name: string;
  Icon: LucideIcon;
  accept: string;
  // ? the eslint exception is used because the "no unused-vars" rule responds to formData: FormData,
  // ? which is necessary for the correct typing of the component
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function InputFile({ name, Icon, accept, onChange }: InputFileProps) {
  return (
    <div className="flex flex-1 items-center gap-2 bg-gray text-sm tablet:text-base px-2 tablet:px-3 py-1.5 tablet:py-2 rounded-lg w-full">
      <Icon />
      <input type="file" name={name} accept={accept} onChange={onChange} className="file-input w-fit" />
    </div>
  );
}
