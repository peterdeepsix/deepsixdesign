import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import DefaultLayout from '../components/layout/defaultLayout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_index');
  }, []);
  return (
    <DefaultLayout>
      <SEO title="Deep Six Design" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Image />
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default IndexPage;
