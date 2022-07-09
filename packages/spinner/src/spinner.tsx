import React from 'react'
import classNames from 'classnames'
import { SpinnerTypes } from './types'
import { Loader } from './styled'

interface SpinnerPropArg {
    variant?: SpinnerTypes.SpinnerVariant
    content?: SpinnerTypes.SpinnerContent
    size?: SpinnerTypes.SpinnerSize
}

export const Spinner: React.FC<SpinnerPropArg & SpinnerTypes.SpinnerColorCss> = ({
    content = 'loader-1',
    variant = 'primary',
    size = 'md',
    brandColor,
    liteColor
}) => {
    return (
        <Loader variant={variant} size={size} brandColor={brandColor} liteColor={liteColor}>
            <div className={classNames('loader', content)} />
        </Loader>
    )
}

Spinner.displayName = 'Spinner'
