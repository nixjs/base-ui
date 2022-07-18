import { ButtonTypes } from './types'

export const variantOptions: ButtonTypes.ButtonVariantProps = {
    base: {
        backgroundColor: 'var(--base-color-base)',
        color: 'var(--button-color-base, var(--base-button-color))',
        borderColor: 'var(--base-color-base)',

        backgroundColorDisable: '',
        colorDisable: '',
        borderColorDisable: '',

        backgroundColorActive: '',
        colorActive: '',
        borderColorActive: '',

        backgroundColorHover: '',
        colorHover: '',
        borderColorHover: ''
    },
    primary: {
        backgroundColor: 'var(--base-color-primary-1)',
        color: 'var(--button-color-primary, var(--base-button-color))',
        borderColor: 'var(--base-color-primary-1)',

        backgroundColorDisable: 'var(--button-background-color-primary-disable, rgba(0,0,0,.4))',
        colorDisable: 'var(--button-color-primary-disable, rgba(255,255,255,.4))',
        borderColorDisable: 'var(--button-border-color-primary-disable, rgba(0,0,0,.4))',

        backgroundColorActive: 'var(--button-background-color-primary-active, var(--base-color-primary))',
        colorActive: 'var(--button-color-primary-active, var(--base-button-color))',
        borderColorActive: 'var(--button-border-color-primary-active, var(--base-color-primary))',

        backgroundColorHover: 'var(--button-background-color-primary-hover, var(--base-color-primary-2))',
        colorHover: 'var(--button-color-primary-hover, var(--base-button-color))',
        borderColorHover: 'var(--button-border-color-primary-hover, var(--base-color-primary-2))'
    },
    secondary: {
        backgroundColor: 'var(--base-color-secondary-1)',
        color: 'var(--button-color-secondary, var(--base-button-color))',
        borderColor: 'var(--base-color-secondary-1)',

        backgroundColorDisable: 'var(--button-background-color-secondary-disable, rgba(0,0,0,.4))',
        colorDisable: 'var(--button-color-secondary-disable, rgba(255,255,255,.4))',
        borderColorDisable: 'var(--button-border-color-secondary-disable, rgba(0,0,0,.4))',

        backgroundColorActive: 'var(--button-background-color-secondary-active, var(--base-color-secondary))',
        colorActive: 'var(--button-color-secondary-active, var(--base-button-color))',
        borderColorActive: 'var(--button-border-color-secondary-active, var(--base-color-secondary))',

        backgroundColorHover: 'var(--button-background-color-secondary-hover, var(--base-color-secondary-2))',
        colorHover: 'var(--button-color-secondary-hover, var(--base-button-color))',
        borderColorHover: 'var(--button-border-color-secondary-hover, var(--base-color-secondary-2))'
    },
    success: {
        backgroundColor: 'var(--base-color-success-1)',
        color: 'var(--button-color-success, var(--base-button-color))',
        borderColor: 'var(--base-color-success-1)',

        backgroundColorDisable: 'var(--button-background-color-success-disable, rgba(0,0,0,.4))',
        colorDisable: 'var(--button-color-success-disable, rgba(255,255,255,.4))',
        borderColorDisable: 'var(--button-border-color-success-disable, rgba(0,0,0,.4))',

        backgroundColorActive: 'var(--button-background-color-success-active, var(--base-color-success))',
        colorActive: 'var(--button-color-success-active, var(--base-button-color))',
        borderColorActive: 'var(--button-border-color-success-active, var(--base-color-success))',

        backgroundColorHover: 'var(--button-background-color-success-hover, var(--base-color-success-2))',
        colorHover: 'var(--button-color-success-hover, var(--base-button-color))',
        borderColorHover: 'var(--button-border-color-success-hover, var(--base-color-success-2))'
    },
    danger: {
        backgroundColor: 'var(--base-color-danger-1)',
        color: 'var(--button-color-danger, var(--base-button-color))',
        borderColor: 'var(--base-color-danger-1)',

        backgroundColorDisable: 'var(--button-background-color-danger-disable, rgba(0,0,0,.4))',
        colorDisable: 'var(--button-color-danger-disable, rgba(255,255,255,.4))',
        borderColorDisable: 'var(--button-border-color-danger-disable, rgba(0,0,0,.4))',

        backgroundColorActive: 'var(--button-background-color-danger-active, var(--base-color-danger))',
        colorActive: 'var(--button-color-danger-active, var(--base-button-color))',
        borderColorActive: 'var(--button-border-color-danger-active, var(--base-color-danger))',

        backgroundColorHover: 'var(--button-background-color-danger-hover, var(--base-color-danger-2))',
        colorHover: 'var(--button-color-danger-hover, var(--base-button-color))',
        borderColorHover: 'var(--button-border-color-danger-hover, var(--base-color-danger-2))'
    },
    warning: {
        backgroundColor: 'var(--base-color-warning-2)',
        color: 'var(--button-color-warning, var(--base-button-color))',
        borderColor: 'var(--base-color-warning-2)',

        backgroundColorDisable: 'var(--button-background-color-warning-disable, rgba(0,0,0,.4))',
        colorDisable: 'var(--button-color-warning-disable, rgba(255,255,255,.4))',
        borderColorDisable: 'var(--button-border-color-warning-disable, rgba(0,0,0,.4))',

        backgroundColorActive: 'var(--button-background-color-warning-active, var(--base-color-warning))',
        colorActive: 'var(--button-color-warning-active, var(--base-button-color))',
        borderColorActive: 'var(--button-border-color-warning-active, var(--base-color-warning))',

        backgroundColorHover: 'var(--button-background-color-warning-hover, var(--base-color-warning-2))',
        colorHover: 'var(--button-color-warning-hover, var(--base-button-color))',
        borderColorHover: 'var(--button-border-color-warning-hover, var(--base-color-warning-2))'
    },
    info: {
        backgroundColor: 'var(--base-color-info-1)',
        color: 'var(--button-color-info, var(--base-button-color))',
        borderColor: 'var(--base-color-info-1)',

        backgroundColorDisable: 'var(--button-background-color-info-disable, rgba(0,0,0,.4))',
        colorDisable: 'var(--button-color-info-disable, rgba(255,255,255,.4))',
        borderColorDisable: 'var(--button-border-color-info-disable, rgba(0,0,0,.4))',

        backgroundColorActive: 'var(--button-background-color-info-active, var(--base-color-info))',
        colorActive: 'var(--button-color-info-active, var(--base-button-color))',
        borderColorActive: 'var(--button-border-color-info-active, var(--base-color-info))',

        backgroundColorHover: 'var(--button-background-color-info-hover, var(--base-color-info-2))',
        colorHover: 'var(--button-color-info-hover, var(--base-button-color))',
        borderColorHover: 'var(--button-border-color-info-hover, var(--base-color-info-2))'
    },
    light: {
        backgroundColor: 'var(--base-color-light-1)',
        color: 'var(--button-color-light, var(--base-color-dark-1))',
        borderColor: 'var(--base-color-light-1)',

        backgroundColorDisable: 'var(--button-background-color-light-disable, rgba(0,0,0,.4))',
        colorDisable: 'var(--button-color-light-disable, rgba(255,255,255,.4))',
        borderColorDisable: 'var(--button-border-color-light-disable, rgba(0,0,0,.4))',

        backgroundColorActive: 'var(--button-background-color-light-active, var(--base-color-light))',
        colorActive: 'var(--button-color-light-active, var(--base-color-dark))',
        borderColorActive: 'var(--button-border-color-light-active, var(--base-color-light))',

        backgroundColorHover: 'var(--button-background-color-light-hover, var(--base-color-light-2))',
        colorHover: 'var(--button-color-light-hover, var(--base-color-dark-2))',
        borderColorHover: 'var(--button-border-color-light-hover, var(--base-color-light-2))'
    },
    dark: {
        backgroundColor: 'var(--base-color-dark-1)',
        color: 'var(--button-color-dark, var(--base-button-color))',
        borderColor: 'var(--base-color-dark-1)',

        backgroundColorDisable: 'var(--button-background-color-dark-disable, rgba(0,0,0,.4))',
        colorDisable: 'var(--button-color-dark-disable, rgba(255,255,255,.4))',
        borderColorDisable: 'var(--button-border-color-dark-disable, rgba(0,0,0,.4))',

        backgroundColorActive: 'var(--button-background-color-dark-active, var(--base-color-dark))',
        colorActive: 'var(--button-color-dark-active, var(--base-button-color))',
        borderColorActive: 'var(--button-border-color-dark-active, var(--base-color-dark))',

        backgroundColorHover: 'var(--button-background-color-dark-hover, var(--base-color-dark-2))',
        colorHover: 'var(--button-color-dark-hover, var(--base-button-color))',
        borderColorHover: 'var(--button-border-color-dark-hover, var(--base-color-dark-2))'
    },
    link: {
        backgroundColor: 'transparent',
        color: 'var(--button-color-link, var(--base-button-color))',
        borderColor: 'transparent',

        backgroundColorDisable: 'transparent',
        colorDisable: 'var(--button-color-link-disable, rgba(255,255,255,.4))',
        borderColorDisable: 'transparent',

        backgroundColorActive: 'transparent',
        colorActive: 'var(--button-color-link-active, var(--base-button-color))',
        borderColorActive: 'transparent',

        backgroundColorHover: 'transparent',
        colorHover: 'var(--button-color-link-hover, var(--base-button-color))',
        borderColorHover: 'transparent'
    },
    gradient: {
        backgroundColor: 'var(--base-color-gradient)',
        color: 'var(--button-color-gradient, var(--base-button-color))',
        borderColor: 'var(--base-color-gradient)',

        backgroundColorDisable: 'var(--button-background-color-gradient-disable, rgba(0,0,0,.4))',
        colorDisable: 'var(--button-color-gradient-disable, rgba(255,255,255,.4))',
        borderColorDisable: 'var(--button-border-color-gradient-disable, rgba(0,0,0,.4))',

        backgroundColorActive: 'var(--button-background-color-dark-active, var(--base-color-dark))',
        colorActive: 'var(--button-color-dark-active, var(--base-button-color))',
        borderColorActive: 'var(--button-border-color-dark-active, var(--base-color-dark))',

        backgroundColorHover: 'var(--button-background-color-dark-hover, var(--base-color-dark-2))',
        colorHover: 'var(--button-color-dark-hover, var(--base-button-color))',
        borderColorHover: 'var(--button-border-color-dark-hover, var(--base-color-dark-2))'
    }
}

