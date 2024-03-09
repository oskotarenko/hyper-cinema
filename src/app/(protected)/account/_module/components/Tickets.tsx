import { Ticket } from "@prisma/client";

import { Ticket as TicketComponent } from "./ticket/Ticket";

type Props = {
  tickets: Ticket[];
};
export function Tickets({ tickets }: Props) {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <h1>Tickets</h1>
      <div className="flex flex-wrap gap-2">
        {tickets.length ? (
          tickets.map((ticket) => <TicketComponent key={ticket.id} ticket={ticket} />)
        ) : (
          <h3>The tickets you purchase will appear here</h3>
        )}
      </div>
    </div>
  );
}
