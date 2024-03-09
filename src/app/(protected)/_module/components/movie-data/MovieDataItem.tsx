type Props = {
  title: string;
  data: string | number;
};

export function MovieDataItem({ title, data }: Props) {
  return (
    <div className="flex gap-2 w-full">
      <p className="min-w-24 w-24 text-white/60 text-wrap">{title}</p>
      <p className="font-bold">{data}</p>
    </div>
  );
}
