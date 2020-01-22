import React from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import SEO from 'src/components/seo';
import AppLayout from 'src/layouts/appLayout'

const CartPage = () => {
  return (
    <AppLayout>
      <SEO title="Terms - Deep Six Design" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4">Terms & Conditions</Typography>
        </Box>
      </Container>
    </AppLayout>
  );
};

export default CartPage;
