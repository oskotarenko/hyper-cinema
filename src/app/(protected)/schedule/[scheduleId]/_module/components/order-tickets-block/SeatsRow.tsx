import { Seat as SeatType } from "../../types/Seat";
import { Seat } from "./Seat";

type Props = {
  seatsOccupancy: boolean[];
  rowNumber: number;
  pickedSeats: SeatType[];
  addSeat: (seat: SeatType) => void;
  removeSeat: (seat: SeatType) => void;
};

export function SeatsRow({ seatsOccupancy, rowNumber, pickedSeats, addSeat, removeSeat }: Props) {
  return (
    <div className="flex gap-1 sm:gap-2">
      {seatsOccupancy.map((isOccupied, colNumber) => {
        return (
          <Seat
            isOccupied={isOccupied}
            rowNumber={rowNumber}
            colNumber={colNumber}
            pickedSeats={pickedSeats}
            addSeat={addSeat}
            removeSeat={removeSeat}
            key={Math.random()}
          />
        );
      })}
    </div>
  );
}
