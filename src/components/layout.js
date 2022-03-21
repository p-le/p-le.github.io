import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const pageMainStyles = {
  flex: "1 0 auto",
}

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
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
      <div style={containerStyles}>
        <Header siteTitle={data.site.siteMetadata?.title || `title`} />
        <main style={pageMainStyles}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
