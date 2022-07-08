import * as React from 'react'
import { AnimationPropArg } from '@nixjs23n6/baseui-core'
import { StateDefinition, Actions } from './reducer'

type OurProps = {
    unmountOnExit?: boolean
    allowKeyboard?: boolean
    onTabChange(index: number): void
    dispatch: React.Dispatch<Actions>
} & AnimationPropArg

export const TabContext = React.createContext<StateDefinition & OurProps>({} as StateDefinition & OurProps)

export function useTab(): StateDefinition & OurProps {
    return React.useContext(TabContext)
}
