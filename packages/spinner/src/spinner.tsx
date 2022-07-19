import React from 'react'
import classNames from 'classnames'
import { StyledProps } from '@nixjs23n6/baseui-core'
import { SpinnerTypes } from './types'
import { Loader } from './styled'

interface SpinnerPropArg {
    className?: string
    variant?: SpinnerTypes.SpinnerVariant
    content?: SpinnerTypes.SpinnerContent
    size?: SpinnerTypes.SpinnerSize
}

export const Spinner: React.FC<SpinnerPropArg & SpinnerTypes.SpinnerColorCss & StyledProps> = ({
    className,
    content = 'loader-1',
    variant = 'primary',
    size = 'md',
    brandColor,
    liteColor,
    overrideStyled
}) => {
    return (
        <Loader
            variant={variant}
            size={size}
            brandColor={brandColor}
            liteColor={liteColor}
            className={className}
            overrideStyled={overrideStyled}
        >
            <div className={classNames('loader', content)} />
        </Loader>
    )
}

Spinner.displayName = 'Spinner'
