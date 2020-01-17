import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import AppLayout from '../components/layouts/appLayout';
import SEO from '../components/seo';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const CartPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_index');
  }, []);
  return (
    <AppLayout>
      <SEO title="Deep Six Design" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4">Shopping Cart</Typography>
        </Box>
      </Container>
    </AppLayout>
  );
};

export default CartPage;
