import * as React from 'react'
import classNames from 'classnames'
import { Props, Utils } from '@nixjs23n6/baseui-core'

const DEFAULT_HEADER_TAG = 'header' as const

export const Header = Utils.forwardRefWithAs(function Header<TTag extends React.ElementType = typeof DEFAULT_HEADER_TAG>(
    props: Props<TTag, {}>,
    ref: React.Ref<HTMLElement>
) {
    const { as: Tag, children, className } = props
    return React.createElement(
        (Tag as React.ElementType) || DEFAULT_HEADER_TAG,
        {
            className: classNames('base-modal-header', className),
            ref,
            id: 'header'
        },
        children as React.ReactNode
    )
})

Header.displayName = 'Modal.Header'
