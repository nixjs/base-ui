/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { AnimationName } from '@nixjs23n6/baseui-core'
import { Tabs } from '@nixjs23n6/baseui-tab'

export default {
    title: 'Feedback/Tabs',
    argTypes: {
        'Tabs.as': {
            description: 'The element or component the `Tabs` should render as.',
            table: {
                category: 'Tabs',
                type: {
                    summary: 'string | Component'
                }
            },
            type: 'string',
            name: 'as'
        },
        active: {
            description: 'Index of active tab, overrides internal state.',
            table: {
                category: 'Tabs',
                type: {
                    summary: 'defaultActive'
                }
            },
            type: 'number'
        },
        defaultActive: {
            description: 'Index of initial tab.',
            table: {
                category: 'Tabs',
                type: {
                    summary: '1'
                }
            },
            type: 'number'
        },
        orientation: {
            description: 'Controls tab orientation.',
            table: {
                category: 'Tabs',
                type: {
                    summary: `horizontal | vertical`
                }
            },
            type: 'string'
        },
        unmountOnExit: {
            description: 'Unmount tabs (remove it from the DOM) when they are no longer visible.',
            table: {
                category: 'Tabs',
                type: {
                    summary: 'false'
                }
            },
            type: 'boolean'
        },
        allowKeyboard: {
            description: 'All interactions `KeyDown`, `KeyUp`, `KeyLeft`, `KeyRight` apply when a Tab component is focused.',
            table: {
                category: 'Tabs',
                type: {
                    summary: 'false'
                }
            },
            type: 'boolean'
        },
        overrideStyled: {
            description: 'Style for modal. See more: https://styled-components.com/docs/api#css.',
            table: {
                category: 'Tabs',
                type: {
                    summary: 'Empty'
                }
            },
            type: 'string'
        },
        onTabChange: {
            description: 'Called when tab control is clicked with tab index.',
            table: {
                category: 'Tabs',
                type: {
                    summary: '(index: number) => void'
                }
            },
            type: 'function'
        },
        'Tabs.List.as': {
            description: 'The element or component the `Tabs.List` should render as.',
            table: {
                category: 'Tabs.List',
                type: {
                    summary: 'string | Component'
                }
            },
            type: 'string',
            name: 'as'
        },
        'Tabs.Tab.as': {
            description: 'The element or component the `Tab` should render as.',
            table: {
                category: 'Tabs.Tab',
                type: {
                    summary: 'string | Component'
                }
            },
            type: 'string',
            name: 'as'
        },
        'Tabs.Tab.eventKey': {
            description:
                'A unique identifier for the Component, the `eventKey` makes it distinguishable from others in a set. Similar to React is `key` prop, in that it only needs to be unique amongst the Components siblings, not globally.',
            table: {
                category: 'Tabs.Tab',
                type: {
                    summary: 'string'
                }
            },
            type: 'string',
            name: 'eventKey'
        },
        'Tabs.Tab.disabled': {
            description: 'Whether or not the Tab is currently disabled.',
            table: {
                category: 'Tabs.Tab',
                type: {
                    summary: 'false'
                }
            },
            type: 'boolean',
            name: 'disabled'
        },
        'Tabs.Panels.as': {
            description: 'The element or component the `Panels` should render as.',
            table: {
                category: 'Tabs.Tab',
                type: {
                    summary: 'string | Component'
                }
            },
            type: 'string',
            name: 'as'
        },
        'Tabs.Panel.as': {
            description: 'The element or component the `Panel` should render as.',
            table: {
                category: 'Tabs.Panel',
                type: {
                    summary: 'string | Component'
                }
            },
            type: 'string',
            name: 'as'
        },
        'Tabs.Panel.eventKey': {
            description:
                'A unique identifier for the Component, the `eventKey` makes it distinguishable from others in a set. Similar to React is `key` prop, in that it only needs to be unique amongst the Components siblings, not globally.',
            table: {
                category: 'Tabs.Panel',
                type: {
                    summary: 'string'
                }
            },
            type: 'string',
            name: 'eventKey'
        },
        animation: {
            description: 'Enable the animation.',
            table: {
                category: 'Animation',
                type: {
                    summary: 'false'
                }
            },
            type: 'boolean'
        },
        animationName: {
            description: 'Select the animation to animate the opening/closing of the dialog.',
            table: {
                category: 'Animation',
                type: {
                    summary:
                        'fadeIn | fadeInDown | fadeInUp | fadeInLeft | fadeInRight | slideInDown | slideInUp | slideInLeft | slideInRight'
                }
            },
            type: 'string'
        },
        animationDuration: {
            description: 'Set the duration time to animate the opening/closing of the dialog.',
            table: {
                category: 'Animation',
                type: {
                    summary: 300
                }
            },
            type: 'number'
        }
    }
} as ComponentMeta<any>

