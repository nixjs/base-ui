import * as React from 'react'
import classNames from 'classnames'
import { Props, Utils } from '@nixjs23n6/baseui-core'

const DEFAULT_FOOTER_TAG = 'footer' as const

export const Footer = Utils.forwardRefWithAs(function Footer<TTag extends React.ElementType = typeof DEFAULT_FOOTER_TAG>(
    props: Props<TTag, {}>,
    ref: React.Ref<HTMLElement>
) {
    const { as: Tag, children, className } = props

    return React.createElement(
        (Tag as React.ElementType) || DEFAULT_FOOTER_TAG,
        {
            className: classNames('base-modal-footer', className),
            ref,
            id: 'footer'
        },
        children as React.ReactNode
    )
})

Footer.displayName = 'Modal.Footer'
