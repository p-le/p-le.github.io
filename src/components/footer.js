import * as React from "react"

const copyrightStyle = {
  textDecoration: `none`,
  color: `#FFFFFF`,
  fontWeight: `bold`,
  verticalAlign: `5%`,
}

const Footer = () => (
  <footer>
    <div className="flex justify-center items-center">
      <span>
        <a href="https://www.youtube.com/c/FullstacKAGE" target="_blank" rel="noreferrer">
          <img
            alt="FullstacKAGE | Youtube"
            width="48px"
            src="https://raw.githubusercontent.com/p-le/p-le/main/assets/youtube.svg"
          />
        </a>
      </span>
      <span>
        <a href="https://www.facebook.com/fullstackage" target="_blank" rel="noreferrer">
          <img
            alt="FullstacKAGE | Facebook"
            width="48px"
            src="https://raw.githubusercontent.com/p-le/p-le/main/assets/facebook.svg"
          />
        </a>
      </span>
      <span>
        <a href="https://fullstackage.medium.com" target="_blank" rel="noreferrer">
          <img
            alt="FullstacKAGE | Medium"
            width="48px"
            src="https://raw.githubusercontent.com/p-le/p-le/main/assets/medium.svg"
          />
        </a>
      </span>
    </div>
    <p align="center">
      <span style={copyrightStyle}>All Content @ Phu Le (FullstacKAGE)</span>
    </p>
  </footer>
)

export default Footer
