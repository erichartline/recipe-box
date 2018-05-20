import styled, { injectGlobal } from "styled-components"
import Card from "material-ui/Card"
import TextField from "material-ui/TextField"
import "typeface-roboto"

injectGlobal`
    body {
        margin: auto;
        padding: 0;
        text-align: center;
        width: 80%;
        background-color: #c7c7c7;
    }
`

export const FooterContainer = styled.div`
  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }
`

export const TextBoxStyle = styled(TextField)`
  && {
    width: 50%;
    padding-left: 5px;
    margin-right: 5px;
  }
`

export const BackdropStyle = styled.div`
   {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 50px;
  }
`

export const ModalStyle = styled.div`
   {
    background-color: #fff;
    border-radius: 5px;
    width: 50%;
    height: 300px;
    margin: 0 auto;
    padding: 30px;
    z-index: 1;
  }
`

export const CardStyle = styled(Card)`
  && {
    min-height: 300px;
  }
`
