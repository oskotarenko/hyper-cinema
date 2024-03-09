import { Frown } from "lucide-react";

type Props = {
  title: string;
  message: string;
};
export function NothingFound({ title, message }: Props) {
  return (
    <div className="w-fit mx-auto h-fit flex flex-col justify-center items-center text-center z-10">
      <Frown size={50} color="#63F655" />
      <h1>Oops... {title}</h1>
      <h4>{message}</h4>
    </div>
  );
}
