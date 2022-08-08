import React from 'react'
import type { Breakpoint } from '@nixjs23n6/baseui-core'

export namespace InputTypes {
    export type FocusEvent = (inputRef: React.RefObject<HTMLInputElement>, event: React.FocusEvent<HTMLDivElement>) => void
    export interface InputValue {
        value: string
        target: {
            id?: string
            name?: string
        }
    }
    export type InputSize = Breakpoint
    export type InputCss = {
        fontSizeMultiplier: number
        height: string
    }
    export type InputSizeProps = Record<Breakpoint, InputCss>
}
