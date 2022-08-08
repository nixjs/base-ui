import styled, { css } from 'styled-components'
import { StyledProps } from '@nixjs23n6/baseui-core'
import { InputTypes } from './types'
import { sizeOptions } from './constants'

interface StyledInputProp {
    prefixContainerClass: string
    size: InputTypes.InputSize
}

const InputSizeStyled = (props: any) => {
    if (props.size && (sizeOptions[props.size as InputTypes.InputSize] as InputTypes.InputCss)) {
        const inputStyled = sizeOptions[props.size as InputTypes.InputSize]
        return css`
            --base-input-content-input-height: ${inputStyled.height};
            --base-input-content-input-size-multiplier: ${inputStyled.fontSizeMultiplier};
        `
    }
    return ''
}

export const InputStyled = styled.div<StyledInputProp & StyledProps>`
    ${({ prefixContainerClass }) => {
        return css`
            .${prefixContainerClass} {
                width: 100%;
                background: var(--base-input-background-color, var(--base-background-contrast));
                border-width: var(--base-input-border-width, 0.0625rem);
                border-color: var(--base-input-border-color, var(--base-color-dark-1));
                border-style: var(--base-input-border-style, solid);
                border-radius: var(--base-input-radius, 0.5rem);
                padding-top: var(--base-input-padding-y, 0);
                padding-right: var(--base-input-padding-x, 0.5rem);
                padding-bottom: var(--base-input-padding-y, 0);
                padding-left: var(--base-input-padding-x, 0.5rem);
                user-select: none;
                display: flex;
                &-addon {
                    display: flex;
                    align-items: center;
                }
                &-prefix {
                    margin-right: var(--base-input-margin-right, 0.25rem);
                }
                &-suffix {
                    margin-left: var(--base-input-margin-left, 0.25rem);
                }
                &-content {
                    display: flex;
                    flex: 1;
                }
                &-content-input {
                    padding: 0;
                    color: var(--base-input-content-input-color, var(--base-white));
                    background-color: transparent;
                    border: none;
                    outline: none;
                    width: 100%;
                    height: var(--base-input-content-input-height);
                    font-weight: var(--base-input-content-input-weight);
                    font-size: calc(1rem * var(--base-input-content-input-size-multiplier));
                }
                &--readonly,
                &--disabled {
                    cursor: not-allowed;
                    opacity: var(--base-input-disabled-opacity, 0.5);
                    input {
                        cursor: not-allowed;
                    }
                }
            }
        `
    }}
    ${InputSizeStyled}
    ${(props: any) => {
        return css`
            ${props?.overrideStyled || ''}
        `
    }}
`
