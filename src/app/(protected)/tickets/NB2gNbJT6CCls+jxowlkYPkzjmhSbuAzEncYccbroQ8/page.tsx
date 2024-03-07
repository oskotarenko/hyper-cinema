import clsx from "clsx";

import { getAllTickets } from "@/actions/tickets/get-all-tickets";
import { Table, TableColumn } from "@/shared/ui/table";

export default async function AdminTicketsPage() {
  const tickets = await getAllTickets();

  return (
    <div className="w-full flex flex-col gap-4">
      <Table data={tickets} title="All Tickets" emptyMessage="No tickets found...">
        <TableColumn title="ID">
          {tickets.map((ticket) => (
            <p key={ticket.id}>{ticket.id}</p>
          ))}
        </TableColumn>
        <TableColumn title="Status">
          {tickets.map((ticket) => (
            <p
              key={ticket.id}
              className={clsx(
                ticket.status === "Actual" && "text-primary",
                ticket.status === "Refunded" && "text-yellow-500",
                ticket.status === "Expired" && "text-red-500",
              )}
            >
              {ticket.status}
            </p>
          ))}
        </TableColumn>
        <TableColumn title="Created At">
          {tickets.map((ticket) => (
            <p key={ticket.id}>{new Date(ticket.createdAt).toUTCString()}</p>
          ))}
        </TableColumn>
      </Table>
    </div>
  );
}
