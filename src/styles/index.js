import styled, { injectGlobal } from 'styled-components'

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`

export const CenteredText = styled.div`
    text-align: center;
`
