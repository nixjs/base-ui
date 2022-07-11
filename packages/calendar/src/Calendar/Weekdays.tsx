import * as React from 'react'
import { getWeekdays } from '../utils'

export interface WeekdaysPropArg {}

export const Weekdays: React.FC<WeekdaysPropArg> = () => {
    return (
        <div className="calendar-weekday">
            <div className="calendar-row">
                {getWeekdays({ fmt: 'EEE' }).map((weekDay, i) => (
                    <div key={i} className="calendar-cell calendar-cell-weekdays" aria-hidden="true">
                        <span className="calendar-cell-content">{weekDay}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
