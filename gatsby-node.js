const path = require(`path`);
const slug = require('slug');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allProcesses {
        edges {
          node {
            id
            title
            step
            slug
            definition
            synonyms
          }
        }
      }
      allStripeSku {
        edges {
          node {
            fields {
              slug
            }
            product {
              id
              name
            }
          }
        }
      }
    }
  `);
  result.data.allProcesses.edges.forEach(({ node }) => {
    console.log(node);
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/process.js`),
      context: {
        slug: node.slug,
      },
    });
  });

  const products = {};

  result.data.allStripeSku.edges.forEach(({ node }) => {
    products[node.product.id] = node.fields.slug;
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

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/*';

    createPage(page);
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Add slug for page generation.
  if (node.internal.type === 'StripeSku') {
    const value = slug(
      node.product.name,
      slug.defaults.modes['rfc3986'],
    );
    createNodeField({
      node,
      name: 'slug',
      value,
    });
  }
};
