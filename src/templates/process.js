import React from 'react';
import { graphql } from 'gatsby';
import Loadable from '@loadable/component';
import IndefiniteLoading from '../components/loading/indefiniteLoading';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const ProcessComponent = Loadable(
  () => import('../components/process/processComponent'),
  {
    fallback: <IndefiniteLoading message="IndefiniteLoading" />,
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
  return (
    <>
      <Container maxWidth="sm">
        <Box my={4}>
          <ProcessComponent data={data} />
        </Box>
      </Container>
    </>
  );
};
