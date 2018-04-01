import React from "react"
import FontAwesome from "react-fontawesome"
import { FooterContainer } from "../styles"

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Written and coded by{" "}
        <a
          href="http://www.erichartline.net"
          rel="noopener noreferrer"
          target="_blank"
        >
          Eric Hartline
        </a>. <br />
        A{" "}
        <a
          href="http://www.freecodecamp.org/"
          rel="noopener noreferrer"
          target="_blank"
        >
          freeCodeCamp <FontAwesome name="free-code-camp" />
        </a>{" "}
        project.
      </p>
    </FooterContainer>
  )
}

export default Footer
