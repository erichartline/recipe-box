import React from "react"
import FontAwesome from "react-fontawesome"

const Footer = () => {
  return (
    <div>
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
          freeCodeCamp
        </a>{" "}
        project. <FontAwesome name="rocket" />
      </p>
    </div>
  )
}

export default Footer
