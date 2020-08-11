/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name: `src`,
        path:`${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stanley Garbo - Portfolio`,
        short_name: `Garbo`,
        start_url: `/`,
        background_color: `rgb(0,11,32)`,
        theme_color: `rgb(0,11,32)`,
        display: `standalone`,
      },
    }
  ],
}
