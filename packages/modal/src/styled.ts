import styled, { css } from 'styled-components'
import { StyledProps } from '@nixjs23n6/baseui-core'

export const ModalStyled = styled.div<StyledProps>`
    --base-modal-background-color: var(--base-color-white);
    --base-modal-max-width: 28rem;
    --base-modal-radius: 1rem;
    --base-modal-ring-offset-shadow: 0 0 transparent;
    --base-modal-ring-shadow: 0 0 transparent;
    --base-modal-shadow: 0 1.25rem 1.5625rem -0.3125rem rgba(0, 0, 0, 0.1), 0 0.625rem 0.625rem -0.3125rem rgba(0, 0, 0, 0.04);
    --base-modal--transform: translateX(var(--base-modal--translate-x)) translateY(var(--base-modal--translate-y))
        rotate(var(--base-modal--rotate)) skewX(var(--base-modal--skew-x)) skewY(var(--base-modal--skew-y))
        scaleX(var(--base-modal--scale-x)) scaleY(var(--base-modal--scale-y));
    --base-modal--translate-x: 0;
    --base-modal--translate-y: 0;
    --base-modal--rotate: 0;
    --base-modal--skew-x: 0;
    --base-modal--skew-y: 0;
    --base-modal--scale-x: 1;
    --base-modal--scale-y: 1;
    --base-modal-content-padding-top: 1rem;
    --base-modal-content-padding-bottom: 1rem;
    --base-modal-content-padding-left: 1rem;
    --base-modal-content-padding-right: 1rem;
    --base-modal-content-margin-top: 2rem;
    --base-modal-content-margin-right: 2rem;
    --base-modal-content-margin-bottom: 2rem;
    --base-modal-content-margin-left: 2rem;
    --base-modal-button-close-top: 0.25rem;
    --base-modal-button-close-right: 0.25rem;
    .modal {
        &-btn-close {
            width: 2.5rem;
            height: 2.5rem;
            position: absolute;
            background: transparent;
            border: none;
            top: var(--base-modal-button-close-top);
            right: var(--base-modal-button-close-right);
            margin: 0;
            display: inline-flex;
            align-items: center;
            cursor: pointer;
            box-sizing: border-box;
            svg {
                g {
                    stroke: var(--base-modal-button-color, #6b7280);
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
            background-color: var(--base-modal-background-color-overlay, rgba(0, 0, 0, 0.2));
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
            transform: var(--base-modal--transform);
            margin: var(--base-modal-content-margin-top) var(--base-modal-content-margin-right) var(--base-modal-content-margin-bottom)
                var(--base-modal-content-margin-left);
            padding: var(--base-modal-content-padding-top) var(--base-modal-content-padding-right) var(--base-modal-content-padding-bottom)
                var(--base-modal-content-padding-left);
            background: var(--base-modal-background-color);
            max-width: var(--base-modal-max-width);
            box-shadow: var(--base-modal-ring-offset-shadow, 0 0 transparent), var(--base-modal-ring-shadow, 0 0 transparent),
                var(--base-modal-shadow);
            border-radius: var(--base-modal-radius);
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
