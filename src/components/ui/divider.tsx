import clsx from "clsx";

type Props = {
  type: "horizontal" | "vertical";
  color: "primary" | "white" | "gray";
};
export function Divider({ type, color }: Props) {
  return (
    <div
      className={clsx(
        type === "horizontal" && "w-full h-[1px]",
        type === "vertical" && "w-[1px] h-full",
        color === "primary" && "bg-primary",
        color === "white" && "bg-white",
        color === "gray" && "bg-gray",
      )}
    />
  );
}
