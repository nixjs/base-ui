import styled, { css } from 'styled-components'
import { StyledProps } from '@nixjs23n6/baseui-core'
import { TimePickerBaseStyled } from '../TimePicker/styled'

export const CalendarBaseStyled = css`
    --calendar-arrow-background-image: var(--base-arrow-background-image);
    --calendar-panel-color: white;
    --calendar-panel-background: linear-gradient(37.55deg, #3d3d3d 0, #353535 100%);
    --calendar-cell-date: 14.2857%;
    --calendar-cell-month: 25%;

    --calendar-cell-today-color: white;
    --calendar-cell-today-background: var(--base-color-secondary-1);

    --calendar-cell-today-color: var(--base-white);
    --calendar-cell-today-background: var(--base-color-primary-1);

    --calendar-cell-selected-color: var(--base-white);
    --calendar-cell-selected-background: var(--base-color-secondary-2);

    --calendar-cell-hover-color: var(--base-color-primary-1);
    --calendar-cell-hover-background: var(--base-transparent);

    --calendar-cell-offrange-color: var(--base-white-5);
    --calendar-cell-offrange-background: var(--base-dark);
    .calendar {
        display: inline-block;
        &-panel-container {
            color: var(--calendar-panel-color);
            background: var(--calendar-panel-background);
            box-shadow: var(--calendar-panel-box-shadow, none);
            border-radius: var(--calendar-panel-radius, 0.5rem);
            width: var(--calendar-panel-width, 100%);
            max-width: var(--calendar-panel-max-width, auto);
            padding: var(--calendar-panel-padding-top, 0.5rem) var(--calendar-panel-padding-right, 0.5rem)
                var(--calendar-panel-padding-bottom, 0.5rem) var(--calendar-panel-padding-left, 0.5rem);
        }
        &-decade-select {
            background: var(--calendar-decade-select-background, transparent);
            color: var(--calendar-decade-select-color, white);
            font-weight: var(--calendar-decade-select-font-weight, 400);
            border-width: var(--calendar-decade-select-border-width, 1px);
            border-style: var(--calendar-decade-select-border-style, solid);
            border-color: var(--calendar-decade-select-border-color, var(--base-color-secondary));
            padding: var(--calendar-decade-padding-top, 0.5rem) var(--calendar-decade-padding-right, 0.5rem)
                var(--calendar-decade-padding-bottom, 0.5rem) var(--calendar-decade-padding-left, 0.5rem);
            border-radius: var(--calendar-decade-radius, 0.425rem);
            width: var(--calendar-decade-select-width, 100%);
            max-width: var(--calendar-decade-select-width, 8.5rem);
            text-align: var(--calendar-decade-select-text-align, left);
            display: var(--calendar-decade-select-display, inline-flex);
            justify-content: var(--calendar-decade-select-display-content, space-between);
            align-items: var(--calendar-decade-select-display-align, center);
            transition: all var(--base-transition-fast) linear;
            &:after {
                content: '';
                height: 1.25rem;
                width: 1.25rem;
                display: inline-block;
                vertical-align: middle;
                transform: rotate(180deg);
                transition: transform var(--base-transition-fast) linear;
                background-image: var(--calendar-decade-select-arrow-background-image, var(--calendar-arrow-background-image));
                background-position: var(--calendar-decade-select-arrow-background-position, center);
                background-repeat: var(--calendar-decade-select-arrow-background-repeat, no-repeat);
                transform: var(--calendar-decade-select-arrow-rotate, rotate(90deg));
            }
            &:hover {
                background: var(--calendar-decade-select-hover-background, transparent);
                color: var(--calendar-decade-select-hover-color, white);
                font-weight: var(--calendar-decade-select-hover-font-weight, 400);
                border-width: var(--calendar-decade-select-hover-border-width, 1px);
                border-style: var(--calendar-decade-select-hover-border-style, solid);
                border-color: var(--calendar-decade-select-hover-border-color, var(--base-color-secondary));
                &:after {
                    background-image: var(--calendar-decade-select-arrow-background-image, var(--calendar-arrow-background-image));
                    background-position: var(--calendar-decade-select-arrow-background-position, center);
                    background-repeat: var(--calendar-decade-select-arrow-background-repeat, no-repeat);
                    transform: var(--calendar-decade-select-arrow-rotate, rotate(90deg));
                }
            }
        }
        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--calendar-header-padding-top) var(--calendar-header-padding-right) var(--calendar-header-padding-bottom)
                var(--calendar-header-padding-left);
            margin-bottom: var(--calendar-header-margin-bottom, 1rem);
        }
        &-btn {
            .calendar {
                &-prev {
                    margin-right: 0.75rem;
                }
                &-prev,
                &-next {
                    width: 3rem;
                    height: 3rem;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-color: var(--calendar-arrow-border-color, transparent);
                    background-color: var(--calendar-arrow-background-color, transparent);
                    background-position: center;
                    background-repeat: no-repeat;
                    i {
                        font-size: 1.2rem;
                    }
                }
                &-prev::before,
                &-next::before {
                    content: '';
                    height: 1.25rem;
                    width: 1.25rem;
                    transform: rotate(180deg);
                    transition: transform var(--base-transition-fast) linear;
                    background-image: var(--calendar-arrow-background-image);
                    background-position: var(--calendar-arrow-background-position, center);
                    background-repeat: var(--calendar-arrow-background-repeat, no-repeat);
                    display: inline-block;
                }
                &-prev::before {
                    transform: var(--calendar-arrow-prev-rotate, rotate(-90deg));
                }
                &-next::before {
                    transform: var(--calendar-arrow-next-rotate, rotate(90deg));
                }
            }
        }
        &-time {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &-weekday,
        &-table {
            display: flex;
        }
        &-table {
            flex-direction: column;
        }
        &-row {
            display: flex;
        }
        &-cell {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: var(--calendar-cell-date);
            height: 2.25rem;
            padding: 0;
            color: var(--calendar-cell-weekday-color, --calendar-cell-color);
            font-size: var(--calendar-cell-weekday-font-size, --calendar-cell-font-size);
            font-weight: var(--calendar-cell-weekday-font-weight, --calendar-cell-font-weight);
        }
        &-cell {
            .calendar-cell-date-content {
                cursor: default;
            }
            &:not(.calendar-cell-weekdays, .calendar-cell-decade-offrange) {
                .calendar-cell-content {
                    border-radius: var(--calendar-cell-radius, 0.5rem);
                    cursor: pointer;
                }
            }
            &:not(.calendar-cell-date-offrange, .calendar-cell-weekdays, .calendar-cell-decade-offrange) {
                &:hover {
                    .calendar-cell-content {
                        color: var(--calendar-cell-hover-color);
                        background-color: var(--calendar-cell-hover-background);
                    }
                }
            }
        }
        &-weekday,
        &-cell {
            &-content {
                margin-top: var(--calendar-cell-margin-top, 0.375rem);
                margin-right: var(--calendar-cell-margin-right, 0.375rem);
                margin-bottom: var(--calendar-cell-margin-bottom, 0.375rem);
                margin-left: var(--calendar-cell-margin-left, 0.375rem);
                line-height: var(--calendar-cell-height, 2.25rem);
                height: var(--calendar-cell-height, 2.25rem);
                width: var(--calendar-cell-width, 2.25rem);
                display: block;
            }
        }
        &-cell-date {
            &-content {
                width: var(--calendar-cell-date-width, 2.25rem);
            }
            &-offrange {
                .calendar-cell-date-content {
                    color: var(--calendar-cell-offrange-color);
                    background-color: var(--calendar-cell-offrange-background);
                    cursor: default !important;
                }
            }
            &-selected {
                .calendar-cell-date-content {
                    color: var(--calendar-cell-selected-color);
                    background-color: var(--calendar-cell-selected-background);
                }
            }
            &:hover {
                &:not(.calendar-cell-date-offrange) {
                    .calendar-cell-date-content {
                        color: var(--calendar-cell-hover-color);
                        background-color: var(--calendar-cell-hover-background);
                    }
                }
            }
            &-today {
                &:not(.calendar-cell-date-offrange) {
                    .calendar-cell-date-content {
                        color: var(--calendar-cell-today-color);
                        background-color: var(--calendar-cell-today-background);
                        &:hover {
                            background-color: $primary;
                        }
                    }
                }
            }
        }
        &-cell-month {
            &-content {
                width: var(--calendar-cell-month-width, 4.5rem);
            }
        }
        &-cell-decade {
            &-content {
                width: var(--calendar-cell-decade-width, 4.5rem);
            }
            &-offrange {
                .calendar-cell-decade-content {
                    color: var(--calendar-cell-offrange-color);
                    background-color: var(--calendar-cell-offrange-background);
                    cursor: default;
                }
            }
        }
        &-inner {
            padding: var(--calendar-content-padding-top) var(--calendar-content-padding-right) var(--calendar-content-padding-bottom)
                var(--calendar-content-padding-left);
        }
        &-show-time {
            text-align: var(--calendar-show-time-align, center);
            padding: var(--calendar-show-time-padding-top, 0) var(--calendar-show-time-padding-right, 1.5rem)
                var(--calendar-show-time-padding-bottom, 1rem) var(--calendar-show-time-padding-left, 1.5rem);
            &-hr {
                display: block;
                border: 0;
                border-bottom-width: var(--calendar-show-time-border-width, 1px);
                border-style: var(--calendar-show-time-border-style, solid);
                border-color: var(--calendar-show-time-border-color, var(--base-color-secondary));
                margin-top: var(--calendar-show-time-margin-top, 0);
                margin-bottom: var(--calendar-show-time-margin-bottom, 1rem);
            }
            .time-picker {
                margin-bottom: var(--calendar-show-time-picker-margin-bottom, 1rem);
            }
        }
        &-footer-btn {
            width: 100%;
            font-weight: var(--calendar-footer-button-font-weight, 500);

            &:first-child {
                margin-right: var(--calendar-footer-button-margin-right, 0.5rem);
            }
        }
        &-button-group {
            display: var(--calendar-footer-group-display, flex);
            justify-content: var(--calendar-footer-group-content);
        }
    }
    ${TimePickerBaseStyled}
`

export const CalendarStyled = styled.div<StyledProps>`
    ${CalendarBaseStyled}
    ${(props: any) => {
        return css`
            ${props?.overrideStyled || ''}
        `
    }}
`
