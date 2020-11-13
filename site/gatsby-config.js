/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/`,
      },
    },
    `@chakra-ui/gatsby-plugin`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
