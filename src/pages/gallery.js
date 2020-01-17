import React from 'react';
import { graphql } from 'gatsby';
import { useFirebase } from 'gatsby-plugin-firebase';

import StoreLayout from '../components/layouts/storeLayout';
import SEO from '../components/seo';
import Loading from '../components/loading';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Loadable from '@loadable/component';

const GalleryComponent = Loadable(
  () => import('../components/gallery/galleryComponent'),
  {
    fallback: <Loading />,
  },
);

// export const query = graphql`
//   query TimelinePageQuery {
//     allProcesses(sort: { fields: step }) {
//       edges {
//         node {
//           id
//           slug
//           title
//           step
//           definition
//           synonyms
//         }
//       }
//     }
//   }
// `;

const IndexPage = ({ data }) => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_index');
  }, []);
  return (
    <StoreLayout>
      <SEO title="Gallery" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4">Gallery</Typography>
        </Box>
      </Container>
    </StoreLayout>
  );
};

export default IndexPage;
