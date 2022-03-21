import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import YouTubeVideo from "../components/youtube"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo />
      <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
        {data.site.siteMetadata.videos.map((video) => (
          <div key={video.id} className="w-full rounded px-2">
            <YouTubeVideo id={video.id} title={video.title} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query VideoQuery {
    site {
      siteMetadata {
        videos {
          id
          title
        }
      }
    }
  }
`

export default IndexPage
