import * as React from 'react'
import classNames from 'classnames'
import { Props, Utils } from '@nixjs23n6/baseui-core'

const DEFAULT_BODY_TAG = 'main' as const

export const Body = Utils.forwardRefWithAs(function Body<TTag extends React.ElementType = typeof DEFAULT_BODY_TAG>(
    props: Props<TTag, {}>,
    ref: React.Ref<HTMLElement>
) {
    const { as: Tag, children, className } = props

    return React.createElement(
        (Tag as React.ElementType) || DEFAULT_BODY_TAG,
        {
            className: classNames('base-modal-header', className),
            ref,
            id: 'main'
        },
        children as React.ReactNode
    )
})

Body.displayName = 'Modal.Body'
