import styled, { injectGlobal } from "styled-components"

injectGlobal`
    body {
        margin: auto;
        padding: 0;
        font-family: sans-serif;
        text-align: center;
        width: 80%;
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

export const TextBoxStyle = styled.textarea`
  width: 50%;
  padding-left: 5px;
  margin-right: 5px;
`

export const InputBoxStyle = styled.input`
  width: 50%;
  padding-left: 5px;
  margin-right: 5px;
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
  }
`
