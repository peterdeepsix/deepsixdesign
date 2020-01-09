import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_about');
  }, []);
  return (
    <Layout>
      <SEO title="About" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="body1">About</Typography>
        </Box>
      </Container>
    </Layout>
  );
};

export default About;
