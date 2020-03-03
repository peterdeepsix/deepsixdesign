const contentfulQuery = ` {
  allContentfulProduct {
    edges {
      node {
        stripeId
        title {
          title
        }
        slug
        rating
        shortOverview {
          content {
            content {
              value
            }
          }
        }
        overview {
          content {
            content {
              value
            }
          }
        }
        media {
          title
          resolutions {
            src
          }
        }
        details
        description {
          content {
            content {
              value
            }
          }
        }
        breadcrumb {
          breadcrumb
        }
      }
    }
  }
  }`;

const flatten = arr =>
  arr.map(({ node: { ...rest } }) => ({
    ...rest,
  }));
const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
  {
    query: contentfulQuery,
    transformer: ({ data }) =>
      flatten(data.allContentfulProduct.edges),
    indexName: process.env._GATSBY_ALGOLIA_INDEX_NAME,
    settings,
  },
];

module.exports = queries;
