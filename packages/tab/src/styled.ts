import styled, { css } from 'styled-components'
import { StyledProps } from '@nixjs23n6/baseui-core'

export const TabsStyled = styled.div<StyledProps>`
    ${(props: any) => {
        return css`
            ${props?.overrideStyled || ''}
        `
    }}
`
