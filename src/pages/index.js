import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import FirebaseObject from '../components/firebaseObject';

const IndexPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_index');
  }, []);
  return (
    <Layout>
      <SEO title="Deep Six Design" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Image />
          <FirebaseObject />
        </Box>
      </Container>
    </Layout>
  );
};

export default IndexPage;
