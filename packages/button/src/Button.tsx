import React from 'react'
import classNames from 'classnames'
import { StyledProps, Utils } from '@nixjs23n6/baseui-core'
import { ButtonTypes } from './types'
import { ButtonLoading } from './ButtonLoading'
import { ButtonStyled } from './Button.styled'

export interface ButtonPropArg extends StyledProps {
    children?: React.ReactNode
    variant?: ButtonTypes.ButtonVariant
    size?: ButtonTypes.ButtonSize
    icon?: React.ReactNode
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    type?: 'submit' | 'button'
    isLoading?: boolean
    loadingText?: string
    spinnerLoading?: React.ReactNode
    spinnerPlacement?: 'center' | 'ltr' | 'rtl'
    className?: string
    disabled?: boolean
    autoWidth?: boolean
    minWidth?: string
    width?: string
    outline?: boolean
    as?: React.ElementType
    href?: string
    onClick?: () => void
    [name: string]: any
}

const DEFAULT_BUTTON_TAG = 'button' as const

export const Button: React.FC<ButtonPropArg> = React.forwardRef<HTMLButtonElement, ButtonPropArg>(
    (props: ButtonPropArg, ref: React.Ref<HTMLButtonElement | null>) => {
        const {
            children,
            variant = 'primary',
            size = 'md',
            autoWidth = false,
            minWidth,
            outline = false,
            width,
            icon,
            startIcon,
            endIcon,
            isLoading,
            spinnerLoading,
            loadingText = '',
            spinnerPlacement,
            overrideStyled,
            className,
            disabled,
            as: Tag = DEFAULT_BUTTON_TAG,
            onClick
        } = props
        const ourProps = Utils.omit(props, ['className', 'size', 'outline', 'autoWidth', 'width', 'minWidth'])

        const renderContent = React.useMemo(() => {
            if (!isLoading) {
                return (
                    <>
                        {icon && <span className="d-flex button-icon button-icon">{icon}</span>}
                        {startIcon && <span className="button-icon button-icon--start">{startIcon}</span>}
                        {children && <span className="button-text">{children}</span>}
                        {endIcon && <span className="button-icon button-icon--end">{endIcon}</span>}
                    </>
                )
            }

            return (
                <ButtonLoading
                    className={classNames({
                        'button-loading--center': spinnerPlacement === 'center',
                        'button-loading--start': spinnerPlacement === 'ltr',
                        'button-loading--end': spinnerPlacement === 'rtl'
                    })}
                    loadingText={loadingText}
                    spinnerLoading={spinnerLoading}
                />
            )
        }, [children, endIcon, isLoading, loadingText, spinnerLoading, spinnerPlacement, startIcon])

        return (
            <ButtonStyled
                as={Tag as keyof JSX.IntrinsicElements}
                overrideStyled={overrideStyled}
                variant={variant}
                size={size}
                className={className}
                disabled={disabled}
                outline={outline}
                minWidth={minWidth}
                autoWidth={autoWidth}
                width={width}
                noContent={!children}
                onClick={onClick}
                ref={ref}
                {...ourProps}
            >
                {renderContent}
            </ButtonStyled>
        )
    }
)

Button.displayName = 'Button'