export const Default: React.FC = () => {
    return (
        <div className="container-box">
            <Tabs>
                <Tabs.List>
                    <Tabs.Tab eventKey="first">Home</Tabs.Tab>
                    <Tabs.Tab eventKey="second">Profile</Tabs.Tab>
                    <Tabs.Tab eventKey="third">Contact</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panels>
                    <Tabs.Panel eventKey="first">
                        Let me not to the marriage of true minds Admit impediments. Love is not love Which alters when it alteration finds,
                        Or bends with the remover to remove: O, no! it is an ever-fixed mark, That looks on tempests and is never shaken; It
                        is the star to every wandering bark, Whose worth's unknown, although his height be taken. Love's not Time's fool,
                        though rosy lips and cheeks Within his bending sickle's compass come;
                    </Tabs.Panel>
                    <Tabs.Panel eventKey="second">
                        My love is as a fever longing still, For that which longer nurseth the disease; Feeding on that which doth preserve
                        the ill, The uncertain sickly appetite to please. My reason, the physician to my love, Angry that his prescriptions
                        are not kept, Hath left me, and I desperate now approve Desire is death, which physic did except. Past cure I am,
                        now Reason is past care, And frantic-mad with evermore unrest;
                    </Tabs.Panel>
                    <Tabs.Panel eventKey="third">
                        Thus is his cheek the map of days outworn, When beauty lived and died as flowers do now, Before these bastard signs
                        of fair were born, Or durst inhabit on a living brow; Before the golden tresses of the dead, The right of
                        sepulchres, were shorn away, To live a second life on second head; Ere beauty's dead fleece made another gay: In him
                        those holy antique hours are seen, Without all ornament, itself and true,
                    </Tabs.Panel>
                </Tabs.Panels>
            </Tabs>
        </div>
    )
}

export const Vertical: React.FC = () => {
    return (
        <div className="container-box">
            <Tabs orientation="vertical">
                <Tabs.List>
                    <Tabs.Tab eventKey="first">Action 1</Tabs.Tab>
                    <Tabs.Tab eventKey="second">Action 2</Tabs.Tab>
                    <Tabs.Tab eventKey="third">Action 3</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panels>
                    <Tabs.Panel eventKey="first">
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi
                        leo risus, porta ac consectetur ac, vestibulum at eros.
                    </Tabs.Panel>
                    <Tabs.Panel eventKey="second">
                        In this example we’ll look at how to implement a worker pool using goroutines and channels.
                    </Tabs.Panel>
                    <Tabs.Panel eventKey="third">
                        Finally we collect all the results of the work. This also ensures that the worker goroutines have finished. An
                        alternative way to wait for multiple goroutines is to use a WaitGroup.
                    </Tabs.Panel>
                </Tabs.Panels>
            </Tabs>
        </div>
    )
}

export const Disabled: React.FC = () => {
    return (
        <div className="container-box">
            <Tabs>
                <Tabs.List>
                    <Tabs.Tab eventKey="first">Action 1</Tabs.Tab>
                    <Tabs.Tab eventKey="second" disabled>
                        Action 2
                    </Tabs.Tab>
                    <Tabs.Tab eventKey="third">Action 3</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panels>
                    <Tabs.Panel eventKey="first">Tab panel 1</Tabs.Panel>
                    <Tabs.Panel eventKey="second">Tab panel 2</Tabs.Panel>
                    <Tabs.Panel eventKey="third">Tab panel 3</Tabs.Panel>
                </Tabs.Panels>
            </Tabs>
        </div>
    )
}

