import type { Palette, Breakpoint } from '@nixjs23n6/baseui-core'

export namespace ButtonTypes {
    export type ButtonOurVariant = 'link' | 'base'

    export type ButtonVariant = Palette | ButtonOurVariant

    export type ButtonVariantProps = Record<
        ButtonVariant,
        {
            backgroundColor?: string
            color?: string
            borderColor?: string

            backgroundColorHover?: string
            colorHover?: string
            borderColorHover?: string

            backgroundColorDisable?: string
            colorDisable?: string
            borderColorDisable?: string

            backgroundColorActive?: string
            colorActive?: string
            borderColorActive?: string
        }
    >

    export type ButtonSize = Breakpoint

    export type ButtonCss = {
        paddingLeft: string
        paddingRight: string
        fontSizeMultiplier: number
        height: string
        minWidth: string
        width: string
        radius: string
    }

    export type ButtonSizeProps = Record<Breakpoint, ButtonCss>
}
