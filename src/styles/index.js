import styled, { injectGlobal } from "styled-components"

injectGlobal`
    body {
        margin: auto;
        padding: 0;
        font-family: sans-serif;
        text-align: center;
    }
`

export const RecipePanel = styled.div`
  .Collapsible__contentInner {
    padding: 10px;
    border: 1px solid #ebebeb;
    border-top: 0;
  }
  .Collapsible__contentInner p {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 20px;
  }
  .Collapsible__contentInner p:last-child {
    margin-bottom: 0;
  }
  .Collapsible__trigger {
    display: block;
    font-weight: 400;
    text-decoration: none;
    color: #333333;
    position: relative;
    border: 1px solid white;
    padding: 10px;
    background: #00ac9d;
    color: white;
  }
  .Collapsible__trigger:after {
    font-family: "FontAwesome";
    content: "\f107";
    position: absolute;
    right: 10px;
    top: 10px;
    display: block;
    transition: transform 300ms;
  }
  .Collapsible__trigger.is-open:after {
    transform: rotateZ(180deg);
  }
  .Collapsible__trigger.is-disabled {
    opacity: 0.5;
    background-color: grey;
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
