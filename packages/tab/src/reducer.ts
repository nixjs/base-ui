import * as React from 'react'
import { match } from '@nixjs23n6/baseui-core'

export interface StateDefinition {
    active: number

    orientation: 'horizontal' | 'vertical'

    tabs: React.MutableRefObject<HTMLElement | null>[]
    panels: React.MutableRefObject<HTMLElement | null>[]
}

// eslint-disable-next-line no-shadow
export enum ActionTypes {
    SetActive,
    SetOrientation,

    RegisterTab,
    UnregisterTab,

    RegisterPanel,
    UnregisterPanel
}

export type Actions =
    | { type: ActionTypes.SetActive; active: number }
    | { type: ActionTypes.SetOrientation; orientation: StateDefinition['orientation'] }
    | { type: ActionTypes.RegisterTab; tab: React.MutableRefObject<HTMLElement | null> }
    | { type: ActionTypes.UnregisterTab; tab: React.MutableRefObject<HTMLElement | null> }
    | { type: ActionTypes.RegisterPanel; panel: React.MutableRefObject<HTMLElement | null> }
    | { type: ActionTypes.UnregisterPanel; panel: React.MutableRefObject<HTMLElement | null> }

export const reducers: {
    [P in ActionTypes]: (state: StateDefinition, action: Extract<Actions, { type: P }>) => StateDefinition
} = {
    [ActionTypes.SetActive](state, action) {
        if (state.active === action.active) return state
        return { ...state, active: action.active }
    },
    [ActionTypes.SetOrientation](state, action) {
        if (state.orientation === action.orientation) return state
        return { ...state, orientation: action.orientation }
    },
    [ActionTypes.RegisterTab](state, action) {
        if (state.tabs.includes(action.tab)) return state
        return { ...state, tabs: [...state.tabs, action.tab] }
    },
    [ActionTypes.UnregisterTab](state, action) {
        return { ...state, tabs: state.tabs.filter((tab) => tab !== action.tab) }
    },
    [ActionTypes.RegisterPanel](state, action) {
        if (state.panels.includes(action.panel)) return state
        return { ...state, panels: [...state.panels, action.panel] }
    },
    [ActionTypes.UnregisterPanel](state, action) {
        return { ...state, panels: state.panels.filter((panel) => panel !== action.panel) }
    }
}

export function stateReducer(state: StateDefinition, action: Actions) {
    return match(action.type, reducers, state, action)
}
