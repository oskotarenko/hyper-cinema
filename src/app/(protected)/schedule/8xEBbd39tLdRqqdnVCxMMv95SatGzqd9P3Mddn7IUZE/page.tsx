import clsx from "clsx";

import { getFullSchedule } from "@/actions/schedule/get-full-schedule";
import { Table, TableColumn } from "@/shared/ui/table";

import { GenerateSchedulesButton } from "./_module/components/GenerateSchedulesButton";
import { ScheduleStatusButton } from "./_module/components/ScheduleStatusButton";

export default async function AdminSchedulePage() {
  const schedules = await getFullSchedule();
  return (
    <div className="w-full flex flex-col gap-4">
      <Table
        data={schedules}
        title={
          <div className="flex gap-2 items-center text-nowrap">
            All Schedules <GenerateSchedulesButton />
          </div>
        }
        emptyMessage="No schdules found..."
      >
        <TableColumn title="Id">
          {schedules.map((schedule) => (
            <p key={schedule.id}>{schedule.id}</p>
          ))}
        </TableColumn>
        <TableColumn title="Start Time">
          {schedules.map((schedule) => (
            <p key={schedule.id}>{new Date(schedule.startTime).toUTCString()}</p>
          ))}
        </TableColumn>
        <TableColumn title="End Time">
          {schedules.map((schedule) => (
            <p key={schedule.id}>{new Date(schedule.endTime).toUTCString()}</p>
          ))}
        </TableColumn>
        <TableColumn title="Hall">
          {schedules.map((schedule) => (
            <p key={schedule.id}>{schedule.hall}</p>
          ))}
        </TableColumn>
        <TableColumn title="Price">
          {schedules.map((schedule) => (
            <p key={schedule.id}>{schedule.price}</p>
          ))}
        </TableColumn>
        <TableColumn title="Status">
          {schedules.map((schedule) => (
            <p
              key={schedule.id}
              className={clsx(
                schedule.status === "Sale" && "text-primary",
                schedule.status === "Canceled" && "text-red-500",
              )}
            >
              {schedule.status}
            </p>
          ))}
        </TableColumn>
        <TableColumn title="Manage">
          {schedules.map((schedule) => (
            <ScheduleStatusButton schedule={schedule} key={schedule.id} />
          ))}
        </TableColumn>
      </Table>
    </div>
  );
}
