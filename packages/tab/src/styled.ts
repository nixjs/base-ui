import styled, { css } from 'styled-components'
import { StyledProps } from '@nixjs23n6/baseui-core'

export const TabsStyled = styled.div<StyledProps>`
    .tabs {
        &-tab {
            border: none;
            outline: 0;
            transition: all 0.3s ease;
            margin-right: var(--base-tab-item-margin, 0.25rem);
            padding: var(--base-tab-item-padding, 0.625rem) 0;
            border-radius: var(--base-tab-item-radius, 0.5rem);
            background-color: var(--base-tab-item-background, var(--base-transparent));
            width: var(--base-tab-item-width, 100%);
            color: var(--base-tab-item-color, var(--base-white));
            &:hover {
                &:not(:disabled, .active) {
                    background-color: var(--base-tab-item-background-hover, var(--base-white-5));
                }
            }
            &.active {
                background-color: var(--base-tab-item-background-active, var(--base-white));
                box-shadow: var(
                    --base-tab-item-shadow-active,
                    rgba(0, 0, 0, 0) 0 0 0 0,
                    rgba(0, 0, 0, 0) 0 0 0 0,
                    rgba(0, 0, 0, 0.1) 0 1px 3px 0,
                    rgba(0, 0, 0, 0.1) 0 1px 2px -1px
                );
                color: var(--base-tab-item-color-active, var(--base-color-primary-1));
                font-weight: var(--base-tab-item-weight-active, 700);
            }
        }
        &-list {
            display: flex;
            background-color: var(--base-tab-list-background, var(--base-color-dark-1));
            padding: var(--base-tab-list-padding, 0.25rem);
            border-radius: var(--base-tab-list-radius, 0.75rem);
            &[aria-orientation='vertical'] {
                flex-direction: column;
            }
        }
        &-panel {
            background-color: var(--base-tab-panel-background, var(--base-white));
            color: var(--base-tab-panel-color, var(--base-black));
            padding: var(--base-tab-panel-padding, 0.75rem);
            border-radius: var(--base-tab-panel-radius, 0.75rem);
        }
        &-panels {
            margin-top: var(--base-tab-panels-margin, 0.5rem);
        }
        &-container {
            display: flex;
            &[orientation='vertical'] {
                flex-direction: row;
                .tabs {
                    &-tab {
                        margin-bottom: var(--base-tab-item-margin, 0.25rem);
                        margin-left: 0;
                        margin-right: 0;
                        min-width: var(--base-tab-item-width, 12rem);
                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                    &-panels {
                        --base-tab-panels-margin: 0;
                    }
                }
            }
            &:not([orientation='vertical']) {
                flex-direction: column;
                .tabs {
                    &-tab {
                        &:last-child {
                            --base-tab-item-margin: 0;
                        }
                    }
                }
            }
        }
    }
    ${(props: any) => {
        return css`
            ${props?.overrideStyled || ''}
        `
    }}
`
