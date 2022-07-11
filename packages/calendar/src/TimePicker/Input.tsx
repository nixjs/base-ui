import * as React from 'react'
import classNames from 'classnames'

export interface TimeInputPropArg {
    onUp?: (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void
    onDown?: (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void
    onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>) => void
    value?: string | number
    disabled?: boolean
    placeholder?: string
    className?: string
    name: string
}

export const TimeInput: React.FC<TimeInputPropArg> = ({
    disabled,
    placeholder,
    onBlur,
    onChange,
    onFocus,
    onDown,
    onUp,
    value = 0,
    className,
    name
}) => {
    return (
        <div className={classNames('time-picker-group', className)}>
            <button type="button" className="time-picker-up" aria-label="Increase Value" onClick={onUp} onTouchEnd={onUp} />
            <input
                disabled={disabled}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                name={name}
                className="time-picker-input"
            />
            <button type="button" className="time-picker-down" aria-label="Decrease Value" onClick={onDown} onTouchEnd={onDown} />
        </div>
    )
}
