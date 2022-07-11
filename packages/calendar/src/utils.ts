import {
    addMonths,
    startOfYear,
    endOfYear,
    setYear,
    getYear,
    addYears,
    subMonths,
    subYears,
    startOfMonth,
    endOfMonth,
    isSameMonth,
    format,
    isToday,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    eachWeekOfInterval,
    eachMonthOfInterval
} from 'date-fns'
import { CalendarTypes } from './types'
import { WEEK_STARTS_ON, CALENDAR_CELL_DATE_FORMAT, CALENDAR_CELL_MONTH_FORMAT, CALENDAR_CELL_YEAR_FORMAT } from './constants'

interface DataPropsArg {
    original: Date
    format: string
    display: string
    isSameDay?: boolean
    isToday?: boolean
}

export const getWeekdays = ({
    fmt = 'EEE',
    weekStartsOn = WEEK_STARTS_ON
}: {
    fmt: string
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
}): string[] => {
    const now = new Date()
    return eachDayOfInterval({
        start: startOfWeek(now, { weekStartsOn }),
        end: endOfWeek(now, { weekStartsOn })
    }).map((d) => format(d, fmt))
}

export const fnsFormat = (date: string | Date, fmt: string): string => {
    return format(new Date(date), fmt)
}

export const getDaysInMonthMatrixMode = (date: Date, weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 = WEEK_STARTS_ON): DataPropsArg[][] => {
    const dateSelected = new Date(date)

    const matrix = eachWeekOfInterval(
        {
            start: startOfMonth(dateSelected),
            end: endOfMonth(dateSelected)
        },
        { weekStartsOn }
    )

    return matrix.map((weekDay) =>
        eachDayOfInterval({
            start: startOfWeek(weekDay, {
                weekStartsOn: WEEK_STARTS_ON
            }),
            end: endOfWeek(weekDay, {
                weekStartsOn: WEEK_STARTS_ON
            })
        }).map((day) => ({
            original: day,
            format: format(day, CALENDAR_CELL_DATE_FORMAT),
            display: format(day, 'dd'),
            isSameDay: !isSameMonth(dateSelected, day),
            isToday: isToday(day)
        }))
    )
}

export const getMonthsInYearMatrixMode = (date: Date): DataPropsArg[][] => {
    const months = eachMonthOfInterval({
        start: startOfYear(date),
        end: endOfYear(date)
    }).map((_date) => ({
        original: _date,
        format: format(_date, CALENDAR_CELL_MONTH_FORMAT),
        display: format(_date, 'MMM')
    }))
    return groupArr(months)
}

export const getYearsInDecadeMatrixMode = (date: Date): DataPropsArg[][] => {
    const startYear = Math.floor(getYear(date) / 10) * 10 - 1
    const years = Array(20)
        .fill(20)
        .map((_, i) => {
            const d = startOfYear(setYear(date, startYear + i))
            const fmt = format(d, CALENDAR_CELL_YEAR_FORMAT)
            return {
                original: d,
                format: fmt,
                display: fmt
            }
        })
    return groupArr(years)
}

export const getDecadeModeTitle = (date: Date): string => {
    const startYear = Math.floor(getYear(date) / 10) * 10 - 1
    return `${startYear} - ${startYear + 20}`
}

export const roundTen = (x: number): number => Math.floor(x / 10) * 10

export const getDifferenceByMode = (mode: CalendarTypes.Mode): Record<string, number> => {
    if (mode === 'MONTH') return { months: 1 }
    if (mode === 'YEAR') return { years: 1 }
    if (mode === 'DECADE') return { years: 20 }
    return { days: 0 }
}

export const addDateByMode = (date: Date, mode: CalendarTypes.Mode): Date => {
    switch (mode) {
        case 'MONTH':
            return addMonths(date, 1)
        case 'YEAR':
            return addYears(date, 1)
        case 'DECADE':
            return addYears(date, 10)
        default:
            return new Date(date.valueOf())
    }
}

export const subDateByMode = (date: Date, mode: CalendarTypes.Mode): Date => {
    switch (mode) {
        case 'MONTH':
            return subMonths(date, 1)
        case 'YEAR':
            return subYears(date, 1)
        case 'DECADE':
            return subYears(date, 10)
        default:
            return new Date(date.valueOf())
    }
}

const nextModeMap: Record<CalendarTypes.Mode, string> = {
    MONTH: 'YEAR',
    YEAR: 'DECADE',
    DECADE: 'MONTH'
}

export const getNextMode = (mode: CalendarTypes.Mode): CalendarTypes.Mode => nextModeMap[mode] as CalendarTypes.Mode

export const formatTimeTo24Hours = (hour: string, minute: string, apm: CalendarTypes.APM): string => {
    let hours: string = `${parseInt(hour, 10) < 10 ? hour.toString().padStart(2, '0') : hour}`
    const minutes = parseInt(minute, 10) < 10 ? minute.toString().padStart(2, '0') : minute
    if (parseInt(hours, 10) === 12) {
        hours = '00'
    }

    if (apm === 'PM' && parseInt(hours, 10) <= 12) {
        hours = `${parseInt(hours, 10) + 12}`
    }
    return `${hours}:${minutes}:00`
}

export const formatDateTo24Hours = (date: string | Date, e: CalendarTypes.Time | null): string =>
    `${fnsFormat(date, 'yyyy-MM-dd')} ${formatTimeTo24Hours(e?.hour || '0', e?.minute || '0', e?.apm || 'AM')}`

export const groupArr = (data: Date[] | Record<string, any>[] = [], n: number = 4): any[][] => {
    const group: any = []
    for (let i = 0, end = data.length / n; i < end; ++i) {
        if (data.length > 0) group.push(data.slice(i * n, (i + 1) * n) as never)
    }
    return group
}
