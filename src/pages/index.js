import React from 'react';
import { graphql } from 'gatsby';
import Loadable from '@loadable/component';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const IndexComponent = Loadable(
  () => import('src/components/index/indexComponent'),
  {
    fallback: <IndefiniteLoading message="IndexComponent" />,
  },
);

const MainLayout = Loadable(() => import('src/layouts/mainLayout'), {
  fallback: <IndefiniteLoading message="MainLayout" />,
});

const IndexPage = ({ data, location }) => {
  return (
    <MainLayout location={location}>
      <IndexComponent data={data} />
    </MainLayout>
  );
};

export const query = graphql`
  query TrelloQuery {
    allTrelloList(
      filter: { id: { eq: "5e4b53931673f76d1b4fa085" } }
    ) {
      edges {
        node {
          id
          name
          cards {
            id
            name
          }
        }
      }
    }
  }
`;

export default IndexPage;
