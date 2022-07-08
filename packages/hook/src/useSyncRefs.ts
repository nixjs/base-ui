import React from 'react'

const Optional = Symbol()

export function optionalRef<T>(cb: (ref: T) => void, isOptional = true) {
    return Object.assign(cb, { [Optional]: isOptional })
}

export function useSyncRefs<TType>(...refs: (React.MutableRefObject<TType | null> | ((instance: TType) => void) | null)[]) {
    const cache = React.useRef(refs)

    React.useEffect(() => {
        cache.current = refs
    }, [refs])

    const syncRefs = React.useCallback(
        (value: TType) => {
            for (const ref of cache.current) {
                if (ref == null) continue
                if (typeof ref === 'function') ref(value)
                else ref.current = value
            }
        },
        [cache]
    )

    return refs.every((ref) => ref == null || (ref as any)[Optional]) ? undefined : syncRefs
}
