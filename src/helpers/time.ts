import dayjs, { type ConfigType, type Dayjs } from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import duration from 'dayjs/plugin/duration'
import isBetween from 'dayjs/plugin/isBetween'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import { percentage } from '~helpers/stats'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advancedFormat)
dayjs.extend(isBetween)
dayjs.extend(duration)
dayjs.extend(relativeTime)

dayjs.tz.setDefault('UTC')

export const utcDate = (date?: ConfigType): Dayjs => dayjs.tz(date)

export const localDate = (date?: ConfigType): Dayjs => dayjs(date).local()

export const formatDate = (date: Dayjs): string => {
  const now = date.isUTC ? utcDate() : localDate()
  const showYear = !date.isSame(now, 'y')

  return date.format(
    ['MMM\xa0DD', showYear && 'YYYY'].filter(Boolean).join(', ')
  )
}

export const formatTime = (date: Dayjs): string => date.format('HH:mm\xa0z')

export const formatDateTime = (date: Dayjs): string =>
  [formatDate(date), formatTime(date)].join(' ')

export const formatDuration = (milliseconds: number): string => {
  const duration = dayjs.duration(milliseconds)
  const days = Math.floor(duration.asDays())

  if (days < 0 || days > 25) {
    return null
  } else if (days > 1) {
    return duration.humanize()
  } else {
    const hours = Math.floor(duration.asHours())

    return [
      hours > 0 && `${hours}h`,
      `${Math.max(0, duration.minutes())}m`,
      `${Math.max(0, duration.seconds())}s`
    ]
      .filter(Boolean)
      .join(' ')
  }
}

export const countdown = (
  date: Dayjs,
  start: Dayjs,
  end: Dayjs,
  now: Dayjs
): [string, number] => {
  const total = dayjs.duration(end.diff(start)).asMilliseconds()
  const passed = dayjs.duration(now.diff(start)).asMilliseconds()
  const remaining = dayjs.duration(date.diff(now)).asMilliseconds()

  return [formatDuration(remaining), percentage(passed, total, 3, true)]
}
