import React from 'react'
import classNames from 'classnames'

interface ButtonPropArg {
    isLoading?: boolean
    loadingText?: string
    spinnerLoading?: React.ReactNode
    className?: string
}

export const ButtonLoading: React.FC<ButtonPropArg> = ({ className, loadingText, spinnerLoading }) => {
    return (
        <div className={classNames('d-inline-flex button-loading', className)}>
            <div className="loading">
                {spinnerLoading && <span className="d-inline-flex loading-spinner">{spinnerLoading}</span>}
                {loadingText && <span className="d-inline-flex loadding-text">{loadingText}</span>}
            </div>
        </div>
    )
}
