import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import SEO from '../components/seo';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const CartPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_terms');
  }, []);
  return (
    <React.Fragment>
      <SEO title="Terms - Deep Six Design" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4">Terms & Conditions</Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default CartPage;
