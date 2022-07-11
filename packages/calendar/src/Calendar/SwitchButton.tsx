import * as React from 'react'
import { format } from 'date-fns'
import { CalendarTypes } from '../types'
import { getDecadeModeTitle } from '../utils'

export interface SwitchButtonPropArg {
    mode: CalendarTypes.Mode
    cursorDate: Date
    onClick: () => void
}

export const SwitchButton: React.FC<SwitchButtonPropArg> = ({ mode, cursorDate, onClick }) => (
    <div className="calendar-header-view">
        <button type="button" className="calendar-decade-select" onClick={onClick}>
            <span className="calendar-decade-text">
                {mode !== 'DECADE' ? format(cursorDate, mode === 'MONTH' ? 'LLL, yyyy' : 'yyyy') : getDecadeModeTitle(cursorDate)}
            </span>
        </button>
    </div>
)
