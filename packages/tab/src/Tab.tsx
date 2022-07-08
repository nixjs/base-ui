import * as React from 'react'
import classNames from 'classnames'
import { Props, Utils } from '@nixjs23n6/baseui-core'
import { useSyncRefs, useId, useIsomorphicEffect } from '@nixjs23n6/baseui-hook'
import { useTab } from './useTab'
import { ActionTypes } from './reducer'
import { getNextTab, getPreviousTab } from './utils'

const DEFAULT_TAB_TAG = 'button' as const
export interface TabRenderPropArg {
    selected: boolean
}

export type TabPropsWeControl = 'id' | 'role' | 'aria-controls' | 'aria-selected' | 'tabIndex'
export type Key = 'ArrowLeft' | 'ArrowUp' | 'ArrowRight' | 'ArrowDown'

export const Tab = Utils.forwardRefWithAs(function Panels<TTag extends React.ElementType = typeof DEFAULT_TAB_TAG>(
    props: Props<TTag, TabRenderPropArg & TabPropsWeControl> & {
        eventKey: string
        disabled?: boolean
    },
    ref: React.Ref<HTMLElement>
) {
    const key = !props?.id ? (props.eventKey ? `tabs-tab-${props.eventKey}` : `tabs-tab-${useId()}`) : `tabs-tab-${props.id}`

    const { active, allowKeyboard, tabs, onTabChange, dispatch } = useTab()

    const internalTabRef = React.useRef<HTMLElement>(null)

    const tabRef = useSyncRefs(internalTabRef, ref)

    const tabIndex = tabs.indexOf(internalTabRef)
    const selected = tabIndex === active

    useIsomorphicEffect(() => {
        dispatch({
            type: ActionTypes.RegisterTab,
            tab: internalTabRef
        })
        return () => {
            dispatch({
                type: ActionTypes.UnregisterTab,
                tab: internalTabRef
            })
        }
    }, [internalTabRef])

    const onTabClick = React.useCallback(() => {
        if (props.disabled) {
            return
        }
        onTabChange(tabIndex)
    }, [tabIndex, onTabChange])

    const onTabKeyDown = React.useCallback(
        (event: React.KeyboardEvent<HTMLElement>) => {
            if (!allowKeyboard) return false
            switch (event.key as Key) {
                case 'ArrowUp':
                case 'ArrowLeft':
                    event.preventDefault()
                    event.stopPropagation()
                    onTabChange(getPreviousTab(active, tabs))
                    break
                case 'ArrowDown':
                case 'ArrowRight':
                    event.preventDefault()
                    event.stopPropagation()
                    onTabChange(getNextTab(active, tabs))
                    break
                default:
                    return false
            }
        },
        [tabIndex, onTabChange, tabs]
    )

    const theirProps = Utils.omit(props, ['eventKey'])

    const ourProps = {
        ref: tabRef,
        onClick: onTabClick,
        onKeyDown: onTabKeyDown,
        id: key,
        role: 'tab',
        'aria-controls': key,
        'aria-selected': selected,
        tabIndex: selected ? 0 : -1,
        className: classNames('tabs-tab', {
            active: selected
        })
    }

    const slot = React.useMemo<TabRenderPropArg>(() => ({ selected }), [selected])

    return Utils.render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_TAB_TAG,
        name: 'Tabs.Tab'
    })
})
