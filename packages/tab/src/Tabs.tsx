import * as React from 'react'
import { Utils, Props, AnimationPropArg, StyledProps } from '@nixjs23n6/baseui-core'
import { useSyncRefs } from '@nixjs23n6/baseui-hook'
import { Panels } from './Panels'
import { Panel } from './Panel'
import { List } from './List'
import { Tab } from './Tab'
import { TabContext } from './useTab'
import { stateReducer, StateDefinition, ActionTypes } from './reducer'
import { TabsStyled } from './styled'

const DEFAULT_TABS_TAG = 'div' as const

export interface TabsRootPropArg {}

// eslint-disable-next-line no-shadow
export const TabRoot = Utils.forwardRefWithAs(function List<TTag extends React.ElementType = typeof DEFAULT_TABS_TAG>(
    props: Props<TTag, TabsRootPropArg> &
        AnimationPropArg & {
            active?: number
            defaultActive?: number
            orientation?: 'horizontal' | 'vertical'
            unmountOnExit?: boolean
            allowKeyboard?: boolean
            onTabChange?: (index: number) => void
        } & StyledProps,
    ref: React.Ref<HTMLElement>
) {
    const {
        active,
        defaultActive = 1,
        orientation = 'horizontal',
        unmountOnExit = false,
        allowKeyboard = false,
        animation = false,
        animationName = 'fadeIn',
        animationDuration,
        onTabChange,
        overrideStyled
    } = props
    const [state, dispatch] = React.useReducer(stateReducer, {
        active: active || defaultActive - 1,
        tabs: [],
        panels: [],
        orientation: orientation
    } as StateDefinition)

    const onChange = React.useCallback((e: number) => {
        if (typeof onTabChange === 'function') {
            onTabChange(e + 1)
        }
        dispatch({
            type: ActionTypes.SetActive,
            active: e
        })
    }, [])

    const tabsRef = useSyncRefs(ref)

    const theirProps = Utils.omit(props, [
        'unmountOnExit',
        'allowKeyboard',
        'onTabChange',
        'defaultActive',
        'animationDuration',
        'animationName',
        'animation',
        'overrideStyled',
        'orientation'
    ])

    const ourProps = { ref: tabsRef, className: 'tabs-container' }

    const slot = React.useMemo<any>(() => ({}), [])

    const container = Utils.render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_TABS_TAG,
        name: 'Tabs'
    })

    return (
        <TabContext.Provider
            value={{
                onTabChange: (e: number) => onChange(e),
                dispatch,
                unmountOnExit,
                allowKeyboard,
                animation,
                animationName,
                animationDuration,
                ...state
            }}
        >
            <TabsStyled overrideStyled={overrideStyled} className="tabs">
                {container}
            </TabsStyled>
        </TabContext.Provider>
    )
})

export const Tabs = Object.assign(TabRoot, {
    List,
    Tab,
    Panels,
    Panel
})
