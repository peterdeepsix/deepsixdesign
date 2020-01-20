import React from 'react';
import Loadable from '@loadable/component';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import StoreLayout from 'src/layouts/storeLayout';
import SEO from 'src/components/seo';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const GalleryComponent = Loadable(
  () => import('src/components/gallery/galleryComponent'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const GalleryPage = () => {
  const classes = useStyles();
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
