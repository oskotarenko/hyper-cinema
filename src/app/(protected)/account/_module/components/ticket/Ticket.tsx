import Image from "next/image";
import Link from "next/link";

import { getMovieById } from "@/actions/movies/get-movie-by-id";
import { getScheduleById } from "@/actions/schedule/get-schedule-by-id";
import { AppRoutes } from "@/config/routes";
import { Ticket } from "@prisma/client";

import { TicketData } from "./TicketData";
import { TicketRefundButton } from "./TicketRefundButton";

type Props = {
  ticket: Ticket;
};
export async function Ticket({ ticket }: Props) {
  const schedule = await getScheduleById(ticket.scheduleId);
  const movie = await getMovieById(schedule.movieId);

  return (
    <div className="flex gap-2 border border-gray rounded-lg p-3 w-full min-w-fit xl:w-[calc(50%-0.5rem)] xl:min-w-fit relative">
      <Link href={`${AppRoutes.Movies}/${movie.id}`}>
        <Image
          src={movie.poster}
          width={100}
          height={150}
          alt={movie.title + "poster"}
          className="w-24 min-w-24 rounded-md"
        />
      </Link>
      <TicketData ticket={ticket} schedule={schedule} movie={movie} />
      <p
        className={`px-2 py-1 rounded-lg absolute top-3 right-3
  ${ticket.status === "Actual" ? "bg-primary text-black" : ticket.status === "Expired" ? "bg-rose-500" : "bg-blue-500"}`}
      >
        {ticket.status}
      </p>
      {ticket.status === "Actual" && <TicketRefundButton ticketId={ticket.id} />}
    </div>
  );
}
