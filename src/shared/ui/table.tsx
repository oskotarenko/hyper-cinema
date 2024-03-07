import clsx from "clsx";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import { Movie, Schedule, Ticket, User } from "@prisma/client";

import { Button } from "./button";

type TableProps = {
  title: string | ReactNode;
  emptyMessage: string;
  data: User[] | Movie[] | Schedule[] | Ticket[];
  children: ReactNode;
  classname?: string;
};

export function Table({ title, emptyMessage, data, children, classname }: TableProps) {
  return (
    <div className={clsx("w-full h-full flex flex-col gap-2", classname)}>
      <div className="flex items-center gap-2">
        <Link href="/admin">
          <Button variant="link" classname="no-underline">
            <ChevronLeft />
          </Button>
        </Link>
        <h1>{title}</h1>
      </div>
      <div className="w-full overflow-x-scroll text-nowrap flex gap-6 flex-1">
        {data.length ? (
          <>
            <div className="w-fit pb-2 min-w-fit">
              <h2>№</h2>
              {data.map((item, index) => (
                <p className="w-full" key={item.id}>
                  {index + 1}
                </p>
              ))}
            </div>
            {children}
          </>
        ) : (
          <h2 className="text-wrap">{emptyMessage}</h2>
        )}
      </div>
    </div>
  );
}

type TableColumnProps = {
  title: string;
  children: ReactNode;
};

export function TableColumn({ title, children }: TableColumnProps) {
  return (
    <div className="w-fit max-w-full pb-2 min-w-fit">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
