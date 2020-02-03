var proxy = require('http-proxy-middleware');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Deep Six Design`,
    description: `Take me there.`,
    author: `peter@deepsixdesign.com`,
  },
  plugins: [
    'gatsby-plugin-root-import',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`muli`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require('./service-account.json'),
        types: [
          {
            type: 'processes',
            collection: 'processes',
            map: doc => ({
              title: doc.title,
              step: doc.step,
              definition: doc.definition,
              synonyms: doc.synonyms,
              slug: doc.slug,
              process___NODE: doc.id,
            }),
          },
        ],
      },
    },
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
          apiKey: process.env._F_APIKEY,
          authDomain: process.env._F_AUTHDOMAIN,
          databaseURL: process.env._F_DATABASEURL,
          projectId: process.env._F_PROJECTID,
          storageBucket: process.env._F_STORAGEBUCKET,
          messagingSenderId: process.env._F_MESSAGINGSENDERID,
          appId: process.env._F_APPID,
          measurementId: process.env._F_MEASUREMENTID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-stripe`,
      options: {
        async: true,
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Product', 'Sku'],
        secretKey: process.env._STRIPE_SECRET_KEY,
        downloadFiles: true,
        auth: false,
      },
    },
  ],
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      }),
    );
  },
};
