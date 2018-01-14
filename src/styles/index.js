import styled, { injectGlobal } from 'styled-components'

injectGlobal`
    body {
        margin: auto;
        padding: 0;
        font-family: sans-serif;
        text-align: center;
    }
`

export const CenteredText = styled.div`
    text-align: center;
`
