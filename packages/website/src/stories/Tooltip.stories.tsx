import React from 'react'
import { Tooltip } from '@nixjs23n6/baseui-tooltip'
import { Button } from '@nixjs23n6/baseui-button'

export default {
    title: 'DataDisplay/Tooltip',
    argTypes: {
        content: {
            description: 'Content node for your component.',
            table: {
                type: {
                    summary: 'React.ReactNode | string'
                }
            },
            type: 'string'
        },
        offset: {
            description: 'Offset of the popover relative to its target.',
            table: {
                type: {
                    summary: '[number, number]'
                },
                defaultValue: { summary: '[0, 10]' }
            },
            type: 'number'
        },
        onHide: {
            description: 'Callback fired when the component requests to be hidden.',
            table: {
                type: {
                    summary: '() => void'
                }
            },
            type: 'function'
        },
        onShow: {
            description: 'Callback fired when the component requests to be shown.',
            table: {
                type: {
                    summary: '() => void'
                }
            },
            type: 'function'
        },
        trigger: {
            description:
                'Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.',
            table: {
                type: {
                    summary: `TooltipTypes.Trigger | TooltipTypes.Trigger[] // 'hover' | 'focus' | 'click'`
                },
                defaultValue: { summary: 'hover' }
            },
            type: 'string'
        },
        placement: {
            description:
                'Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.',
            table: {
                type: {
                    summary: `'auto' | 'top' | 'right' | 'bottom' | 'left'`
                },
                defaultValue: { summary: 'top' }
            },
            type: 'string'
        },
        visible: {
            description: 'Toggle the visibility of popover component.',
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: { summary: false }
            },
            type: 'boolean'
        },
        showArrow: {
            description: 'Allow to display the arrow.',
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: { summary: true }
            },
            type: 'boolean'
        }
    }
}

export const Default: React.FC = () => {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="d-flex align-items-center justify-content-center gap-4">
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Top</p>
                    <div className="d-flex justify-content-center">
                        <Tooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="top">
                            <Button variant="primary">Tooltip on top</Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Right</p>
                    <div className="d-flex justify-content-center">
                        <Tooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="right">
                            <Button variant="primary">Tooltip on right</Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Bottom</p>
                    <div className="d-flex justify-content-center">
                        <Tooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="bottom">
                            <Button variant="primary">Tooltip on bottom</Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Left</p>
                    <div className="d-flex justify-content-center">
                        <Tooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="left">
                            <Button variant="primary">Tooltip on left</Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Click: React.FC = () => {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="d-flex align-items-center justify-content-center gap-4">
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Top</p>
                    <div className="d-flex justify-content-center">
                        <Tooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="top" trigger={'click'}>
                            <Button variant="primary">Tooltip on top</Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Right</p>
                    <div className="d-flex justify-content-center">
                        <Tooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="right" trigger={'click'}>
                            <Button variant="primary">Tooltip on right</Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Bottom</p>
                    <div className="d-flex justify-content-center">
                        <Tooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="bottom" trigger={'click'}>
                            <Button variant="primary">Tooltip on bottom</Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Left</p>
                    <div className="d-flex justify-content-center">
                        <Tooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="left" trigger={'click'}>
                            <Button variant="primary">Tooltip on left</Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    )
}
