"use client";

import { Dispatch, SetStateAction } from "react";
import Popup from "reactjs-popup";

import { Button } from "@/shared/ui/button";

type Props = {
  datesList: string[];
  currentDate: string;
  setCurrentDate: Dispatch<SetStateAction<string>>;
};

export function ScheduleMenuHeader({ datesList, currentDate, setCurrentDate }: Props) {
  return (
    <header className="flex justify-between items-center">
      <h1>Choose session</h1>
      <Popup
        trigger={
          <div className="w-24 sm:w-36 flex [&>button]:flex-1 z-10">
            <Button variant="filled">{currentDate}</Button>
          </div>
        }
        closeOnDocumentClick
        closeOnEscape
        disabled={datesList.length < 2}
        on="hover"
        position="top center"
        arrow={false}
        className="dropdown"
      >
        <div className="w-24 z-20 sm:w-36 flex flex-col gap-2 outline-none bg-gray rounded-lg p-2 hover-colors">
          {datesList
            .filter((date) => date !== currentDate)
            .map((date) => {
              return (
                <Button variant="link" classname="no-underline" key={date} onClick={() => setCurrentDate(date)}>
                  {date}
                </Button>
              );
            })}
        </div>
      </Popup>
    </header>
  );
}
