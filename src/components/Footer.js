import React from "react"
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
        </a>.
      </p>
    </FooterContainer>
  )
}

export default Footer
