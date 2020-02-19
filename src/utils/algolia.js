const trelloQuery = ` {
  allTrelloCard(filter: {idList: {eq: "5e4b53931673f76d1b4fa085"}}) {
    edges {
      node {
        objectID: id
        name
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
    query: trelloQuery,
    transformer: ({ data }) => flatten(data.allTrelloCard.edges),
    indexName: process.env._GATSBY_ALGOLIA_INDEX_NAME,
    settings,
  },
];

module.exports = queries;
