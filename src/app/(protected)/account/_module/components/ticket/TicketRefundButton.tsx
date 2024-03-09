"use client";

import { refundTicket } from "@/actions/tickets/refund-ticket";
import { extractResponse } from "@/shared/services/response.service";
import { Button } from "@/shared/ui/button";

type Props = {
  ticketId: string;
};
export function TicketRefundButton({ ticketId }: Props) {
  const handleRefund = async (ticketId: string) => {
    const response = await refundTicket(ticketId);
    extractResponse(response);
  };

  return (
    <Button
      variant="filled"
      classname="absolute bottom-3 right-3 text-sm max-w-fit bg-transparent text-red-600 border border-red-600 px-2 hover:bg-red-600 hover:text-white"
      onClick={() => handleRefund(ticketId)}
    >
      Refund
    </Button>
  );
}
