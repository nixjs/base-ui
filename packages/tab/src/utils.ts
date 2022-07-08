import * as React from 'react'

export function getPreviousTab(active: number, tabs: React.MutableRefObject<HTMLElement | null>[]) {
    if (active === 0) return tabs.length - 1
    for (let i = active - 1; i >= 0; i -= 1) {
        if (!(tabs[i].current as any)?.disabled) {
            return i
        }
    }
    return active
}

export function getNextTab(active: number, tabs: React.MutableRefObject<HTMLElement | null>[]) {
    if (tabs.length === active + 1) return 0
    for (let i = active + 1; i < tabs.length; i += 1) {
        if (!(tabs[i].current as any)?.disabled) {
            return i
        }
    }
    return active
}
