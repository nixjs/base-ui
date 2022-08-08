import styled, { css } from 'styled-components'
import { StyledProps } from '@nixjs23n6/baseui-core'
import { TimePickerBaseStyled } from '../TimePicker/styled'

export const CalendarBaseStyled = css`
    --base-calendar-arrow-background-image: var(--base-arrow-background-image);
    --base-calendar-panel-color: white;
    --base-calendar-panel-background: var(--base-background-contrast);
    --base-calendar-cell-date: 14.2857%;
    --base-calendar-cell-month: 25%;

    --base-calendar-cell-today-color: white;
    --base-calendar-cell-today-background: var(--base-color-secondary-1);

    --base-calendar-cell-today-color: var(--base-white);
    --base-calendar-cell-today-background: var(--base-color-primary-1);

    --base-calendar-cell-selected-color: var(--base-white);
    --base-calendar-cell-selected-background: var(--base-color-secondary-2);

    --base-calendar-cell-hover-color: var(--base-color-primary-1);
    --base-calendar-cell-hover-background: var(--base-transparent);

    --base-calendar-cell-offrange-color: var(--base-white-5);
    --base-calendar-cell-offrange-background: var(--base-black);
    .calendar {
        display: inline-block;
        &-panel-container {
            color: var(--base-calendar-panel-color);
            background: var(--base-calendar-panel-background);
            box-shadow: var(--base-calendar-panel-box-shadow, none);
            border-radius: var(--base-calendar-panel-radius, 0.5rem);
            width: var(--base-calendar-panel-width, 100%);
            max-width: var(--base-calendar-panel-max-width, auto);
            padding: var(--base-calendar-panel-padding-top, 0.5rem) var(--base-calendar-panel-padding-right, 0.5rem)
                var(--base-calendar-panel-padding-bottom, 0.5rem) var(--base-calendar-panel-padding-left, 0.5rem);
        }
        &-decade-select {
            background: var(--base-calendar-decade-select-background, transparent);
            color: var(--base-calendar-decade-select-color, white);
            font-weight: var(--base-calendar-decade-select-font-weight, 400);
            border-width: var(--base-calendar-decade-select-border-width, 1px);
            border-style: var(--base-calendar-decade-select-border-style, solid);
            border-color: var(--base-calendar-decade-select-border-color, var(--base-color-secondary));
            padding: var(--base-calendar-decade-padding-top, 0.5rem) var(--base-calendar-decade-padding-right, 0.5rem)
                var(--base-calendar-decade-padding-bottom, 0.5rem) var(--base-calendar-decade-padding-left, 0.5rem);
            border-radius: var(--base-calendar-decade-radius, 0.425rem);
            width: var(--base-calendar-decade-select-width, 100%);
            max-width: var(--base-calendar-decade-select-width, 8.5rem);
            text-align: var(--base-calendar-decade-select-text-align, left);
            display: var(--base-calendar-decade-select-display, inline-flex);
            justify-content: var(--base-calendar-decade-select-display-content, space-between);
            align-items: var(--base-calendar-decade-select-display-align, center);
            transition: all var(--base-transition-fast) linear;
            &:after {
                content: '';
                height: 1.25rem;
                width: 1.25rem;
                display: inline-block;
                vertical-align: middle;
                transform: rotate(180deg);
                transition: transform var(--base-transition-fast) linear;
                background-image: var(--base-calendar-decade-select-arrow-background-image, var(--base-calendar-arrow-background-image));
                background-position: var(--base-calendar-decade-select-arrow-background-position, center);
                background-repeat: var(--base-calendar-decade-select-arrow-background-repeat, no-repeat);
                transform: var(--base-calendar-decade-select-arrow-rotate, rotate(90deg));
            }
            &:hover {
                background: var(--base-calendar-decade-select-hover-background, transparent);
                color: var(--base-calendar-decade-select-hover-color, white);
                font-weight: var(--base-calendar-decade-select-hover-font-weight, 400);
                border-width: var(--base-calendar-decade-select-hover-border-width, 1px);
                border-style: var(--base-calendar-decade-select-hover-border-style, solid);
                border-color: var(--base-calendar-decade-select-hover-border-color, var(--base-color-secondary));
                &:after {
                    background-image: var(
                        --base-calendar-decade-select-arrow-background-image,
                        var(--base-calendar-arrow-background-image)
                    );
                    background-position: var(--base-calendar-decade-select-arrow-background-position, center);
                    background-repeat: var(--base-calendar-decade-select-arrow-background-repeat, no-repeat);
                    transform: var(--base-calendar-decade-select-arrow-rotate, rotate(90deg));
                }
            }
        }
        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--base-calendar-header-padding-top) var(--base-calendar-header-padding-right)
                var(--base-calendar-header-padding-bottom) var(--base-calendar-header-padding-left);
            margin-bottom: var(--base-calendar-header-margin-bottom, 1rem);
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
                    border-color: var(--base-calendar-arrow-border-color, transparent);
                    background-color: var(--base-calendar-arrow-background-color, transparent);
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
                    background-image: var(--base-calendar-arrow-background-image);
                    background-position: var(--base-calendar-arrow-background-position, center);
                    background-repeat: var(--base-calendar-arrow-background-repeat, no-repeat);
                    display: inline-block;
                }
                &-prev::before {
                    transform: var(--base-calendar-arrow-prev-rotate, rotate(-90deg));
                }
                &-next::before {
                    transform: var(--base-calendar-arrow-next-rotate, rotate(90deg));
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
            width: var(--base-calendar-cell-date);
            height: 2.25rem;
            padding: 0;
            color: var(--base-calendar-cell-weekday-color, --base-calendar-cell-color);
            font-size: var(--base-calendar-cell-weekday-font-size, --base-calendar-cell-font-size);
            font-weight: var(--base-calendar-cell-weekday-font-weight, --base-calendar-cell-font-weight);
        }
        &-cell {
            .calendar-cell-date-content {
                cursor: default;
            }
            &:not(.calendar-cell-weekdays, .calendar-cell-decade-offrange) {
                .calendar-cell-content {
                    border-radius: var(--base-calendar-cell-radius, 0.5rem);
                    cursor: pointer;
                }
            }
            &:not(.calendar-cell-date-offrange, .calendar-cell-weekdays, .calendar-cell-decade-offrange) {
                &:hover {
                    .calendar-cell-content {
                        color: var(--base-calendar-cell-hover-color);
                        background-color: var(--base-calendar-cell-hover-background);
                    }
                }
            }
        }
        &-weekday,
        &-cell {
            &-content {
                margin-top: var(--base-calendar-cell-margin-top, 0.375rem);
                margin-right: var(--base-calendar-cell-margin-right, 0.375rem);
                margin-bottom: var(--base-calendar-cell-margin-bottom, 0.375rem);
                margin-left: var(--base-calendar-cell-margin-left, 0.375rem);
                line-height: var(--base-calendar-cell-height, 2.25rem);
                height: var(--base-calendar-cell-height, 2.25rem);
                width: var(--base-calendar-cell-width, 2.25rem);
                display: block;
            }
        }
        &-cell-date {
            &-content {
                width: var(--base-calendar-cell-date-width, 2.25rem);
            }
            &-offrange {
                .calendar-cell-date-content {
                    color: var(--base-calendar-cell-offrange-color);
                    background-color: var(--base-calendar-cell-offrange-background);
                    cursor: default !important;
                }
            }
            &-selected {
                .calendar-cell-date-content {
                    color: var(--base-calendar-cell-selected-color);
                    background-color: var(--base-calendar-cell-selected-background);
                }
            }
            &:hover {
                &:not(.calendar-cell-date-offrange) {
                    .calendar-cell-date-content {
                        color: var(--base-calendar-cell-hover-color);
                        background-color: var(--base-calendar-cell-hover-background);
                    }
                }
            }
            &-today {
                &:not(.calendar-cell-date-offrange) {
                    .calendar-cell-date-content {
                        color: var(--base-calendar-cell-today-color);
                        background-color: var(--base-calendar-cell-today-background);
                        &:hover {
                            background-color: $primary;
                        }
                    }
                }
            }
        }
        &-cell-month {
            &-content {
                width: var(--base-calendar-cell-month-width, 4.5rem);
            }
        }
        &-cell-decade {
            &-content {
                width: var(--base-calendar-cell-decade-width, 4.5rem);
            }
            &-offrange {
                .calendar-cell-decade-content {
                    color: var(--base-calendar-cell-offrange-color);
                    background-color: var(--base-calendar-cell-offrange-background);
                    cursor: default;
                }
            }
        }
        &-inner {
            padding: var(--base-calendar-content-padding-top) var(--base-calendar-content-padding-right)
                var(--base-calendar-content-padding-bottom) var(--base-calendar-content-padding-left);
        }
        &-show-time {
            text-align: var(--base-calendar-show-time-align, center);
            padding: var(--base-calendar-show-time-padding-top, 0) var(--base-calendar-show-time-padding-right, 1.5rem)
                var(--base-calendar-show-time-padding-bottom, 1rem) var(--base-calendar-show-time-padding-left, 1.5rem);
            &-hr {
                display: block;
                border: 0;
                border-bottom-width: var(--base-calendar-show-time-border-width, 1px);
                border-style: var(--base-calendar-show-time-border-style, solid);
                border-color: var(--base-calendar-show-time-border-color, var(--base-color-secondary));
                margin-top: var(--base-calendar-show-time-margin-top, 0);
                margin-bottom: var(--base-calendar-show-time-margin-bottom, 1rem);
            }
            .time-picker {
                margin-bottom: var(--base-calendar-show-time-picker-margin-bottom, 1rem);
            }
        }
        &-footer-btn {
            width: 100%;
            font-weight: var(--base-calendar-footer-button-font-weight, 500);

            &:first-child {
                margin-right: var(--base-calendar-footer-button-margin-right, 0.5rem);
            }
        }
        &-button-group {
            display: var(--base-calendar-footer-group-display, flex);
            justify-content: var(--base-calendar-footer-group-content);
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
