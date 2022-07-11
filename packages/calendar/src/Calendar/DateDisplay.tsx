import React from 'react'
import classNames from 'classnames'
import { getMonth, getYear, isAfter, isBefore, isValid } from 'date-fns'
import { Weekdays } from './Weekdays'
import { CalendarTypes } from '../types'
import { fnsFormat, getMonthsInYearMatrixMode, getYearsInDecadeMatrixMode, roundTen, getDaysInMonthMatrixMode } from '../utils'
import { CALENDAR_CELL_DATE_FORMAT, CALENDAR_CELL_MONTH_FORMAT, CALENDAR_CELL_YEAR_FORMAT } from '../constants'

export interface DateDisplayPropArg {
    mode: CalendarTypes.Mode
    setMode: (mode: CalendarTypes.Mode) => void

    minDate?: Date
    maxDate?: Date

    cursorDate: Date
    setCursorDate: (date: Date) => void

    selectedDate: Date
    setSelectedDate: (date: Date) => void
    onSelect: (date: Date) => void
}

export const DateDisplay: React.FC<DateDisplayPropArg> = ({
    mode,
    setMode,
    minDate,
    maxDate,
    cursorDate,
    setCursorDate,
    selectedDate,
    setSelectedDate,
    onSelect
}) => {
    const mCursorDate = getMonth(cursorDate)

    const dateSelected = fnsFormat(selectedDate, CALENDAR_CELL_DATE_FORMAT)
    const monthSelected = fnsFormat(selectedDate, CALENDAR_CELL_MONTH_FORMAT)
    const yearSelected = fnsFormat(selectedDate, CALENDAR_CELL_YEAR_FORMAT)

    return (
        <div className="calendar-body">
            {mode === 'MONTH' && <Weekdays />}
            <div
                className={classNames('calendar-inner', {
                    'month-content': mode === 'MONTH'
                })}
            >
                <div className="calendar-table">
                    {mode === 'MONTH' &&
                        getDaysInMonthMatrixMode(cursorDate).map((row, rowIdx: number) => {
                            return (
                                <div className="calendar-row" key={rowIdx}>
                                    {row.map((cell, cellIdx: number) => {
                                        const yDate = getYear(cell.original)
                                        const mDate = getMonth(cell.original)
                                        const isOffRange = mDate !== mCursorDate
                                        let isOffRangeStart = false
                                        let isOffRangeEnd = false

                                        if (minDate && isValid(minDate)) {
                                            isOffRangeStart = yDate < getYear(minDate) || isBefore(cell.original, minDate)
                                        }
                                        if (maxDate && isValid(maxDate)) {
                                            isOffRangeEnd = yDate > getYear(maxDate) || isAfter(cell.original, maxDate)
                                        }
                                        return (
                                            <div
                                                key={cellIdx}
                                                className={classNames('calendar-cell calendar-cell-date', {
                                                    'calendar-cell-date-selected': cell.format === dateSelected,
                                                    'calendar-cell-date-offrange': cell.isSameDay || isOffRangeStart || isOffRangeEnd,
                                                    'calendar-cell-date-today': cell.isToday
                                                })}
                                                aria-hidden="true"
                                                onClick={() => {
                                                    // off range
                                                    if (cell.isSameDay || isOffRange || isOffRangeStart || isOffRangeEnd) {
                                                        return
                                                    }
                                                    setSelectedDate(cell.original)
                                                    if (onSelect) onSelect(cell.original)
                                                }}
                                            >
                                                <span className="calendar-cell-content calendar-cell-date-content">{cell.display}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    {mode === 'YEAR' &&
                        getMonthsInYearMatrixMode(cursorDate).map((row, rowIdx) => {
                            return (
                                <div className="calendar-row" key={rowIdx}>
                                    {row.map((cell, cellIdx: number) => {
                                        return (
                                            <div
                                                className={classNames('calendar-cell calendar-cell-month', {
                                                    'calendar-cell-month-selected': cell.format === monthSelected
                                                })}
                                                aria-hidden="true"
                                                key={cellIdx}
                                                onClick={() => {
                                                    setCursorDate(cell.original)
                                                    setMode('MONTH')
                                                }}
                                            >
                                                <span className="calendar-cell-content calendar-cell-month-content">{cell.display}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    {mode === 'DECADE' &&
                        getYearsInDecadeMatrixMode(cursorDate).map((row, rowIdx) => {
                            return (
                                <div className="calendar-row" key={rowIdx}>
                                    {row.map((cell, cellIdx: number) => {
                                        const isOffRange =
                                            getYear(cell.original) < roundTen(getYear(cursorDate)) ||
                                            getYear(cell.original) > roundTen(getYear(cursorDate)) + 20
                                        return (
                                            <div
                                                className={classNames('calendar-cell calendar-cell-decade', {
                                                    'calendar-cell-decade-selected': cell.format === yearSelected,
                                                    'calendar-cell-decade-offrange': isOffRange
                                                })}
                                                aria-hidden="true"
                                                key={cellIdx}
                                                onClick={() => {
                                                    // off range
                                                    if (isOffRange) {
                                                        return
                                                    }
                                                    setCursorDate(cell.original)
                                                    setMode('YEAR')
                                                }}
                                            >
                                                <span className="calendar-cell-content calendar-cell-decade-content">{cell.display}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}
