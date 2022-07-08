import * as React from 'react'
import { Utils, Props } from '@nixjs23n6/baseui-core'
import { useSyncRefs } from '@nixjs23n6/baseui-hook'
import { useTab } from './useTab'

const DEFAULT_LIST_TAG = 'div' as const

export interface ListRenderPropArg {}

export type ListPropsWeControl = 'id' | 'role' | 'aria-orientation'

export const List = Utils.forwardRefWithAs(function List<TTag extends React.ElementType = typeof DEFAULT_LIST_TAG>(
    props: Props<TTag, ListRenderPropArg & ListPropsWeControl>,
    ref: React.Ref<HTMLElement>
) {
    const { orientation } = useTab()
    const listRef = useSyncRefs(ref)

    const theirProps = props

    const ourProps = { ref: listRef, className: 'tab-list', 'aria-orientation': orientation, role: 'tablist' }

    const slot = React.useMemo<ListRenderPropArg>(() => ({}), [])

    return Utils.render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_LIST_TAG,
        name: 'Tabs.List'
    })
})
