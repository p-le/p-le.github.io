import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const headerStyles = {
  marginLeft: 48,
  marginTop: 0,
  maxWidth: 720,
}

const headerAccentStyles = {
  color: "#0084FF",
}

const Header = ({ siteTitle }) => (
  <header>
    <h1 style={headerStyles}>
      Welcome to
      <br />
      <Link to="/" style={headerAccentStyles}>
        — {siteTitle}!
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
