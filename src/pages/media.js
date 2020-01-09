import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Media = () => {
  return (
    <Layout>
      <SEO title="Media" />
      <Container maxWidth="md">
        <Box my={4}>Media</Box>
      </Container>
    </Layout>
  );
};

export default Media;
