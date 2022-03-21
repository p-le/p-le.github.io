import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const headerStyles = {
  marginLeft: `auto`,
  marginRight: `auto`,
  maxWidth: `1280px`,
  paddingLeft: `32px`,
  paddingRight: `32px`,
  paddingTop: `24px`,
  paddingBottom: `24px`,
}

const headerAccentStyles = {
  color: "#0084FF",
  textDecoration: "none",
  fontWeight: "bold",
}

const Header = ({ siteTitle }) => (
  <header>
    <h1 style={headerStyles}>
      Welcome to,
      <br />
      <Link to="/" style={headerAccentStyles}>
        {siteTitle}!
      </Link>
      <span role="img" aria-label="Party popper emojis">
        🎉🎉🎉
      </span>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
