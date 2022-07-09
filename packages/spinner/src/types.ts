import { Breakpoint, Palette } from '@nixjs23n6/baseui-core'

export namespace SpinnerTypes {
    export type SpinnerVariant = Exclude<Palette, 'gradient'>
    export type SpinnerContent =
        | 'loader-1'
        | 'loader-2'
        | 'loader-3'
        | 'loader-4'
        | 'loader-5'
        | 'loader-6'
        | 'loader-7'
        | 'loader-8'
        | 'loader-9'
        | 'loader-10'

    export type SpinnerSize = Breakpoint

    export type SpinnerColorCss = {
        liteColor?: string
        brandColor?: string
    }

    export type SpinnerBorderCss = {
        liteWidth?: number
        brandWidth?: number
    }

    export type SpinnerBorderWidthProps = Record<Breakpoint, SpinnerBorderCss>

    export type SpinnerVariantProps = Record<SpinnerVariant, SpinnerColorCss>

    export type SpinnerCss = {
        size: number
    }

    export type SpinnerSizeProps = Record<Breakpoint, SpinnerCss>
}
