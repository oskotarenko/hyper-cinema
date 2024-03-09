export function ISOToHoursMinutes(str: string): string {
  const startTime = new Date(str)

  const hours = startTime.getHours() < 10 ? `0${startTime.getHours()}` : String(startTime.getHours())
  const minutes = startTime.getMinutes() < 10 ? `0${startTime.getMinutes()}` : String(startTime.getMinutes())

  return `${hours}:${minutes}`
}

// used
export function ISOToDayMonth(str: string): string {
  const date = new Date(str)
  const day = date.getDate() < 10 ? `0${date.getDate()}` : String(date.getDate())
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : String(date.getMonth() + 1)

  return `${day}.${month}`
}

export function ISOToYear(str: string): string {
  const startTime = new Date(str)
  const year = startTime.getFullYear()
  return String(year)
}

export function ISOToHoursMinutesDayMonth(str: string): string {
  const time = ISOToHoursMinutes(str)
  const date = ISOToDayMonth(str)

  return `${time} ${date}`
}

export function ISOToHoursMinutesDatMonthYear(str: string) {
  const time = ISOToHoursMinutes(str)
  const date = ISOToDayMonth(str)
  const year = ISOToYear(str)

  return `${time} ${date}.${year}`
}

export function timeToHoursMinutesDayMonth(time: number) {
  const str = new Date(Number(time)).toISOString()
  return ISOToHoursMinutesDatMonthYear(str)
}

export function stringToISOString(str: string): string {
  const [time, date] = str.split(" ");
  const [day, month, year] = date.split(".")

  const result = new Date(`${year}-${month}-${day}T${time}:00`).toISOString()
  return result
}

export function timeToISOString(time: number): string {
  return new Date(time).toISOString()
}