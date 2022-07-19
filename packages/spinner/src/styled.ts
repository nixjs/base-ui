import styled, { css } from 'styled-components'
import { StyledProps } from '@nixjs23n6/baseui-core'
import { SpinnerTypes } from './types'
import { sizeOptions, variantOptions, Loader1, Loader2 } from './constants'

interface StyledSpinnerProps {
    variant: SpinnerTypes.SpinnerVariant
    size: SpinnerTypes.SpinnerSize
}

const SpinnerSizeStyled = (props: any) => {
    if (props.size && (sizeOptions[props.size as SpinnerTypes.SpinnerSize] as SpinnerTypes.SpinnerCss)) {
        const { size } = sizeOptions[props.size as SpinnerTypes.SpinnerSize]
        return css`
            --base-spinner-size: ${size}rem;
        `
    }
    return ''
}

const SpinnerVariantStyled = ({
    variant,
    brandColor,
    liteColor
}: { variant: SpinnerTypes.SpinnerVariant } & SpinnerTypes.SpinnerColorCss) => {
    return css`
        --base-spinner-brand: ${brandColor ? brandColor : variantOptions[variant].brandColor};
        --base-spinner-lite: ${liteColor ? liteColor : '#ffffff'};
    `
}

const getWidthLoader = (Loader: any, props: any) => {
    if (props.size && (Loader[props.size as SpinnerTypes.SpinnerSize] as SpinnerTypes.SpinnerBorderCss)) {
        const { liteWidth } = Loader[props.size as SpinnerTypes.SpinnerSize]
        return css`
            border-width: var(--base-spinner-lite-border-width, ${liteWidth}rem);
        `
    }
    return ''
}

