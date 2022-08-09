import React from 'react'
import classNames from 'classnames'
import { getCountdown } from './util'
import { CountdownTypes } from './types'
import { CountdownItem } from './CountdownItem'

export interface CountdownTimerPropArg {
    target: number
    showDay?: boolean
    showHour?: boolean
    showMinute?: boolean
    showSecond?: boolean
    showLabel?: boolean
    onComplete?: (status: CountdownTypes.Status) => void
    options?: CountdownTypes.CountdownTimerOptionals
}

export const Countdown: React.FC<CountdownTimerPropArg> = ({
    target,
    showDay = true,
    showHour = true,
    showMinute = true,
    showSecond = true,
    showLabel = true,
    onComplete,
    options = {
        day: 'day',
        hour: 'hour',
        minute: 'minute',
        second: 'second'
    }
}) => {
    const [time, setTime] = React.useState<CountdownTypes.CountdownTimeProp>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const timerRef = React.useRef(null as NodeJS.Timeout | null)

    React.useEffect(() => {
        if (target > 0) {
            const cur = new Date().getTime() / 1000
            if (target - cur <= 0 && typeof onComplete === 'function') onComplete('COMPLETED')
        }
    }, [time, target])

    React.useEffect(() => {
        if (target > 0) {
            timerRef.current = setInterval(() => {
                setTime(() => getCountdown(target))
            }, 1000)
        }
        return () => {
            timerRef.current && clearInterval(timerRef.current)
        }
    }, [target])

    return (
        <div className={classNames('countdown', options?.className)}>
            <CountdownItem className="countdown-col--day" value={time.days} label={options?.day} show={showDay} showLabel={showLabel} />
            <CountdownItem className="countdown-col--hour" value={time.hours} label={options?.hour} show={showHour} showLabel={showLabel} />
            <CountdownItem
                className="countdown-col--minute"
                value={time.minutes}
                label={options?.minute}
                show={showMinute}
                showLabel={showLabel}
            />
            <CountdownItem
                className="countdown-col--second"
                value={time.seconds}
                label={options?.second}
                show={showSecond}
                showLabel={showLabel}
            />
        </div>
    )
}

Countdown.displayName = 'Countdown'
