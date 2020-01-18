import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import StoreLayout from '../components/layouts/storeLayout';
import SEO from '../components/seo';
import Loading from '../components/loading';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Loadable from '@loadable/component';

const GalleryComponent = Loadable(
  () => import('../components/gallery/galleryComponent'),
  {
    fallback: <Loading />,
  },
);

const IndexPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_index');
  }, []);
  return (
    <StoreLayout>
      <SEO title="Gallery" />
      <Container maxWidth="sm">
        <Box my={4}>
          <GalleryComponent></GalleryComponent>
        </Box>
      </Container>
    </StoreLayout>
  );
};

export default IndexPage;
