import * as React from 'react'
import { Utils, Props } from '@nixjs23n6/baseui-core'
import { useSyncRefs } from '@nixjs23n6/baseui-hook'

const DEFAULT_PANELS_TAG = 'div' as const
export interface PanelsRenderPropArg {}

export const Panels = Utils.forwardRefWithAs(function Panels<TTag extends React.ElementType = typeof DEFAULT_PANELS_TAG>(
    props: Props<TTag, PanelsRenderPropArg>,
    ref: React.Ref<HTMLElement>
) {
    const internalPanelRef = React.useRef<HTMLElement>(null)
    const panelsRef = useSyncRefs(internalPanelRef, ref)

    const theirProps = props

    const ourProps = { ref: panelsRef, className: 'tabs-panels' }

    const slot = React.useMemo<PanelsRenderPropArg>(() => ({}), [])

    return Utils.render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_PANELS_TAG,
        name: 'Tabs.Panels'
    })
})
