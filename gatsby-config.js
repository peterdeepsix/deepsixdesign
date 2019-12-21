module.exports = {
    siteMetadata: {
        title: `Deep Six Design`,
        description: `Take me there.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `models`,
                path: `${__dirname}/src/models`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Deep Six Design`,
                short_name: `Deep Six`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#FF1654`,
                display: `minimal-ui`,
                icon: `src/images/logo.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
              precachePages: [`/`, `/objects/`, `/poses/`],
            },
          },
    ],
}
