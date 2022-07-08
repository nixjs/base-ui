import React from 'react'
import classNames from 'classnames'
import { GridTypes } from './types'

const getColumnSizeClass = (isXs: boolean, colWidth: GridTypes.StringOrNumberValue, colSize: GridTypes.BooleanOrStringOrNumberValue) => {
    if (colSize === true || colSize === '') {
        return isXs ? 'col' : `col-${colWidth}`
    }
    if (colSize === 'auto') {
        return isXs ? 'col-auto' : `col-${colWidth}-auto`
    }

    return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`
}

export const colWidths = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']

export const Col = React.forwardRef<HTMLDivElement, GridTypes.ColProps>((props, ref) => {
    const { className, widths = colWidths, children, ...attributes } = props
    const colClasses = []

    widths.forEach((colWidth: string, i: number) => {
        const columnProp = (props as any)[colWidth]

        delete (attributes as any)[colWidth]

        if (!columnProp && columnProp !== '') {
            return
        }

        const isXs = !i

        if (typeof columnProp === 'object') {
            const colSizeInterfix = isXs ? '-' : `-${colWidth}-`
            const colClass = getColumnSizeClass(isXs, colWidth, columnProp.size)

            colClasses.push(
                classNames({
                    [colClass]: columnProp.size || columnProp.size === '',
                    [`order${colSizeInterfix}${columnProp.order}`]: columnProp.order || columnProp.order === 0,
                    [`offset${colSizeInterfix}${columnProp.offset}`]: columnProp.offset || columnProp.offset === 0
                })
            )
        } else {
            const colClass = getColumnSizeClass(isXs, colWidth, columnProp)
            colClasses.push(colClass)
        }
    })

    if (!colClasses.length) {
        colClasses.push('col')
    }

    const classes = classNames(className, colClasses)

    return (
        <div {...attributes} className={classes} ref={ref}>
            {children}
        </div>
    )
})

Col.displayName = 'Col'
