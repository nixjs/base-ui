import * as React from 'react'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'
import { Utils, Props, AnimationState } from '@nixjs23n6/baseui-core'
import { useSyncRefs, useIsomorphicEffect, useId } from '@nixjs23n6/baseui-hook'
import { useTab } from './useTab'
import { ActionTypes } from './reducer'
import { defaultStyle, DURATION_MS, transitionStyles } from './animation'

const DEFAULT_PANEL_TAG = 'div' as const
export interface PanelRenderPropArg {
    selected: boolean
}

export type PanelPropsWeControl = 'id' | 'role' | 'aria-labelledby' | 'tabIndex'

export const PanelRenderFeatures = Utils.Features.RenderStrategy | Utils.Features.Static

export const Panel = Utils.forwardRefWithAs(function Panels<TTag extends React.ElementType = typeof DEFAULT_PANEL_TAG>(
    props: Props<TTag, PanelRenderPropArg & PanelPropsWeControl> & {
        eventKey: string
    },
    ref: React.Ref<HTMLElement>
) {
    const key = !props?.id ? (props.eventKey ? `tabs-panel-${props.eventKey}` : `tabs-panel-${useId()}`) : `tabs-panel-${props.id}`

    const { active, panels, animation, animationDuration, animationName, unmountOnExit, dispatch } = useTab()

    const animateRef = React.useRef<any>(null)
    const internalPanelRef = React.useRef<HTMLElement>(null)

    const panelRef = useSyncRefs(internalPanelRef, ref)

    const myIndex = panels.indexOf(internalPanelRef)
    const selected = myIndex === active

    useIsomorphicEffect(() => {
        dispatch({
            type: ActionTypes.RegisterPanel,
            panel: internalPanelRef
        })
        return () => {
            dispatch({
                type: ActionTypes.UnregisterPanel,
                panel: internalPanelRef
            })
        }
    }, [internalPanelRef])

    useIsomorphicEffect(() => {
        if (!animation && selected) {
            animateRef.current = setTimeout(() => {
                internalPanelRef.current?.classList.add('show')
            }, 100)
        }
        return () => {
            clearTimeout(animateRef.current)
        }
    }, [selected, animation])

    const theirProps = Utils.omit(props, ['eventKey', 'animationDuration', 'animationName', 'animation'])

    const ourProps = animation
        ? {
              className: 'tabs-panel-content'
          }
        : {
              ref: panelRef,
              id: key,
              'aria-labelledby': key,
              tabIndex: 0,
              role: 'tabpanel',
              hidden: !selected,
              className: classNames('tabs-panel', props.className, {
                  active: !unmountOnExit && selected
              })
          }

    const slot = React.useMemo<PanelRenderPropArg>(() => ({ selected }), [selected])

    const container = Utils.render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_PANEL_TAG,
        name: 'Tabs.Panel',
        features: !unmountOnExit ? Utils.Features.None : PanelRenderFeatures,
        visible: !unmountOnExit ? true : selected
    })

    if (animation)
        return (
            <Transition in={selected} timeout={animationDuration || DURATION_MS} appear unmountOnExit={unmountOnExit}>
                {(state) => (
                    <div
                        ref={animateRef}
                        id={key}
                        aria-labelledby={key}
                        role="tabpanel"
                        hidden={!selected}
                        className={classNames('tabs-panel', props.className, {
                            active: !unmountOnExit && selected
                        })}
                        style={{
                            ...defaultStyle[animationName || 'fadeIn'],
                            ...transitionStyles[animationName || 'fadeIn'][state as AnimationState]
                        }}
                    >
                        {container}
                    </div>
                )}
            </Transition>
        )
    return container
})
