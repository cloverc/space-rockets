import { DateTime } from "luxon"

const FORMAT_DATE_TIME = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}

export function formatDate(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(timestamp));
}

export function formatDateTime(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  }).format(new Date(timestamp));
}

export function formatDateTimeLocal(timestamp) {
  const getDateTime = DateTime.fromISO(timestamp, { setZone: true })
  const offsetTimeZone = getDateTime.zoneName
  const localDateTime = getDateTime.toLocaleString(FORMAT_DATE_TIME)
  return `${localDateTime}  ${offsetTimeZone}`
}
