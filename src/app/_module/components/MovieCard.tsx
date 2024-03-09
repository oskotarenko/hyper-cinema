import Image from "next/image";
import Link from "next/link";

import { AppRoutes } from "@/config/routes";
import { Movie } from "@prisma/client";

type Props = {
  movie: Movie;
};
export function MovieCard({ movie }: Props) {
  return (
    <Link href={`${AppRoutes.Movies}/${movie.id}`} className="rounded-lg relative h-fit w-full">
      <div className="relative hover:[&>div]:opacity-100">
        <Image
          src={movie.poster}
          width={350}
          height={500}
          alt={`${movie.title} poster`}
          className="w-full h-full rounded-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-primary/90 rounded-lg p-3 duration-200 transition-all opacity-0 flex flex-col justify-between">
          <div className="text-black font-semibold text-xs sm:text-sm">
            <p className="mt-2 font-semibold">{movie.genres}</p>
            <p>{movie.restrictions}+</p>
          </div>
          <h2 className="text-black font-bold">{movie.title}</h2>
        </div>
      </div>
    </Link>
  );
}
