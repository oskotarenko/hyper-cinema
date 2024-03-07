import { Table, TableColumn } from "@/shared/ui/table";

import { ScheduleStatusButton } from "./ScheduleStatusButton";

import type { Schedule } from "@prisma/client";
type Props = {
  schedules: Schedule[];
};
export function SchedulesTable({ schedules }: Props) {
  return (
    <Table data={schedules} title="All Schedules" emptyMessage="No schdules found...">
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
          <p key={schedule.id}>{schedule.status}</p>
        ))}
      </TableColumn>
      <TableColumn title="Manage">
        {schedules.map((schedule) => (
          <ScheduleStatusButton schedule={schedule} />
        ))}
      </TableColumn>
    </Table>
  );
}
