import React from 'react'
import styled, { css } from 'styled-components'
import { StyledProps } from '@nixjs23n6/baseui-core'

interface StyledPaginationProps {
    ref?: React.Ref<HTMLElement>
    as?: keyof JSX.IntrinsicElements
    className?: string
}

export const PaginationStyled = styled.div<StyledPaginationProps & StyledProps>`
    --base-pagination-item-margin: 0.125rem;
    --base-pagination-item-size: 2.25rem;
    --base-pagination-item-radius: 24%;
    --base-pagination-transition: var(--base-transition-slow);
    .pagination-content {
    }
    .pagination-item {
        border: none;
        position: relative;
        display: inline-flex;
        margin: 0 var(--base-pagination-item-margin);
        align-items: center;
        justify-content: center;
        padding: 0px;
        box-sizing: border-box;
        text-transform: capitalize;
        user-select: none;
        white-space: nowrap;
        text-align: center;
        vertical-align: middle;
        box-shadow: none;
        outline: none;
        font-size: inherit;
        cursor: pointer;
        height: var(--base-pagination-item-size);
        min-width: var(--base-pagination-item-size);
        border-radius: var(--base-pagination-item-radius);
        color: var(--base-pagination-item-color, var(--base-white));
        background: var(--base-pagination-item-background, var(--base-color-dark-1));
        transition: background var(--base-pagination-transition) ease, color var(--base-pagination-transition) ease;
        &:disabled {
            color: var(--base-pagination-item-disabled-color, var(--base-color-dark-4));
            cursor: not-allowed;
            opacity: var(--base-pagination-item-disabled-opacity, 0.75);
        }
        &-icon {
            font-size: 1.2rem;
        }
        &-dot {
            position: relative;
            &:before {
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 1;
                opacity: 0;
                visibility: hidden;
                transition: visibility var(--base-pagination-transition) ease, opacity var(--base-pagination-transition) ease;
            }
            &:hover {
                .pagination-item-3dot {
                    opacity: 0;
                    visibility: hidden;
                }
                &:before {
                    opacity: 1;
                    visibility: visible;
                }
            }
            &--prev {
                &:hover {
                    &:before {
                        content: '«';
                    }
                }
            }
            &--next {
                &:hover {
                    &:before {
                        content: '»';
                    }
                }
            }
        }
        &--number {
            &.active {
                font-weight: var(--pagination-item-active-font-weight, 700);
                background: var(--pagination-item-active-background, var(--base-color-primary-1));
            }
        }
    }
    ${(props: any) => {
        return css`
            ${props?.overrideStyled || ''}
        `
    }}
`