export const Loader = styled.div<StyledSpinnerProps & SpinnerTypes.SpinnerColorCss & StyledProps>`
    .loader {
        border-radius: 50%;
        display: inline-block;
        position: relative;
        &-1 {
            width: var(--base-spinner-size);
            height: var(--base-spinner-size);
            border: solid var(--base-spinner-lite);
            border-bottom-color: var(--base-spinner-brand);
            animation: rotation 1s linear infinite;
            ${(props: any) => getWidthLoader(Loader1, props)}
        }

        &-2 {
            width: var(--base-spinner-size);
            height: var(--base-spinner-size);
            border: solid var(--base-spinner-lite);
            animation: rotation 1s linear infinite;
            ${(props: any) => getWidthLoader(Loader2, props)}
            &:after {
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: calc(var(--base-spinner-size) - 0.5rem);
                height: calc(var(--base-spinner-size) - 0.5rem);
                border-radius: 50%;
                border: solid transparent;
                border-bottom-color: var(--base-spinner-brand);
                ${(props: any) => getWidthLoader(Loader2, props)}
            }
        }

        &-3 {
            width: var(--base-spinner-size);
            height: var(--base-spinner-size);
            border: solid var(--base-spinner-lite);
            animation: rotation 1s linear infinite;
            ${(props: any) => getWidthLoader(Loader2, props)}
            &:after {
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: calc(var(--base-spinner-size) + 0.5rem);
                height: calc(var(--base-spinner-size) + 0.5rem);
                border-radius: 50%;
                border: solid transparent;
                border-bottom-color: var(--base-spinner-brand);
                ${(props: any) => getWidthLoader(Loader2, props)}
            }
        }
        &-4 {
            width: var(--base-spinner-size);
            height: var(--base-spinner-size);
            border: solid var(--base-spinner-lite);
            animation: rotation 1s linear infinite;
            ${(props: any) => getWidthLoader(Loader2, props)}
            &:after {
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: calc(var(--base-spinner-size) - 0.5rem);
                height: calc(var(--base-spinner-size) - 0.5rem);
                border-radius: 50%;
                border: solid;
                border-color: var(--base-spinner-brand) transparent;
                ${(props: any) => getWidthLoader(Loader2, props)}
            }
        }

        &-5 {
            width: var(--base-spinner-size);
            height: var(--base-spinner-size);
            border: solid var(--base-spinner-lite);
            animation: rotation 1s linear infinite;
            ${(props: any) => getWidthLoader(Loader2, props)}
            &:after {
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: calc(var(--base-spinner-size) + 0.5rem);
                height: calc(var(--base-spinner-size) + 0.5rem);
                border-radius: 50%;
                border: solid;
                border-color: var(--base-spinner-brand) transparent;
                ${(props: any) => getWidthLoader(Loader2, props)}
            }
        }

        &-6 {
            width: var(--base-spinner-size);
            height: var(--base-spinner-size);
            border: solid var(--base-spinner-lite);
            animation: rotation 1s linear infinite;
            ${(props: any) => getWidthLoader(Loader2, props)}
            &:after,
            &:before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                background: var(--base-spinner-brand);
                width: calc(var(--base-spinner-size) / 8);
                height: calc(var(--base-spinner-size) / 8);
                transform: translate(150%, 150%);
                border-radius: 50%;
            }
            &:before {
                left: auto;
                top: auto;
                right: 0;
                bottom: 0;
                transform: translate(-150%, -150%);
            }
        }

        &-7 {
            width: var(--base-spinner-size);
            height: var(--base-spinner-size);
            border: solid var(--base-spinner-lite);
            animation: rotation 1s linear infinite;
            ${(props: any) => getWidthLoader(Loader2, props)}
            &:after,
            &:before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                background: var(--base-spinner-brand);
                width: calc(var(--base-spinner-size) / 8);
                height: calc(var(--base-spinner-size) / 8);
                border-radius: 50%;
            }
            &:before {
                left: auto;
                top: auto;
                right: 0;
                bottom: 0;
            }
        }

        &-8 {
            width: var(--base-spinner-size);
            height: var(--base-spinner-size);
            border: solid var(--base-spinner-lite);
            animation: rotation 1s linear infinite;
            ${(props: any) => getWidthLoader(Loader2, props)}
            &:after {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                background: var(--base-spinner-brand);
                width: calc(var(--base-spinner-size) / 3);
                height: calc(var(--base-spinner-size) / 3);
                transform: translate(-50%, 50%);
                border-radius: 50%;
            }
        }

        &-9 {
            width: var(--base-spinner-size);
            height: var(--base-spinner-size);
            border: solid var(--base-spinner-brand);
            animation: rotation 1s linear infinite;
            ${(props: any) => getWidthLoader(Loader2, props)}
            &:after {
                content: '';
                position: absolute;
                left: 4px;
                top: 4px;
                border: solid var(--base-spinner-lite);
                width: calc(var(--base-spinner-size) / 4);
                height: calc(var(--base-spinner-size) / 4);
                border-radius: 50%;
                ${(props: any) => getWidthLoader(Loader2, props)}
            }
        }

        &-10 {
            width: var(--base-spinner-size);
            height: var(--base-spinner-size);
            border: solid;
            border-color: var(--base-spinner-lite) var(--base-spinner-lite) transparent;
            animation: rotation 1s linear infinite;
            ${(props: any) => getWidthLoader(Loader2, props)}
            &:after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                border: solid;
                border-color: transparent var(--base-spinner-brand) var(--base-spinner-brand);
                width: calc(var(--base-spinner-size) / 2);
                height: calc(var(--base-spinner-size) / 2);
                border-radius: 50%;
                animation: rotationBack 0.5s linear infinite;
                transform-origin: center center;
                ${(props: any) => getWidthLoader(Loader2, props)}
            }
        }
        @keyframes rotation {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        @keyframes rotationBack {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(-360deg);
            }
        }
    }
    ${SpinnerSizeStyled}
    ${SpinnerVariantStyled}
    ${(props: any) => {
        return css`
            ${props?.overrideStyled || ''}
        `
    }}
`
