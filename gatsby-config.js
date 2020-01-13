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
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require('./service-account.json'),
        types: [
          {
            type: 'Products',
            collection: 'products',
            map: doc => ({
              title: doc.title,
              product___NODE: doc.id,
            }),
          },
        ],
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
        display: `fullscreen`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
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
          apiKey: 'AIzaSyDPXTzBCOsuTu8-4J39dN5GcLoe3s8CrBI',
          authDomain: 'plexus-1d216.firebaseapp.com',
          databaseURL: 'https://plexus-1d216.firebaseio.com',
          projectId: 'plexus-1d216',
          storageBucket: 'plexus-1d216.appspot.com',
          messagingSenderId: '602861693791',
          appId: '1:602861693791:web:f961d42e4ee8ffac76a4ea',
          measurementId: 'G-XQ871X0RD7',
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/src/models/`],
      },
    },
  ],
};
