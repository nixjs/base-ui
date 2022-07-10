import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Countdown } from '@nixjs23n6/baseui-countdown'

export default {
    title: 'Data Entry/Countdown',
    argTypes: {
        target: {
            description: 'Timestamp in the future.',
            type: { name: 'string', required: true }
        },
        showDay: {
            description: 'Enable to show day.',
            defaultValue: true,
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: { summary: true }
            }
        },
        showHour: {
            description: 'Enable to show hour.',
            defaultValue: true,
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: { summary: true }
            }
        },
        showMinute: {
            description: 'Enable to show minute.',
            defaultValue: true,
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: { summary: true }
            }
        },
        showSecond: {
            description: 'Enable to show second.',
            defaultValue: true,
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: { summary: true }
            }
        },
        showLabel: {
            description: 'Enable to show labels.',
            defaultValue: true,
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: { summary: true }
            }
        },
        onComplete: {
            description: 'Callback fired after countdown stops.',
            table: {
                type: {
                    summary: '() => void'
                }
            },
            type: 'function'
        },
        options: {
            description: 'Style for countdown',
            table: {
                type: {
                    summary: `{className?: string, day?: string, hour?: string, minute?: string, second?: string}`
                },
                defaultValue: {
                    summary: `{
        className: '',
        day: 'day',
        hour: 'hour',
        minute: 'minute',
        second: 'second'
    }`
                }
            }
        }
    }
} as ComponentMeta<any>

export const Default: React.FC = () => {
    const target = new Date().getTime() + 1000 * 3600 * 48
    return (
        <div className="container-box">
            <Countdown target={target} />
        </div>
    )
}
