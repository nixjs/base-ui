import styled, { css } from 'styled-components'
import { StyledProps } from '@nixjs23n6/baseui-core'

export const TooltipStyled = styled.div<StyledProps>`
    .tooltip {
        --base-tooltip-zindex: 1070;
        --base-tooltip-max-width: 12.5rem;
        --base-tooltip-padding-x: 0.5rem;
        --base-tooltip-padding-y: 0.5rem;
        --base-tooltip-margin: 0;
        --base-tooltip-color: var(--base-white-4);
        --base-tooltip-background: var(--base-background-contrast);
        --base-tooltip-radius: 0.25rem;
        --base-tooltip-opacity: 0.9;
        --base-tooltip-arrow-width: 0.8rem;
        --base-tooltip-arrow-height: 0.4rem;

        z-index: var(--base-tooltip-zindex);
        display: block;
        word-wrap: break-word;
        opacity: 0;

        &.show {
            opacity: var(--base-tooltip-opacity);
        }

        &-arrow {
            display: block;
            width: var(--base-tooltip-arrow-width);
            height: var(--base-tooltip-arrow-height);
            &::before {
                position: absolute;
                content: '';
                border-color: transparent;
                border-style: solid;
            }
        }
    }

    .tooltip-top {
        .tooltip-arrow {
            bottom: var(--base-tooltip-arrow-top-bottom, -6px);
            &::before {
                top: -1px;
                border-width: var(--base-tooltip-arrow-height) calc(var(--base-tooltip-arrow-width) * 0.5) 0; // stylelint-disable-line function-disallowed-list
                border-top-color: var(--base-tooltip-background);
            }
        }
    }

    .tooltip-end {
        .tooltip-arrow {
            left: var(--base-tooltip-arrow-end-left, -6px);
            width: var(--base-tooltip-arrow-height);
            height: var(--base-tooltip-arrow-width);
            &::before {
                right: -1px;
                border-width: calc(var(--base-tooltip-arrow-width) * 0.5) var(--base-tooltip-arrow-height) calc(var(--base-tooltip-arrow-width) * 0.5) 0; // stylelint-disable-line function-disallowed-list
                border-right-color: var(--base-tooltip-background);
            }
        }
    }

    .tooltip-bottom {
        .tooltip-arrow {
            top: top: var(--base-tooltip-arrow-bottom-top, -6px);
            &::before {
                bottom: -1px;
                border-width: 0 calc(var(--base-tooltip-arrow-width) * 0.5) var(--base-tooltip-arrow-height); // stylelint-disable-line function-disallowed-list
                border-bottom-color: var(--base-tooltip-background);
            }
        }
    }

    .tooltip-start {
        .tooltip-arrow {
            right: var(--base-tooltip-arrow-start-right, -6px);
            width: var(--base-tooltip-arrow-height);
            height: var(--base-tooltip-arrow-width);
            &::before {
                left: -1px;
                border-width: calc(var(--base-tooltip-arrow-width) * 0.5) 0 calc(var(--base-tooltip-arrow-width) * 0.5) var(--base-tooltip-arrow-height); // stylelint-disable-line function-disallowed-list
                border-left-color: var(--base-tooltip-background);
            }
        }
    }

    .tooltip-auto {
        &[data-popper-placement^='top'] {
            @extend .tooltip-top;
        }
        &[data-popper-placement^='right'] {
            @extend .tooltip-end;
        }
        &[data-popper-placement^='bottom'] {
            @extend .tooltip-bottom;
        }
        &[data-popper-placement^='left'] {
            @extend .tooltip-start;
        }
    }

    .tooltip-inner {
        max-width: var(--base-tooltip-max-width);
        padding: var(--base-tooltip-padding-y) var(--base-tooltip-padding-x);
        color: var(--base-tooltip-color);
        text-align: center;
        background-color: var(--base-tooltip-background);
        border-radius: var(--base-tooltip-radius, 0);
    }

    ${(props: any) => {
        return css`
            ${props?.overrideStyled || ''}
        `
    }}
`
