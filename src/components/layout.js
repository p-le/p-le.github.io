import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const pageMainStyles = {
  color: "#232129",
  padding: `0 96`,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const pageFooterStyles = {
  marginTop: `2rem`,
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main style={pageMainStyles}>{children}</main>
        <footer style={pageFooterStyles}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.youtube.com/c/FullstacKAGE">FullstacKAGE</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
