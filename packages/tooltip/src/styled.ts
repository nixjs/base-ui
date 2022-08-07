import styled, { css } from 'styled-components'
import { StyledProps } from '@nixjs23n6/baseui-core'

export const TooltipStyled = styled.div<StyledProps>`
    .tooltip {
        --tooltip-zindex: 1070;
        --tooltip-max-width: 12.5rem;
        --tooltip-padding-x: 0.5rem;
        --tooltip-padding-y: 0.5rem;
        --tooltip-margin: 0;
        --tooltip-color: var(--base-white-4);
        --tooltip-background: var(--base-background-contrast);
        --tooltip-radius: 0.25rem;
        --tooltip-opacity: 0.9;
        --tooltip-arrow-width: 0.8rem;
        --tooltip-arrow-height: 0.4rem;

        z-index: var(--tooltip-zindex);
        display: block;
        word-wrap: break-word;
        opacity: 0;

        &.show {
            opacity: var(--tooltip-opacity);
        }

        &-arrow {
            display: block;
            width: var(--tooltip-arrow-width);
            height: var(--tooltip-arrow-height);
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
            bottom: var(--tooltip-arrow-top-bottom, -6px);
            &::before {
                top: -1px;
                border-width: var(--tooltip-arrow-height) calc(var(--tooltip-arrow-width) * 0.5) 0; // stylelint-disable-line function-disallowed-list
                border-top-color: var(--tooltip-background);
            }
        }
    }

    .tooltip-end {
        .tooltip-arrow {
            left: var(--tooltip-arrow-end-left, -6px);
            width: var(--tooltip-arrow-height);
            height: var(--tooltip-arrow-width);
            &::before {
                right: -1px;
                border-width: calc(var(--tooltip-arrow-width) * 0.5) var(--tooltip-arrow-height) calc(var(--tooltip-arrow-width) * 0.5) 0; // stylelint-disable-line function-disallowed-list
                border-right-color: var(--tooltip-background);
            }
        }
    }

    .tooltip-bottom {
        .tooltip-arrow {
            top: top: var(--tooltip-arrow-bottom-top, -6px);
            &::before {
                bottom: -1px;
                border-width: 0 calc(var(--tooltip-arrow-width) * 0.5) var(--tooltip-arrow-height); // stylelint-disable-line function-disallowed-list
                border-bottom-color: var(--tooltip-background);
            }
        }
    }

    .tooltip-start {
        .tooltip-arrow {
            right: var(--tooltip-arrow-start-right, -6px);
            width: var(--tooltip-arrow-height);
            height: var(--tooltip-arrow-width);
            &::before {
                left: -1px;
                border-width: calc(var(--tooltip-arrow-width) * 0.5) 0 calc(var(--tooltip-arrow-width) * 0.5) var(--tooltip-arrow-height); // stylelint-disable-line function-disallowed-list
                border-left-color: var(--tooltip-background);
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
        max-width: var(--tooltip-max-width);
        padding: var(--tooltip-padding-y) var(--tooltip-padding-x);
        color: var(--tooltip-color);
        text-align: center;
        background-color: var(--tooltip-background);
        border-radius: var(--tooltip-radius, 0);
    }

    ${(props: any) => {
        return css`
            ${props?.overrideStyled || ''}
        `
    }}
`
