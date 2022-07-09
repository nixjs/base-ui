import { SpinnerTypes } from './types'

const getExpectWidth = (expectSize: number, baseSize = 2, baseWidth = 0.125) => (expectSize * baseWidth) / baseSize

export const sizeOptions: SpinnerTypes.SpinnerSizeProps = {
    xs: {
        size: 1
    },
    sm: {
        size: 1.5
    },
    md: {
        size: 1.75
    },
    lg: {
        size: 2.25
    },
    xl: {
        size: 3.25
    },
    xxl: {
        size: 4
    }
}

export const Loader1: SpinnerTypes.SpinnerBorderWidthProps = {
    xs: {
        liteWidth: getExpectWidth(sizeOptions.xs.size)
    },
    sm: {
        liteWidth: getExpectWidth(sizeOptions.sm.size)
    },
    md: {
        liteWidth: getExpectWidth(sizeOptions.md.size)
    },
    lg: {
        liteWidth: getExpectWidth(sizeOptions.lg.size)
    },
    xl: {
        liteWidth: getExpectWidth(sizeOptions.xl.size)
    },
    xxl: {
        liteWidth: getExpectWidth(sizeOptions.xxl.size)
    }
}

export const Loader2: SpinnerTypes.SpinnerBorderWidthProps = {
    xs: {
        liteWidth: getExpectWidth(sizeOptions.xs.size, 2, 0.25)
    },
    sm: {
        liteWidth: getExpectWidth(sizeOptions.sm.size, 2, 0.25)
    },
    md: {
        liteWidth: getExpectWidth(sizeOptions.md.size, 2, 0.25)
    },
    lg: {
        liteWidth: getExpectWidth(sizeOptions.lg.size, 2, 0.25)
    },
    xl: {
        liteWidth: getExpectWidth(sizeOptions.xl.size, 2, 0.25)
    },
    xxl: {
        liteWidth: getExpectWidth(sizeOptions.xxl.size, 2, 0.25)
    }
}

export const variantOptions: SpinnerTypes.SpinnerVariantProps = {
    primary: {
        brandColor: 'var(--base-color-primary-1)'
    },
    secondary: {
        brandColor: 'var(--base-color-secondary-1)'
    },
    success: {
        brandColor: 'var(--base-color-success-1)'
    },
    danger: {
        brandColor: 'var(--base-color-danger-1)'
    },
    warning: {
        brandColor: 'var(--base-color-warning-1)'
    },
    info: {
        brandColor: 'var(--base-color-info-1)'
    },
    light: {
        brandColor: 'var(--base-color-light-1)'
    },
    dark: {
        brandColor: 'var(--base-color-dark-1)'
    }
}
