import { ISOToHoursMinutesDayMonth } from "@/shared/services/date.service";
import { Movie, Schedule, Ticket } from "@prisma/client";

type Props = {
  ticket: Ticket;
  schedule: Schedule;
  movie: Movie;
};
export function TicketData({ ticket, schedule, movie }: Props) {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <h2 className="text-base md:text-xl text-primary w-fit font-bold p-0">{movie.title}</h2>
        <p className="text-white/70 text-xs">ID: {ticket.id.substring(ticket.id.length - 10)}</p>
      </div>
      <div className="text-xs md:text-sm">
        <p>{ISOToHoursMinutesDayMonth(schedule.startTime.toISOString())} </p>
        <p>
          Row: {ticket.row + 1 + " "} Seat: {ticket.col + 1 + " "}
        </p>
        <p className="text-primary font-bold">{schedule.price} HYPERS</p>
      </div>
    </div>
  );
}
