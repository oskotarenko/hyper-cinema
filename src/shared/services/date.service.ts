export function DatetoHoursMinutes(date: Date): string {
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : String(date.getHours());
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : String(date.getMinutes());

  return hours + ":" + minutes;
}

export function DatetoDayMonth(date: Date): string {
  const day = date.getDate() < 10 ? `0${date.getDate()}` : String(date.getDate())
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : String(date.getMonth() + 1)

  return day + "." + month;
}

export function DatetoString(date: Date): string {
  const timeStr = DatetoHoursMinutes(date);
  const dateStr = DatetoDayMonth(date);

  return timeStr + " " + dateStr;
}