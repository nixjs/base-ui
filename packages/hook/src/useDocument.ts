import React from 'react'

function getOwnerDocument<T extends Element | React.MutableRefObject<Element | null>>(element: T | null | undefined) {
    if (typeof window === 'undefined') return null
    if (element instanceof Node) return element.ownerDocument
    if (element && Object.prototype.hasOwnProperty.call(element, 'current')) {
        if (element.current instanceof Node) return element.current.ownerDocument
    }

    return document
}

export function useDocument(...args: Parameters<typeof getOwnerDocument>) {
    return React.useMemo(() => getOwnerDocument(...args), [...args])
}
