import styled, { css } from 'styled-components'
import { StyledProps } from '@nixjs23n6/baseui-core'

export const TimePickerBaseStyled = css`
    .time-picker {
        display: inline-block;
        &-container {
            display: flex;
            align-items: center;
        }
        &-group {
            display: inline-flex;
            justify-content: center;
            flex-direction: column;
        }
        &-diff {
            margin-left: var(--time-picker-button-margin-left, 0.5rem);
            margin-right: var(--time-picker-button-margin-right, 0.5rem);
        }
        &-up,
        &-down {
            cursor: pointer;
            height: var(--time-picker-button-height, 1.5rem);
            width: var(--time-picker-button-width, 100%);
            border-width: var(--time-picker-button-border-style, 0);
            border-style: var(--time-picker-button-border-style, solid);
            border-color: var(--time-picker-button-border-color, var(--base-color-secondary));
            border-radius: var(--time-picker-button-radius, 0.25rem);
            background-color: var(--time-picker-button-background-color, transparent);
            background-position: center;
            background-repeat: no-repeat;
            font-size: var(--time-picker-button-size, var(--base-font-size-base));
            position: relative;
            margin: 0 auto;
            overflow: hidden;

            &::before,
            &::before {
                content: '';
                transform: rotate(180deg);
                transition: transform var(--base-transition-fast) linear;
                background-image: var(--time-picker-button-background-image, var(--base-arrow-background-image));
                background-position: var(--time-picker-button-background-position, center);
                background-repeat: var(--time-picker-button-background-repeat, no-repeat);
                inset: 0;
                position: absolute;
            }
            &--disabled {
                cursor: default;
            }
        }

        &-up {
            &::before {
                transform: var(--time-picker-button-up-rotate, rotate(0deg));
            }
        }
        &-down {
            &::before {
                transform: var(--time-picker-button-down-rotate, rotate(180deg));
            }
        }
        &-input {
            margin: 0;
            background-color: transparent;
            border-width: var(--time-picker-input-border-width, 1px);
            border-style: var(--time-picker-input-border-style, solid);
            border-color: var(--time-picker-input-border-color, var(--base-color-secondary));
            border-radius: var(--time-picker-input-radius, 0.25rem);
            font-size: var(--time-picker-input-font-size, 0.875rem);
            padding-left: var(--time-picker-input-spacing-left, 0.75rem);
            padding-right: var(--time-picker-input-spacing-right, 0.75rem);
            min-height: var(--time-picker-input-min-height, 2rem);
            font-weight: var(--time-picker-input-font-weight, 400);
            line-height: var(--time-picker-input-line-height, var(--base-line-height));
            width: var(--time-picker-input-width, 3rem);
            max-width: var(--time-picker-input-max-width, auto);
            color: var(--time-picker-input-color, var(--base-font-color));
            display: var(--time-picker-input-display, block);
            margin-top: var(--time-picker-input-margin-top, 0.5rem);
            margin-bottom: var(--time-picker-input-margin-bottom, 0.5rem);
            text-align: center;
            outline: 0;
            box-sizing: border-box;
            &:hover {
                border-width: var(--time-picker-button-hover-border-width, 1px);
                border-style: var(--time-picker-button-hover-border-style, solid);
                border-color: var(--time-picker-button-hover-border-color, var(--base-color-secondary));
            }
        }
    }
`

export const TimePickerStyled = styled.div<StyledProps>`
    ${TimePickerBaseStyled}
    ${(props: any) => {
        return css`
            ${props?.overrideStyled || ''}
        `
    }}
`
