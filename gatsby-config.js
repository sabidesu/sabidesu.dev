/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `sabi's stuff`,
    description: `a place for sabi to put it's things and thoughts`,
    twitterUsername: `@sabidesu1`,
    image: `/fullbody_ivory.png`,
    siteUrl: `https://sabidesu.dev`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
}
