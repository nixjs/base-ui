import React from 'react'
import { useIsomorphicEffect } from './useIsomorphicEffect'

/**
 * Work as `componentDidUpdate`
 */
export function useUpdateEffect(callback: () => void | (() => void), condition: any[]) {
    const initRef = React.useRef(false)

    useIsomorphicEffect(() => {
        if (!initRef.current) {
            initRef.current = true
            return undefined
        }

        return callback()
    }, condition)
}
