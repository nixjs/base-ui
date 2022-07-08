import * as React from 'react'
import styled, { css } from 'styled-components'
import { StyledProps } from '@nixjs23n6/baseui-core'
import { ButtonTypes } from './types'
import { sizeOptions, variantOptions } from './constants'

interface StyledButtonProps {
    ref?: React.Ref<HTMLElement>
    as?: React.ElementType
    variant: ButtonTypes.ButtonVariant
    size?: ButtonTypes.ButtonSize
    className?: string
    disabled?: boolean
    autoWidth?: boolean
    outline?: boolean
    onClick: () => void
    [name: string]: any
}

const ButtonVariantStyled = ({ variant, outline }: { variant: ButtonTypes.ButtonVariant; outline?: boolean }) => {
    return (
        variant &&
        variantOptions[variant] &&
        css`
            background: ${!outline ? variantOptions[variant].backgroundColor : 'transparent'};
            color: ${variantOptions[variant].color};
            border-color: ${variantOptions[variant].borderColor};
            &:hover {
                background: ${variantOptions[variant].backgroundColorHover};
                color: ${variantOptions[variant].colorHover};
                border-color: ${variantOptions[variant].borderColorHover};
            }
            &:active {
                background: ${variantOptions[variant].backgroundColorActive};
                color: ${variantOptions[variant].colorActive};
                border-color: ${variantOptions[variant].borderColorActive};
            }
        `
    )
}
const ButtonSizeStyled = (props: any) => {
    if (props.size && (sizeOptions[props.size as ButtonTypes.ButtonSize] as ButtonTypes.ButtonCss)) {
        const buttonStyled = sizeOptions[props.size as ButtonTypes.ButtonSize]
        return css`
            --base-button-padding-left: ${buttonStyled.paddingLeft};
            --base-button-padding-right: ${buttonStyled.paddingRight};
            --base-button-min-width: ${buttonStyled.minWidth};
            --base-button-height: ${buttonStyled.height};
            --base-button-width: ${buttonStyled.width};
            --base-button-radius: ${buttonStyled.radius};
            --base-button-line-height: ${buttonStyled.lineHeight};
            --base-button-size-multiplier: ${buttonStyled.fontSizeMultiplier};
        `
    }
    return ''
}

const ButtonCommonStyled = ({ variant }: { variant: ButtonTypes.ButtonVariant }) => {
    if (variant !== 'link')
        return css`
            border-style: solid;
            border-width: var(--base-button-border-width);
        `
    return ''
}

export const ButtonStyled = styled.div<StyledButtonProps & StyledProps>`
    --base-button-color: var(--base-font-color);
    text-align: center;
    transition-duration: var(--base-button-transition-duration);
    transition-property: color, background, border-color;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    height: var(--base-button--height);
    line-height: var(--base-button-line-height);
    width: var(--base-button-width);
    min-width: var(--base-button-min-width);
    font-size: calc(1rem * var(--base-button-size-multiplier));
    border-radius: var(--base-button-radius, 0);
    font-weight: var(--base-button-font-weight);
    padding-left: var(--base-button-padding-left);
    padding-right: var(--base-button-padding-right);
    ${ButtonCommonStyled}
    ${ButtonVariantStyled}
    ${ButtonSizeStyled}
    ${(props: any) => {
        if (props.autoWidth) {
            return css`
                --base-button-min-width: min-content;
            `
        }
    }}
    .button {
        &-icon {
            &--start {
                margin-right: var(--base-button-icon-spacing);
                display: var(--base-button-icon-display, inline-flex);
            }
            &--end {
                margin-left: var(--base-button-icon-spacing);
                display: var(--base-button-icon-display, inline-flex);
            }
        }
        &-loading {
            * {
                vertical-align: middle;
            }
            .loading {
                display: inline-flex;
                align-items: center;
            }
            &--start {
                .loading {
                    &-spinner {
                        margin-right: var(--button-loading-spacing-right, 0.5rem);
                    }
                }
            }
            &--end {
                .loading {
                    &-spinner {
                        margin-left: var(--button-loading-spacing-left, 0.5rem);
                        order: 1;
                    }
                }
            }
        }
    }

    ${(props: any) => {
        if (props.disabled) {
            return css`
                cursor: not-allowed;
                opacity: 0.5;
            `
        }
        return css`
            ${props?.overrideStyled || ''}
        `
    }}
`
