import * as React from 'react'
import { CalendarTypes } from './types'
import { addDateByMode, subDateByMode, getNextMode } from './utils'

export const useMode = () => {
    const [mode, setMode] = React.useState<CalendarTypes.Mode>('MONTH')

    const onSwitchMode = React.useCallback(() => {
        setMode(getNextMode(mode))
    }, [setMode, mode])

    return {
        mode,
        setMode,
        onSwitchMode
    }
}

export const useCursorDate = ({ date, mode }: { date: Date; mode: CalendarTypes.Mode }) => {
    const [cursorDate, setCursorDate] = React.useState<Date>(date)

    const onSubCursorDate = React.useCallback(() => {
        setCursorDate(subDateByMode(cursorDate, mode))
    }, [setCursorDate, subDateByMode, cursorDate, mode])

    const onAddCursorDate = React.useCallback(() => {
        setCursorDate(addDateByMode(cursorDate, mode))
    }, [setCursorDate, addDateByMode, cursorDate, mode])

    return {
        cursorDate,
        setCursorDate,
        onSubCursorDate,
        onAddCursorDate
    }
}
