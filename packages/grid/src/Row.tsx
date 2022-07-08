import React from 'react'
import classNames from 'classnames'
import { GridTypes } from './types'

export const Row = React.forwardRef<HTMLDivElement, GridTypes.BaseProps>(({ className, ...props }, ref) => {
    return (
        <div className={classNames('row', className)} ref={ref} {...props}>
            {props.children}
        </div>
    )
})

Row.displayName = 'Row'