export const sizeOptions: ButtonTypes.ButtonSizeProps = {
    xs: {
        fontSizeMultiplier: 0.75,
        height: '1.5rem',
        width: 'auto',
        minWidth: '4rem',
        paddingLeft: '0.375rem',
        paddingRight: '0.375rem',
        radius: '0.375rem'
    },
    sm: {
        fontSizeMultiplier: 0.875,
        height: '2rem',
        width: 'auto',
        minWidth: '9rem',
        paddingLeft: '0.625rem',
        paddingRight: '0.625rem',
        radius: '0.525rem'
    },
    md: {
        fontSizeMultiplier: 1,
        height: '2.5rem',
        width: 'auto',
        minWidth: '12rem',
        paddingLeft: '0.875rem',
        paddingRight: '0.875rem',
        radius: '0.625rem'
    },
    lg: {
        fontSizeMultiplier: 1.125,
        height: '3rem',
        width: 'auto',
        minWidth: '15rem',
        paddingLeft: '1.25rem',
        paddingRight: '1.25rem',
        radius: '0.75rem'
    },
    xl: {
        fontSizeMultiplier: 1.25,
        height: '4rem',
        width: 'auto',
        minWidth: '18rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        radius: '0.875rem'
    },
    xxl: {
        fontSizeMultiplier: 1.5,
        height: '5rem',
        width: 'auto',
        minWidth: '20rem',
        paddingLeft: '1.75rem',
        paddingRight: '1.75rem',
        radius: '1rem'
    }
}
