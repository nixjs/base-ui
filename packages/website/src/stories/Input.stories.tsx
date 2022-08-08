import React from 'react'
import { Input } from '@nixjs23n6/baseui-input'
import IconBinance from './Icon/IconBinance'

export default {
    title: 'DataEntry/Input',
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
    const [text, setText] = React.useState<string>('')
    return (
        <>
            <div>
                <Input type={'text'} placeholder="Text..." value={text} onChangeValue={(e) => setText(e.value)} maxLength={10} />
                <br />
                <br />
                <Input type={'tel'} placeholder="Tel..." />
                <br />
                <br />
                <Input type={'password'} placeholder="Password..." />
                <br />
                <br />
                <Input type={'text'} placeholder="Input Amount" prefixHTML={<IconBinance />} suffixHTML="BUSD" />
                <br />
                <br />
                <Input type={'text'} placeholder="Readonly..." readOnly />
                <br />
                <br />
                <Input type={'text'} placeholder="Disabled..." disabled />
                <br />
                <br />
                <Input
                    type={'text'}
                    placeholder="Wallet address..."
                    defaultValue={'0x42Ca93Bf644dc646409637883bfcc58f24cB19e2'}
                    suffixHTML={
                        <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="copy"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>
                        </svg>
                    }
                />
            </div>
        </>
    )
}

export const Size: React.FC = () => {
    return (
        <>
            <div>
                <Input type={'text'} placeholder="XS" inputSize={'xs'} />
                <br />
                <br />
                <Input type={'text'} placeholder="SM" inputSize={'sm'} />
                <br />
                <br />
                <Input type={'text'} placeholder="MD" inputSize={'md'} />
                <br />
                <br />
                <Input type={'text'} placeholder="LG" inputSize={'lg'} />
                <br />
                <br />
                <Input type={'text'} placeholder="XL" inputSize={'xl'} />
                <br />
                <br />
                <Input type={'text'} placeholder="XXL" inputSize={'xxl'} />
            </div>
        </>
    )
}
