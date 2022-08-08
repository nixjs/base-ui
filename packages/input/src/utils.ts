export const getRangeValue = (target: string, max?: number | string) => {
    // target > max
    const tLen = target.length
    if (typeof max !== 'undefined') {
        const mx = Number(max)
        if (tLen >= mx) {
            return target.slice(0, mx)
        }
    }

    return null
}

export const isNaN = (str: string | number | null | undefined) => {
    if (typeof str === 'undefined' || str === null) return true
    return false
}

export const fixControlledValue = (value: string | number | null | undefined): string => {
    if (isNaN(value)) {
        return ''
    }
    return String(value)
}
