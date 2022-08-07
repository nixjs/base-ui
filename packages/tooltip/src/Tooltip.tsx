import React from 'react'
import { createPortal } from 'react-dom'
import { StyledProps } from '@nixjs23n6/baseui-core'
import { usePopper } from 'react-popper'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'
import { TooltipTypes } from './types'
import { TooltipStyled } from './styled'

export interface TooltipPropArg {
    children: any
    content: React.ReactNode | string
    offset?: [number, number]
    onHide?: () => void
    onShow?: () => void
    trigger?: TooltipTypes.Trigger | TooltipTypes.Trigger[]
    placement?: TooltipTypes.Placement
    visible?: boolean
    showArrow?: boolean
}

export const Tooltip: React.FC<TooltipPropArg & StyledProps> = ({
    children,
    content,
    offset = [0, 10],
    onHide,
    onShow,
    placement = 'top',
    trigger = 'hover',
    visible,
    showArrow = true,
    overrideStyled,
    ...rest
}) => {
    const tooltipRef = React.useRef()
    const [_visible, setVisible] = React.useState(visible)

    const [referenceElement, setReferenceElement] = React.useState(null)
    const [popperElement, setPopperElement] = React.useState<HTMLDivElement | null>(null)
    const [arrowElement, setArrowElement] = React.useState<HTMLDivElement | null>(null)
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [
            { name: 'arrow', options: { element: arrowElement } },
            {
                name: 'offset',
                options: {
                    offset: offset
                }
            }
        ],
        placement: placement
    })

    const getTransitionClass = (state: string) => {
        return state === 'entering' ? 'fade' : state === 'entered' ? 'fade show' : state === 'exiting' ? 'fade' : 'fade'
    }

    return (
        <>
            {React.cloneElement(children, {
                ref: setReferenceElement,
                ...((trigger === 'click' || trigger.includes('click')) && {
                    onClick: () => setVisible(!_visible)
                }),
                ...((trigger === 'focus' || trigger.includes('focus')) && {
                    onFocus: () => setVisible(true),
                    onBlur: () => setVisible(false)
                }),
                ...((trigger === 'hover' || trigger.includes('hover')) && {
                    onMouseEnter: () => setVisible(true),
                    onMouseLeave: () => setVisible(false)
                })
            })}
            {typeof window !== 'undefined' &&
                createPortal(
                    <Transition
                        in={_visible}
                        mountOnEnter
                        nodeRef={tooltipRef}
                        onEnter={onShow}
                        onExit={onHide}
                        timeout={{
                            enter: 0,
                            exit: 200
                        }}
                        unmountOnExit
                    >
                        {(state) => {
                            const transitionClass = getTransitionClass(state)
                            return (
                                <TooltipStyled overrideStyled={overrideStyled}>
                                    <div
                                        className={classNames(
                                            `tooltip tooltip-${placement === 'left' ? 'start' : placement === 'right' ? 'end' : placement}`,
                                            transitionClass
                                        )}
                                        ref={setPopperElement}
                                        role="tooltip"
                                        style={styles.popper}
                                        {...attributes.popper}
                                        {...rest}
                                    >
                                        {showArrow && <div className="tooltip-arrow" style={styles.arrow} ref={setArrowElement} />}
                                        <div className="tooltip-inner">{content}</div>
                                    </div>
                                </TooltipStyled>
                            )
                        }}
                    </Transition>,
                    document.body
                )}
        </>
    )
}
