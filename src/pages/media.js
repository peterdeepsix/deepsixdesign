import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import DefaultLayout from '../layouts/defaultLayout';
import SEO from '../components/seo';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Media = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_media');
  }, []);
  return (
    <DefaultLayout>
      <SEO title="Media" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="body1">Media</Typography>
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default Media;
