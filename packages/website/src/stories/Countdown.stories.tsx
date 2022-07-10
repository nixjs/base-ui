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
            description:
                'Style for countdown: \n `CountdownTypes.CountdownTimerOptionals` \n- `className`: Set class for countdown container - Default: `Empty`. \n- `day`: Set label for day - Default: `day`. \n- `hour`: Set label for hour - Default: `hour`. \n- `minute`: Set label for minute - Default: `minute`. \n- `second`: Set label for second - Default: `second`.',
            table: {
                type: {
                    summary: 'Object'
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
