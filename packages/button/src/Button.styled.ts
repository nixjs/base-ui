import * as React from 'react'
import styled, { css } from 'styled-components'
import { StyledProps } from '@nixjs23n6/baseui-core'
import { ButtonTypes } from './types'
import { sizeOptions, variantOptions } from './constants'

interface StyledButtonProps {
    ref?: React.Ref<HTMLElement>
    as: React.ElementType
    variant: ButtonTypes.ButtonVariant
    size?: ButtonTypes.ButtonSize
    className?: string
    disabled?: boolean
    autoWidth?: boolean
    minWidth?: string
    width?: string
    noContent?: boolean
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
        const paddingLeft = props.noContent ? '0' : buttonStyled.paddingLeft
        const paddingRight = props.noContent ? '0' : buttonStyled.paddingRight
        return css`
            --base-button-padding-left: ${paddingLeft};
            --base-button-padding-right: ${paddingRight};
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
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    height: var(--base-button-height);
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
    .button {
        &-text {
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: var(--base-button-text-z-index, 200);
        }
        &-icon {
            &--start,
            &--end {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                color: inherit;
                z-index: var(--base-button-icon-start-z-index, 100);
            }
            &--start {
                left: var(--base-button-icon-start-left, 0.875rem);
            }
            &--end {
                right: var(--base-button-icon-start-right, 0.875rem);
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
        if (props.autoWidth) {
            return css`
                --base-button-min-width: min-content;
            `
        }
    }}

    ${(props: any) => {
        if (props.disabled) {
            return css`
                cursor: not-allowed;
                opacity: 0.5;
            `
        }
    }} 
    
    ${(props: any) => {
        if (props.width) {
            return css`
                --base-button-width: ${props.width};
            `
        }
    }}
    
    ${(props: any) => {
        if (props.minWidth) {
            return css`
                --base-button-min-width: ${props.minWidth};
            `
        }
    }}

    ${(props: any) => {
        if (props.noContent) {
            return css`
                --base-button-min-width: min-content;
                height: var(--base-button-height);
                width: var(--base-button-height);
                .button {
                    &-loading {
                        &--start,
                        &--end {
                            .loading {
                                &-spinner {
                                    margin: 0;
                                }
                            }
                        }
                    }
                }
            `
        }
    }}

    ${(props: any) => {
        return css`
            ${props?.overrideStyled || ''}
        `
    }}
`
