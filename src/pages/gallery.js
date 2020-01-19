import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';
import Loadable from '@loadable/component';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import StoreLayout from '../layouts/storeLayout';
import SEO from '../components/seo';
import IndefiniteLoading from '../components/loading/indefiniteLoading';

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const GalleryComponent = Loadable(
  () => import('../components/gallery/galleryComponent'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const GalleryPage = () => {
  const classes = useStyles();
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_gallery');
  }, []);
  return (
    <StoreLayout>
      <SEO title="Gallery - Deep Six Design" />
      <Container maxWidth="lg" className={classes.container}>
        <Box my={4}>
          <GalleryComponent></GalleryComponent>
        </Box>
      </Container>
    </StoreLayout>
  );
};

export default GalleryPage;
