import * as React from "react"

const footerStyles = {
  width: `100%`,
  marginLeft: `auto`,
  marginRight: `auto`,
  maxWidth: `1280px`,
  paddingLeft: `32px`,
  paddingRight: `32px`,
  paddingTop: `24px`,
  paddingBottom: `24px`,
}

const linkStyle = {
  textDecoration: "none",
  color: "#0084FF",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const Footer = () => (
  <footer style={footerStyles}>
    <p align="center">
      <a href="https://www.youtube.com/c/FullstacKAGE" target="_blank" rel="noreferrer">
        <img
          alt="FullstacKAGE | Youtube"
          width="48px"
          src="https://raw.githubusercontent.com/p-le/p-le/main/assets/youtube.svg"
        />
      </a>
      <a href="https://www.facebook.com/fullstackage" target="_blank" rel="noreferrer">
        <img
          alt="FullstacKAGE | Facebook"
          width="48px"
          src="https://raw.githubusercontent.com/p-le/p-le/main/assets/facebook.svg"
        />
      </a>
      <a href="https://fullstackage.medium.com" target="_blank" rel="noreferrer">
        <img
          alt="FullstacKAGE | Medium"
          width="48px"
          src="https://raw.githubusercontent.com/p-le/p-le/main/assets/medium.svg"
        />
      </a>
    </p>
    <p align="center">
      <a href="https://www.youtube.com/c/FullstacKAGE" style={linkStyle}>
        Built by FullstacKAGE
      </a>
    </p>
  </footer>
)

export default Footer
