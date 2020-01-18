import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';
import Loadable from '@loadable/component';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import StoreLayout from '../components/layouts/storeLayout';
import SEO from '../components/seo';
import IndefiniteLoading from '../components/loading/indefiniteLoading';

const GalleryComponent = Loadable(
  () => import('../components/gallery/galleryComponent'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const GalleryPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_gallery');
  }, []);
  return (
    <StoreLayout>
      <SEO title="Gallery - Deep Six Design" />
      <Container maxWidth="sm">
        <Box my={4}>
          <GalleryComponent></GalleryComponent>
        </Box>
      </Container>
    </StoreLayout>
  );
};

export default GalleryPage;