export const Transitions: React.FC = () => {
    const [animationName, setAnimationName] = React.useState<AnimationName>('fadeIn')
    const animations: AnimationName[] = [
        'fadeIn',
        'fadeInDown',
        'fadeInUp',
        'fadeInLeft',
        'fadeInRight',
        'slideInDown',
        'slideInUp',
        'slideInLeft',
        'slideInRight'
    ]

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {
            target: { value }
        } = e
        setAnimationName(value as AnimationName)
    }

    return (
        <div className="container-box">
            <select id="country" name="country" defaultValue="fadeIn" onChange={onChange}>
                {animations.map((item) => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
            <br />
            <br />
            <Tabs animation animationName={animationName}>
                <Tabs.List>
                    <Tabs.Tab eventKey="first">Home</Tabs.Tab>
                    <Tabs.Tab eventKey="second">Profile</Tabs.Tab>
                    <Tabs.Tab eventKey="third">Contact</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panels>
                    <Tabs.Panel eventKey="first">
                        Let me not to the marriage of true minds Admit impediments. Love is not love Which alters when it alteration finds,
                        Or bends with the remover to remove: O, no! it is an ever-fixed mark, That looks on tempests and is never shaken; It
                        is the star to every wandering bark, Whose worth's unknown, although his height be taken. Love's not Time's fool,
                        though rosy lips and cheeks Within his bending sickle's compass come;
                    </Tabs.Panel>
                    <Tabs.Panel eventKey="second">
                        My love is as a fever longing still, For that which longer nurseth the disease; Feeding on that which doth preserve
                        the ill, The uncertain sickly appetite to please. My reason, the physician to my love, Angry that his prescriptions
                        are not kept, Hath left me, and I desperate now approve Desire is death, which physic did except. Past cure I am,
                        now Reason is past care, And frantic-mad with evermore unrest;
                    </Tabs.Panel>
                    <Tabs.Panel eventKey="third">
                        Thus is his cheek the map of days outworn, When beauty lived and died as flowers do now, Before these bastard signs
                        of fair were born, Or durst inhabit on a living brow; Before the golden tresses of the dead, The right of
                        sepulchres, were shorn away, To live a second life on second head; Ere beauty's dead fleece made another gay: In him
                        those holy antique hours are seen, Without all ornament, itself and true,
                    </Tabs.Panel>
                </Tabs.Panels>
            </Tabs>
        </div>
    )
}

export const KeyboardInteraction: React.FC = () => {
    const [state, setState] = React.useState(2)
    return (
        <div className="container-box">
            <Tabs
                allowKeyboard={true}
                defaultActive={state}
                onTabChange={(index) => {
                    setState(index)
                }}
            >
                <Tabs.List>
                    <Tabs.Tab eventKey="first">Action 1</Tabs.Tab>
                    <Tabs.Tab eventKey="second">Action 2</Tabs.Tab>
                    <Tabs.Tab eventKey="third">Action 3</Tabs.Tab>
                    <Tabs.Tab eventKey="four">Action 4</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panels>
                    <Tabs.Panel eventKey="first">Clicking a Tab will select that tab and display the corresponding Tab.Panel.</Tabs.Panel>
                    <Tabs.Panel eventKey="second">Tab panel 2</Tabs.Panel>
                    <Tabs.Panel eventKey="third">Tab panel 3</Tabs.Panel>
                    <Tabs.Panel eventKey="four">Tab panel 4</Tabs.Panel>
                </Tabs.Panels>
            </Tabs>
        </div>
    )
}

export const UnmountOnExit: React.FC = () => {
    return (
        <div className="container-box">
            <Tabs unmountOnExit={true}>
                <Tabs.List>
                    <Tabs.Tab eventKey="first">Action 1</Tabs.Tab>
                    <Tabs.Tab eventKey="second">Action 2</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panels>
                    <Tabs.Panel eventKey="first">Tab panel 1</Tabs.Panel>
                    <Tabs.Panel eventKey="second">Tab panel 2</Tabs.Panel>
                </Tabs.Panels>
            </Tabs>
        </div>
    )
}
