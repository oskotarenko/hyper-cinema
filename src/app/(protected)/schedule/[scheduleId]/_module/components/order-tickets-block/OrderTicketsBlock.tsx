"use client";

import { useState } from "react";

import { Schedule } from "@prisma/client";

import { Seat } from "../../types/Seat";
import PickedSeats from "./PickedSeats";
import { ScreenImage } from "./ScreenImage";
import { SeatsRow } from "./SeatsRow";

type Props = {
  schedule: Schedule;
};
export function OrderTicketsBlock({ schedule }: Props) {
  const seats = JSON.parse(schedule.seats as string) as boolean[][];
  const [pickedSeats, setPickedSeats] = useState<Seat[]>([]);

  const addSeat = (seat: Seat) => {
    setPickedSeats([...pickedSeats, seat]);
  };

  const removeSeat = (seat: Seat) => {
    setPickedSeats(pickedSeats.filter((item) => item.row !== seat.row || item.col !== seat.col));
  };

  return (
    <div className="flex flex-col items-center laptop:items-start laptop:flex-row gap-2">
      <div className="flex flex-col gap-2 items-center md:items-start">
        <h1>Choose seats</h1>
        <div className="flex flex-col items-center">
          <ScreenImage />
          <div className="flex flex-col gap-2 items-center ">
            {seats.map((seatsOccupancy, rowNumber) => {
              return (
                <div className="w-full flex justify-center items-center relative" key={Math.random()}>
                  <SeatsRow
                    seatsOccupancy={seatsOccupancy}
                    rowNumber={rowNumber}
                    pickedSeats={pickedSeats}
                    addSeat={addSeat}
                    removeSeat={removeSeat}
                  />
                  <span className="absolute top-0 left-[-20px] text-sm text-gray">{rowNumber + 1}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {!!pickedSeats.length && (
        <PickedSeats
          scheduleId={schedule.id}
          pickedSeats={pickedSeats}
          totalPrice={pickedSeats.length * schedule.price}
          removeSeat={removeSeat}
        />
      )}
    </div>
  );
}
