import React from 'react'
import classNames from 'classnames'
import { PaginationItemPropArg, DOTS, usePagination } from './usePagination'
import { Utils, Props, StyledProps } from '@nixjs23n6/baseui-core'
import { useSyncRefs } from '@nixjs23n6/baseui-hook'
import { PaginationStyled } from './styled'

const DEFAULT_PAGINATION_ROOT = 'div' as const

export interface PaginationPropArg {}

export const Pagination = Utils.forwardRefWithAs(function List<TTag extends React.ElementType = typeof DEFAULT_PAGINATION_ROOT>(
    props: Props<TTag, PaginationPropArg> & {
        page?: number
        initialPage: number
        total: number
        dotsJump?: number
        siblings?: number
        boundaries?: number
        withControls?: boolean
        withEdges?: boolean
        prevControlLabel?: React.ReactNode
        nextControlLabel?: React.ReactNode
        firstEdgeLabel?: React.ReactNode
        lastEdgeLabel?: React.ReactNode
        loop?: boolean
        onChange?: (page: number) => void
    } & StyledProps,
    ref: React.Ref<HTMLElement>
) {
    const {
        as: Tag = DEFAULT_PAGINATION_ROOT,
        page,
        initialPage,
        total,
        dotsJump = 5,
        siblings = 1,
        boundaries = 1,
        withControls = true,
        withEdges = true,
        prevControlLabel,
        nextControlLabel,
        firstEdgeLabel,
        lastEdgeLabel,
        loop = false,
        overrideStyled
    } = props

    const { range, active, setPage, previous, next, first, last } = usePagination({
        page,
        initialPage,
        total,
        siblings,
        boundaries
    })

    const paginationRef = useSyncRefs(ref)

    const renderItem = React.useCallback(
        (value: PaginationItemPropArg, index: number) => {
            if (value === DOTS) {
                const isBefore = index < range.indexOf(active)
                return (
                    <button
                        type="button"
                        tabIndex={0}
                        key={`pagination-item-dot-${value}-${index}`}
                        className="pagination-item pagination-item-dot"
                        onClick={() =>
                            isBefore
                                ? setPage(active - dotsJump >= 1 ? active - dotsJump : 1)
                                : setPage(active + dotsJump <= total ? active + dotsJump : total)
                        }
                    >
                        ...
                    </button>
                )
            }
            return (
                <button
                    type="button"
                    tabIndex={0}
                    key={`pagination-item-number-${value}-${index}`}
                    onClick={() => value !== active && setPage(value)}
                    className={classNames('pagination-item pagination-item-number', {
                        active: value === active
                    })}
                >
                    {value}
                </button>
            )
        },
        [total, active]
    )

    const onPrevious = () => {
        if (loop && active === 1) {
            return last()
        }
        return previous()
    }

    const onNext = () => {
        if (loop && active === total) {
            return first()
        }
        return next()
    }

    const theirProps = Utils.omit(props, ['allowKeyboard', 'page', 'initialPage', 'total', 'onChange'])
    const ourProps = {
        ref: paginationRef,
        className: 'pagination-container',
        as: PaginationStyled.withComponent(Tag),
        overrideStyled,
        children: (
            <div className="pagination-content">
                {withEdges && (
                    <button type="button" aria-label="First" onClick={first} disabled={active === 1}>
                        {firstEdgeLabel || <span aria-hidden="true">«</span>}
                    </button>
                )}
                {withControls && (
                    <button type="button" aria-label="Previous" onClick={onPrevious} disabled={!loop && active === 1}>
                        {prevControlLabel || '‹'}
                    </button>
                )}
                {range.map(renderItem)}
                {withControls && (
                    <button type="button" aria-label="Next" onClick={onNext} disabled={!loop && active === total}>
                        {nextControlLabel || '›'}
                    </button>
                )}
                {withEdges && (
                    <button type="button" aria-label="Last" onClick={last} disabled={active === total}>
                        {lastEdgeLabel || <span aria-hidden="true">»</span>}
                    </button>
                )}
            </div>
        )
    }

    const slot = React.useMemo<any>(() => ({}), [])

    return Utils.render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_PAGINATION_ROOT,
        name: 'Pagination'
    })
})
