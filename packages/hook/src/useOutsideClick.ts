import React from 'react'

type Handler = (event: MouseEvent) => void

export function useOutsideClick<T extends HTMLElement = HTMLElement>(boxRef: React.RefObject<T>, callbackFunction: Handler): void {
    const handleClickOutside = React.useCallback(
        (event: any) => {
            if (boxRef.current && !boxRef.current.contains(event.target)) {
                callbackFunction(event)
            }
        },
        [boxRef, callbackFunction]
    )

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    })
}
