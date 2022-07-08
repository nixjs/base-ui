import { ReactNode, ReactElement, ElementType, ComponentProps } from 'react'
import { CSSProp } from 'styled-components'

// A unique placeholder we can use as a default. This is nice because we can use this instead of
// defaulting to null / never / ... and possibly collide with actual data.
// Ideally we use a unique symbol here.

const __ = '1D45E01E-AF44-47C4-988A-19A94EBAF55C' as const
export type ___ = typeof __

type PropsWeControl = 'as' | 'children' | 'refName' | 'className'

export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never

export type PropsOf<TTag = any> = TTag extends ElementType ? ComponentProps<TTag> : never

// Resolve the props of the component, but ensure to omit certain props that we control
type CleanProps<TTag, TOmitableProps extends keyof any = ___> = TOmitableProps extends ___
    ? Omit<PropsOf<TTag>, PropsWeControl>
    : Omit<PropsOf<TTag>, TOmitableProps | PropsWeControl>

// Add certain props that we control
type OurProps<TTag, TSlot = any> = {
    as?: TTag
    children?: ReactNode | ((bag: TSlot) => ReactElement)
    refName?: string
}

// Conditionally override the `className`, to also allow for a function
// if and only if the PropsOf<TTag> already define `className`.
// This will allow us to have a TS error on as={Fragment}
type ClassNameOverride<TTag, TSlot = any> = PropsOf<TTag> extends {
    className?: any
}
    ? { className?: string | ((bag: TSlot) => string) }
    : {}

// Provide clean TypeScript props, which exposes some of our custom API's.
export type Props<TTag, TSlot = any, TOmitableProps extends keyof any = ___> = CleanProps<TTag, TOmitableProps> &
    OurProps<TTag, TSlot> &
    ClassNameOverride<TTag, TSlot>

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }
export type XOR<T, U> = T | U extends ___
    ? never
    : T extends ___
    ? U
    : U extends ___
    ? T
    : T | U extends object
    ? (Without<T, U> & U) | (Without<U, T> & T)
    : T | U

// Example:

// interface ButtonRenderPropArg {
//     open: boolean
// }
// type ButtonPropsWeControl = 'id' | 'type' | 'aria-expanded' | 'aria-controls' | 'onKeyDown' | 'onClick'

// const Button = forwardRefWithAs(function Button<TTag extends ElementType = typeof DEFAULT_BUTTON_TAG>(
//   props: Props<TTag, ButtonRenderPropArg, ButtonPropsWeControl>,
//   ref: Ref<HTMLButtonElement>
// )

export interface AnimationPropArg {
    animation?: boolean
    animationName?: AnimationName
    animationDuration?: number
}

export type AnimationName =
    | 'fadeIn'
    | 'fadeInDown'
    | 'fadeInUp'
    | 'fadeInLeft'
    | 'fadeInRight'
    | 'slideInDown'
    | 'slideInUp'
    | 'slideInLeft'
    | 'slideInRight'

export type AnimationState = 'entering' | 'entered' | 'exiting' | 'exited'

export type AnimationProp = Record<AnimationName, Record<AnimationState, any>>

export type Palette = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'gradient'

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export interface StyledProps {
    overrideStyled?: CSSProp
}
