import React from 'react'
import { startOfDay, format as fnsFormat, parseISO, isValid, parse } from 'date-fns'
import { StyledProps } from '@nixjs23n6/baseui-core'
import { SwitchButton } from './SwitchButton'
import { DateDisplay } from './DateDisplay'
import { Footer } from './Footer'
import { BaseTimePicker } from '../TimePicker'
import { useMode, useCursorDate } from '../hooks'
import { formatDateTo24Hours } from '../utils'
import { CalendarTypes } from '../types'
import { DATE_TIME_ORIGINAL } from '../constants'
import { CalendarStyled } from './styled'

export interface CalendarPropArg {
    date: Date | null
    minDate?: Date
    maxDate?: Date
    onChange?: (date: Date) => void
    onDone?: (date: Date | null) => void
    onClear?: (date: Date | null) => void
    prevIcon?: React.ReactNode
    nextIcon?: React.ReactNode
    showTime?: boolean
    hour12?: boolean
    clearText?: string
    doneText?: string
}

export const BaseCalendar: React.FC<CalendarPropArg> = ({
    date,
    minDate,
    maxDate,
    onChange,
    onDone,
    onClear,
    prevIcon,
    nextIcon,
    showTime = false,
    hour12,
    clearText = 'Clear',
    doneText = 'Done'
}) => {
    const today = startOfDay(new Date())
    const { mode, setMode, onSwitchMode } = useMode()
    const { cursorDate, setCursorDate, onSubCursorDate, onAddCursorDate } = useCursorDate({ date: date ? new Date(date) : today, mode })
    const [selectedTime, setSelectedTime] = React.useState<CalendarTypes.Time>({
        hour: fnsFormat(date || today, hour12 ? 'hh' : 'HH'),
        minute: fnsFormat(date || today, 'mm'),
        apm: fnsFormat(date || today, 'a') as CalendarTypes.APM
    })
    const [selectedDate, setSelectedDate] = React.useState<Date>(date || today)

    const handleDateChange = (e: Date) => {
        const _date = formatDateTo24Hours(fnsFormat(new Date(e), DATE_TIME_ORIGINAL), selectedTime)
        if (typeof onChange === 'function') {
            onChange(parse(_date, DATE_TIME_ORIGINAL, new Date()))
        }
    }

    const handleTimePickerChange = (e: CalendarTypes.Time) => {
        if (selectedDate && isValid(selectedDate)) {
            setSelectedTime(e)
            const d = formatDateTo24Hours(fnsFormat(new Date(selectedDate), DATE_TIME_ORIGINAL), e)
            if (typeof onChange === 'function') {
                onChange(parse(d, DATE_TIME_ORIGINAL, new Date()))
            }
        }
    }

    const handleClear = () => {
        if (typeof onDone === 'function') {
            onDone(null)
        }
        if (typeof onClear === 'function') {
            onClear(null)
        }
    }

    const handleSubmit = () => {
        if (typeof onDone === 'function' && showTime) {
            if (!selectedDate) {
                onDone(null)
            }
            const _date = formatDateTo24Hours(fnsFormat(selectedDate as Date, DATE_TIME_ORIGINAL), selectedTime)
            onDone(parseISO(_date))
        }
    }

    return (
        <div className="calendar">
            <div className="calendar-panel-container">
                <div className="calendar-panel">
                    <div className="calendar-header">
                        <SwitchButton cursorDate={cursorDate} mode={mode} onClick={onSwitchMode} />
                        <div className="calendar-btn">
                            <button className="calendar-prev" type="button" onClick={onSubCursorDate}>
                                {prevIcon}
                            </button>
                            <button className="calendar-next" type="button" onClick={onAddCursorDate}>
                                {nextIcon}
                            </button>
                        </div>
                    </div>
                    <DateDisplay
                        mode={mode}
                        minDate={minDate}
                        maxDate={maxDate}
                        setMode={setMode}
                        cursorDate={cursorDate}
                        setCursorDate={setCursorDate}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                        onSelect={handleDateChange}
                    />
                    {showTime && (
                        <div className="calendar-show-time">
                            <div className="calendar-show-time-hr" />
                            <BaseTimePicker
                                hh={selectedTime.hour}
                                mm={selectedTime.minute}
                                apm={selectedTime.apm}
                                hour12={hour12}
                                onChange={handleTimePickerChange}
                            />
                            <Footer clearText={clearText} doneText={doneText} onClear={handleClear} onDone={handleSubmit} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export const Calendar: React.FC<CalendarPropArg & StyledProps> = (props) => {
    return (
        <CalendarStyled overrideStyled={props.overrideStyled}>
            <BaseCalendar {...props} />
        </CalendarStyled>
    )
}
