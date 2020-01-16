import React from 'react';
import { graphql } from 'gatsby';

import AppLayout from '../components/layouts/appLayout';
import StoreLayout from '../components/layouts/storeLayout';
import SEO from '../components/seo';
import Loading from '../components/loading';

import Loadable from '@loadable/component';

const ProcessComponent = Loadable(
  () => import('../components/process/processComponent'),
  {
    fallback: <Loading />,
  },
);

export const query = graphql`
  query($slug: String!) {
    allProcesses(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          slug
          title
          step
          definition
          synonyms
        }
      }
    }
  }
`;

export default ({ data }) => {
  return (
    <AppLayout>
      <StoreLayout>
        <SEO title="Timeline" />
        <ProcessComponent data={data} />
      </StoreLayout>
    </AppLayout>
  );
};
