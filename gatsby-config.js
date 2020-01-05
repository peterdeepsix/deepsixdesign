require('dotenv').config();
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
      resolve: 'gatsby-plugin-firebase',
      options: {
        features: {
          auth: true,
          database: false,
          firestore: true,
          storage: true,
          messaging: true,
          functions: true,
          performance: true,
          analytics: true,
        },
        credentials: {
          apiKey: process.env._GATSBY_FIREBASE_API_KEY,
          authDomain: process.env._GATSBY_GATSBY_FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env._GATSBY_FIREBASE_DATABASE_URL,
          projectId: process.env._GATSBY_FIREBASE_PROJECT_ID,
          storageBucket: process.env._GATSBY_FIREBASE_STORAGE_BUCKET,
          messagingSenderId:
            process.env._GATSBY_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env._GATSBY_FIREBASE_APP_ID,
          measurementId: process.env._GATSBY_FIREBASE_MEASUREMENT_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/objects/`, `/poses/`],
      },
    },
  ],
};
