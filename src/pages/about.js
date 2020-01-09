import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const About = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_about');
  }, []);
  return (
    <Layout>
      <SEO title="About" />
      <Container maxWidth="sm">
        <Box my={4}>About</Box>
      </Container>
    </Layout>
  );
};

export default About;
