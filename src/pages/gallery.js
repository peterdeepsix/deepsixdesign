import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import DefaultLayout from '../components/layouts/defaultLayout';
import SEO from '../components/seo';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const IndexPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_index');
  }, []);
  return (
    <DefaultLayout>
      <SEO title="Deep Six Design" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h1">Gallery</Typography>
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default IndexPage;
