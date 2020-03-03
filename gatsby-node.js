const path = require(`path`);
const slug = require('slug');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allStripeSku {
        edges {
          node {
            product {
              id
              name
            }
          }
        }
      }
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
    }
  `);

  const products = {};

  result.data.allContentfulProduct.edges.forEach(({ node }) => {
    products[node.stripeId] = node.slug;
  });

  const productTemplate = path.resolve('src/templates/product.js');
  Object.entries(products).forEach(([id, slug]) => {
    createPage({
      path: 'buy/' + slug,
      component: productTemplate,
      context: { id },
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'ContentfulProduct') {
    const value = slug(node.slug, slug.defaults.modes['rfc3986']);
    createNodeField({
      node,
      name: 'slug',
      value,
    });
  }
};
