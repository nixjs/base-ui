import React from 'react'
import { StyledProps, Utils, Refs } from '@nixjs23n6/baseui-core'
import { useUpdateEffect } from '@nixjs23n6/baseui-hook'
import classNames from 'classnames'
import { InputTypes } from './types'
import { getRangeValue, fixControlledValue } from './utils'
import { InputStyled } from './styled'

interface InputPropArg extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string
    name?: string
    placeholder?: string
    disabled?: boolean
    inputSize?: InputTypes.InputSize
    value?: string
    classNameWrapper?: string
    className?: string
    prefixContainerClass?: string
    inputClass?: string
    inputContentClass?: string
    prefixClass?: string
    suffixClass?: string
    defaultValue?: string | number
    prefixHTML?: React.ReactNode
    suffixHTML?: React.ReactNode
    register?: any
    onChangeValue?: (e: InputTypes.InputValue) => void
    onInputBlur?: InputTypes.FocusEvent
    onInputFocus?: InputTypes.FocusEvent
}

export const Input = React.forwardRef<HTMLInputElement, InputPropArg & StyledProps>(({ id, type = 'text', ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const compositionRef = React.useRef<boolean>(false)
    const userTypingRef = React.useRef<boolean>(false)

    const [focus, setFocus] = React.useState<boolean>(false)
    const ourProps = Utils.omit(props, [
        'prefixContainerClass',
        'inputClass',
        'inputContentClass',
        'prefixHTML',
        'suffixHTML',
        'prefixClass',
        'suffixClass',
        'className',
        'classNameWrapper',
        'inputSize',
        'onChangeValue',
        'onInputValue',
        'onInputFocus',
        'onInputBlur',
        'register',
        'overrideStyled'
    ])

    const {
        prefixContainerClass = 'input',
        inputClass,
        inputContentClass,
        prefixClass,
        suffixClass,
        prefixHTML,
        suffixHTML,
        readOnly = false,
        disabled = false,
        inputSize = 'md',
        defaultValue,
        placeholder = 'Input the value',
        value,
        className,
        classNameWrapper,
        maxLength,
        onChangeValue,
        onInputBlur,
        onInputFocus,
        register,
        overrideStyled
    } = props

    const [inputValue, setInternalInputValue] = React.useState<string | number>(() => {
        const initValue = defaultValue ?? value
        return fixControlledValue(initValue)
    })

    // Input by value
    useUpdateEffect(() => {
        if (value) {
            setInternalInputValue(value)
        }
    }, [value])

    const collectInputValue = (_value: string) => {
        onChangeValue?.({
            value: _value,
            target: { id, name: props.name }
        })
    }

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const {
            target: { value: _v }
        } = e
        let updateValue = fixControlledValue(_v)
        // Revert value in range if needed
        updateValue = getRangeValue(updateValue, maxLength) || updateValue
        if (!readOnly && !disabled) {
            setInternalInputValue(updateValue)
            collectInputValue(updateValue)
        }
    }

    const handleFocus: React.FocusEventHandler<HTMLDivElement> = (e) => {
        inputRef.current?.focus()
        setFocus(true)
        onInputFocus?.(inputRef, e)
    }

    const handleBlur: React.FocusEventHandler<HTMLDivElement> = (e) => {
        setFocus(false)
        onInputBlur?.(inputRef, e)
        userTypingRef.current = false
    }

    const handleKeyDown = () => {
        userTypingRef.current = true
    }

    // >>> Composition
    const handleCompositionStart = () => {
        compositionRef.current = true
    }

    const handleCompositionEnd = () => {
        compositionRef.current = false
        inputRef.current && collectInputValue(inputRef.current.value)
    }

    return (
        <InputStyled
            className={classNameWrapper}
            overrideStyled={overrideStyled}
            prefixContainerClass={prefixContainerClass}
            size={inputSize}
        >
            <div
                className={classNames(prefixContainerClass, `${prefixContainerClass}--${type}`, className, {
                    [`${prefixContainerClass}--readonly`]: readOnly,
                    [`${prefixContainerClass}--disabled`]: disabled,
                    [`${prefixContainerClass}--focused`]: focus
                })}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onCompositionStart={handleCompositionStart}
                onCompositionEnd={handleCompositionEnd}
                role="button"
                tabIndex={-1}
            >
                {prefixHTML && (
                    <div className={classNames(`${prefixContainerClass}-addon ${prefixContainerClass}-prefix`, prefixClass)}>
                        {prefixHTML}
                    </div>
                )}
                <div className={classNames(`${prefixContainerClass}-content`, inputContentClass)}>
                    <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        {...ourProps}
                        {...register}
                        ref={Refs.composeRef(inputRef, ref)}
                        value={inputValue}
                        onChange={handleInputChange}
                        className={classNames(`${prefixContainerClass}-content-input`, inputClass)}
                    />
                </div>
                {suffixHTML && (
                    <div className={classNames(`${prefixContainerClass}-addon ${prefixContainerClass}-suffix`, suffixClass)}>
                        {suffixHTML}
                    </div>
                )}
            </div>
        </InputStyled>
    )
})

Input.displayName = 'Input'
