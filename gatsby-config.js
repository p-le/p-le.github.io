module.exports = {
  siteMetadata: {
    title: `FullstacKAGE Service Hub`,
    author: "Phu Le",
    description:
      "Phu is a DevOps Practioner, Cloud Infrastructure Engineer, and Youtube Content Creator. He lives in Tokyo, Japan",
    siteUrl: `https://fullstackage.phu-le.dev`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-2D3TYLWCEF",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}
