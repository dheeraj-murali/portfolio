/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Dheeraj Murali`,
    description: `Web designer and Front-end developer, who loves crafting fast and easy to use web applications.`,
    author: `@_mdrj`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dheeraj Murali | Digital product developer`,
        short_name: `Dheeraj Murali`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-offline`,
  ],
}
