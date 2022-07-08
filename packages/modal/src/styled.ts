import styled, { css } from 'styled-components'
import { StyledProps } from '@nixjs23n6/baseui-core'

export const ModalStyled = styled.div<StyledProps>`
    --modal-background-color: #ffffff;
    --modal-max-width: 28rem;
    --modal-radius: 1rem;
    --modal-ring-offset-shadow: 0 0 transparent;
    --modal-ring-shadow: 0 0 transparent;
    --modal-shadow: 0 1.25rem 1.5625rem -0.3125rem rgba(0, 0, 0, 0.1), 0 0.625rem 0.625rem -0.3125rem rgba(0, 0, 0, 0.04);
    --modal--transform: translateX(var(--modal--translate-x)) translateY(var(--modal--translate-y)) rotate(var(--modal--rotate))
        skewX(var(--modal--skew-x)) skewY(var(--modal--skew-y)) scaleX(var(--modal--scale-x)) scaleY(var(--modal--scale-y));
    --modal--translate-x: 0;
    --modal--translate-y: 0;
    --modal--rotate: 0;
    --modal--skew-x: 0;
    --modal--skew-y: 0;
    --modal--scale-x: 1;
    --modal--scale-y: 1;
    --modal-content-padding-top: 1rem;
    --modal-content-padding-bottom: 1rem;
    --modal-content-padding-left: 1rem;
    --modal-content-padding-right: 1rem;
    --modal-content-margin-top: 2rem;
    --modal-content-margin-right: 2rem;
    --modal-content-margin-bottom: 2rem;
    --modal-content-margin-left: 2rem;
    --modal-button-close-top: 0.25rem;
    --modal-button-close-right: 0.25rem;
    .modal {
        &-btn-close {
            width: 2.5rem;
            height: 2.5rem;
            position: absolute;
            background: transparent;
            border: none;
            top: var(--modal-button-close-top);
            right: var(--modal-button-close-right);
            margin: 0;
            display: inline-flex;
            align-items: center;
            cursor: pointer;
            box-sizing: border-box;
            svg {
                g {
                    stroke: var(--modal-button-color, #6b7280);
                }
            }
        }
        &-container {
            position: fixed;
            inset: 0;
            z-index: 1055;
            width: 100%;
            height: 100%;
            overflow-x: hidden;
            overflow-y: auto;
            outline: 0;
        }
        &-overlay {
            display: none;
            position: fixed;
            inset: 0;
            background-color: var(--modal-background-color-overlay, rgba(0, 0, 0, 0.2));
        }
        &.inactive {
            display: none;
        }
        &.active {
            .modal {
                &-overlay {
                    display: block;
                }
            }
        }
        &-dialog {
            min-height: 100vh;
            padding-left: 1rem;
            padding-right: 1rem;
            text-align: center;
        }
        &-center {
            vertical-align: middle;
            height: 100vh;
            display: inline-block;
        }
        &-content {
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 0.15s;
            transform: var(--modal--transform);
            margin: var(--modal-content-margin-top) var(--modal-content-margin-right) var(--modal-content-margin-bottom)
                var(--modal-content-margin-left);
            padding: var(--modal-content-padding-top) var(--modal-content-padding-right) var(--modal-content-padding-bottom)
                var(--modal-content-padding-left);
            background: var(--modal-background-color);
            max-width: var(--modal-max-width);
            box-shadow: var(--modal-ring-offset-shadow, 0 0 transparent), var(--modal-ring-shadow, 0 0 transparent), var(--modal-shadow);
            border-radius: var(--modal-radius);
            width: 100%;
            vertical-align: middle;
            display: inline-block;
            overflow: hidden;
            text-align: left;
        }
    }

    ${(props: any) => {
        return css`
            ${props?.overrideStyled || ''}
        `
    }}
`
