import React from 'react'
import styled, { css } from 'styled-components'
import { StyledProps } from '@nixjs23n6/baseui-core'

interface StyledPaginationProps {
    ref?: React.Ref<HTMLElement>
    as?: keyof JSX.IntrinsicElements
    className?: string
}

export const PaginationStyled = styled.div<StyledPaginationProps & StyledProps>`
    .pagination-content {
        background: red;
    }
    .pagination-item {
        background: green;
    }
    ${(props: any) => {
        return css`
            ${props?.overrideStyled || ''}
        `
    }}
`
