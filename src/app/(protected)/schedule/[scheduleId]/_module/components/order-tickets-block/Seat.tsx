"use client";

import clsx from "clsx";

import { Seat as SeatType } from "../../types/Seat";

type Props = {
  isOccupied: boolean;
  rowNumber: number;
  colNumber: number;
  pickedSeats: SeatType[];
  // eslint-disable-next-line no-unused-vars
  addSeat: (seat: SeatType) => void;
  // eslint-disable-next-line no-unused-vars
  removeSeat: (seat: SeatType) => void;
};

export function Seat({ isOccupied, rowNumber, colNumber, pickedSeats, addSeat, removeSeat }: Props) {
  const isPicked = pickedSeats.some((seat) => seat.row === rowNumber && seat.col == colNumber);

  const handleClick = () => {
    isPicked ? removeSeat({ row: rowNumber, col: colNumber }) : addSeat({ row: rowNumber, col: colNumber });
  };

  return (
    <button className="w-fit" onClick={handleClick} disabled={isOccupied}>
      <svg
        className={clsx(isOccupied ? "fill-gray" : isPicked ? "fill-primary/70" : "fill-white", "w-4 sm:w-6")}
        viewBox="0 0 251 232"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="39.5" y="1.5" width="172" height="197" rx="8.5" stroke="black" strokeWidth="10" />
        <path
          d="M249 42V222C249 226.694 245.194 230.5 240.5 230.5H10.5C5.80558 230.5 2 226.694 2 222V42C2 37.3056 5.80558 33.5 10.5 33.5H39.5C44.1944 33.5 48 37.3056 48 42V181C48 187.351 53.1487 192.5 59.5 192.5H125H188C194.351 192.5 199.5 187.351 199.5 181V42C199.5 37.3056 203.306 33.5 208 33.5H240.5C245.194 33.5 249 37.3056 249 42Z"
          stroke="black"
          strokeWidth="10"
        />
      </svg>
    </button>
  );
}
