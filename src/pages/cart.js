import React from 'react';

import SEO from 'src/components/seo';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const CartPage = () => {
  return (
    <>
      <SEO title="Shopping Cart - Deep Six Design" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4">Shopping Cart</Typography>
        </Box>
      </Container>
    </>
  );
};

export default CartPage;
