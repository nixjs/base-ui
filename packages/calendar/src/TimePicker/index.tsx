import React from 'react'
import { StyledProps } from '@nixjs23n6/baseui-core'
import { useIsomorphicEffect } from '@nixjs23n6/baseui-hook'
import { TimeInput } from './Input'
import { CalendarTypes } from '../types'
import { TimePickerStyled } from './styled'

export interface TimePickerPropArg {
    onChange?: (e: CalendarTypes.Time) => void
    hh?: string | number
    mm?: string | number
    apm?: CalendarTypes.APM
    hour12?: boolean
}

export const BaseTimePicker: React.FC<TimePickerPropArg> = ({ hh, mm, apm, onChange, hour12 = true }) => {
    const [timeState, setTimeState] = React.useState<CalendarTypes.Time>({
        hour: '00',
        minute: '00',
        apm: 'AM'
    })

    useIsomorphicEffect(() => {
        setTimeState({
            hour: (hh || (hour12 ? 12 : 23)).toString().padStart(2, '0'),
            minute: (mm || 59).toString().padStart(2, '0'),
            apm: apm || 'AM'
        })
    }, [hh, mm, apm, hour12])

    const updateState = (prev: CalendarTypes.Time, next: CalendarTypes.Time) => {
        setTimeState((p) => ({
            ...p,
            ...next
        }))
        onChange &&
            onChange({
                ...prev,
                ...next
            })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value }
        } = e
        if ((name === 'hour' || name === 'minute') && value.length > 2) {
            return
        }
        setTimeState((p) => ({
            ...p,
            [name]: value
        }))
    }

    const handleUp = (type: 'hour' | 'minute') => {
        if (!type) return
        const min = type === 'hour' ? (hour12 ? 1 : 0) : 0
        const max = type === 'hour' ? (hour12 ? 12 : 23) : 59
        const value = parseInt(`${timeState[type]}`, 10)

        const newValue = value === max ? min : Math.min(value + 1, max)
        const data: CalendarTypes.Time = {
            [type]: newValue.toString().padStart(2, '0')
        }
        updateState(timeState, data)
    }

    const handleDown = (type: 'hour' | 'minute') => {
        if (!type) return
        const min = type === 'hour' ? (hour12 ? 1 : 0) : 0
        const max = type === 'hour' ? (hour12 ? 12 : 23) : 59
        const value = parseInt(`${timeState[type]}`, 10)

        const newValue = value === min ? max : Math.max(value - 1, min)
        const data: CalendarTypes.Time = {
            [type]: newValue.toString().padStart(2, '0')
        }
        updateState(timeState, data)
    }

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>, type: 'hour' | 'minute') => {
        const min = type === 'hour' ? (hour12 ? 1 : 0) : 0
        const max = type === 'hour' ? (hour12 ? 12 : 23) : 59
        let value = parseInt(e.target.value, 10)
        if (isNaN(value)) {
            value = hour12 ? (type === 'hour' ? 1 : 0) : 0
        }
        if (max < value) {
            value = max
        }
        if (min > value) {
            value = min
        }
        const data: CalendarTypes.Time = {
            [type]: value.toString().padStart(2, '0'),
            apm: type === 'hour' && parseInt(`${value}`, 10) > 12 ? 'PM' : 'AM'
        }
        updateState(timeState, data)
    }

    const handleApm = () => {
        const value = timeState.apm
        const data = value === 'AM' ? 'PM' : 'AM'
        setTimeState((prev) => ({ ...prev, apm: data }))
        updateState(timeState, { apm: data })
    }

    const handleApmBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value }
        } = e
        let _apm = value
        if (!_apm || !['AM', 'PM'].includes(value)) {
            _apm = 'AM'
        }
        setTimeState((prev) => ({ ...prev, apm: _apm as CalendarTypes.APM }))
        updateState(timeState, { apm: _apm as CalendarTypes.APM })
    }

    return (
        <div className="time-picker">
            <div className="time-picker-container">
                <TimeInput
                    onUp={() => handleUp('hour')}
                    onDown={() => handleDown('hour')}
                    onChange={handleChange}
                    onBlur={(e) => handleBlur(e, 'hour')}
                    value={timeState.hour || ''}
                    name="hour"
                />
                <div className="time-picker-diff">:</div>
                <TimeInput
                    onUp={() => handleUp('minute')}
                    onDown={() => handleDown('minute')}
                    onChange={handleChange}
                    onBlur={(e) => handleBlur(e, 'minute')}
                    value={timeState.minute || ''}
                    name="minute"
                />

                {hour12 && (
                    <>
                        <div className="time-picker-diff">:</div>
                        <TimeInput
                            onUp={handleApm}
                            onDown={handleApm}
                            onChange={handleChange}
                            onBlur={handleApmBlur}
                            value={timeState.apm || ''}
                            name="apm"
                        />
                    </>
                )}
            </div>
        </div>
    )
}

export const TimePicker: React.FC<TimePickerPropArg & StyledProps> = ({ hh, mm, apm, onChange, hour12 = true, overrideStyled }) => {
    return (
        <TimePickerStyled overrideStyled={overrideStyled}>
            <BaseTimePicker hh={hh} mm={mm} apm={apm} onChange={onChange} hour12={hour12} />
        </TimePickerStyled>
    )
}

BaseTimePicker.displayName = 'Calendar.TimeBase'
TimePicker.displayName = 'Calendar.Time'
