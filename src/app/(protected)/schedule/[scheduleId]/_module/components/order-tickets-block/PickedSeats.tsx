"use client";

import { useRouter } from "next/navigation";

import { buyTickets } from "@/actions/tickets/buy-tickets";
import { extractResponse } from "@/shared/services/response.service";
import { Button } from "@/shared/ui/button";

import { Seat } from "../../types/Seat";

type Props = {
  scheduleId: string;
  pickedSeats: Seat[];
  totalPrice: number;
  // eslint-disable-next-line no-unused-vars
  removeSeat: (seat: Seat) => void;
};

export default function PickedSeats({ scheduleId, pickedSeats, totalPrice, removeSeat }: Props) {
  const { push } = useRouter();

  const handlePurchase = async () => {
    const response = await buyTickets(scheduleId, pickedSeats);
    extractResponse(response);

    if (response.success) push(`/home`);
  };

  return (
    <div className="w-full max-w-[550px] flex flex-col items-center gap-2 md:items-start">
      <div className="w-full flex justify-between items-center">
        <h1>Picked Seats</h1>
        <h2>Total: {totalPrice} HYPERS</h2>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {pickedSeats.map((seat) => (
          <PickedSeat seat={seat} removeSeat={removeSeat} key={Math.random()} />
        ))}
      </div>
      <form action={handlePurchase} className="w-full mt-4 ">
        <Button variant="filled" type="submit">
          Purchase tickets
        </Button>
      </form>
    </div>
  );
}

type PickedSeatProps = {
  seat: Seat;
  // eslint-disable-next-line no-unused-vars
  removeSeat: (seat: Seat) => void;
};

function PickedSeat({ seat, removeSeat }: PickedSeatProps) {
  return (
    <div className="p-2 bg-gray flex justify-between items-center rounded-lg w-full">
      <div className="flex items-center gap-4">
        <h2 className="font-bold">
          <span className="text-base text-white/70">Row</span> {seat.row + 1}
        </h2>
        <h2 className="font-bold">
          <span className="text-base text-white/70">Seat</span> {seat.col + 1}
        </h2>
      </div>
      <Button
        variant="filled"
        classname="max-w-fit bg-red-300 text-red-800 font-semibold hover:bg-red-500 hover:text-white"
        onClick={() => removeSeat(seat)}
      >
        Remove
      </Button>
    </div>
  );
}
