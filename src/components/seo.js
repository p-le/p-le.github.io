import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const { defaultTitle, defaultDescription, siteUrl, author } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet
      title={seo.title}
      bodyAttributes={{
        class: "bg-gradient-to-r to-pink-500 via-purple-500 from-indigo-500",
      }}
    >
      <meta name="description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Personal",
          "url": "${seo.url}",
          "name": "${seo.title}",
          "author": {
            "@type": "Person",
            "name": "${author}"
          },
        }`}
      </script>
    </Helmet>
  )
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: siteUrl
        author: author
      }
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
}
