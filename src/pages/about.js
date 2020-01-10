import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import DefaultLayout from '../layouts/defaultLayout';
import SEO from '../components/seo';

const About = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_about');
  }, []);
  return (
    <DefaultLayout>
      <SEO title="About" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="body1">About</Typography>
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default About;
