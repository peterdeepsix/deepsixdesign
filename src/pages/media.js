import React from 'react';

import DefaultLayout from '../layouts/defaultLayout';
import SEO from '../components/seo';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Media = () => {
  return (
    <DefaultLayout>
      <SEO title="Media" />
      <Container maxWidth="md">
        <Box my={4}>Media</Box>
      </Container>
    </DefaultLayout>
  );
};

export default Media;
