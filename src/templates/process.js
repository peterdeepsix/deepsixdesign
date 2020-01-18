import React from 'react';
import { graphql } from 'gatsby';
import { useFirebase } from 'gatsby-plugin-firebase';
import Loadable from '@loadable/component';

import StoreLayout from '../components/layouts/storeLayout';
import SEO from '../components/seo';
import IndefiniteLoading from '../components/loading/indefiniteLoading';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const ProcessComponent = Loadable(
  () => import('../components/process/processComponent'),
  {
    fallback: <IndefiniteLoading />,
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
  const node = data.allProcesses.edges[0].node;
  useFirebase(firebase => {
    firebase.analytics().logEvent(`visited_${node.slug}`);
  }, []);
  return (
    <StoreLayout>
      <SEO title="Timeline - Deep Six Design" />
      <Container maxWidth="sm">
        <Box my={4}>
          <ProcessComponent data={data} />
        </Box>
      </Container>
    </StoreLayout>
  );
};
