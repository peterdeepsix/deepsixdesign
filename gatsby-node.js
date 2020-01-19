const path = require(`path`);
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
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
