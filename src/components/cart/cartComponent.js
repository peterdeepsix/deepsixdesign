import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import CartSummary from './cartSummary';
import Cart from './cart';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';

import StripeCheckOutSplit from 'src/components/cart/stripeCheckOutSplit';
import StripeProvider from './stripeProvider';

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {},
}));

const HomeComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StripeProvider>
      <Container maxWidth="sm">
        <Box mx="auto" mt={2} mb={2}>
          <Card variant="outlined">
            <CardHeader title="Cart Summary" />
            <CardContent>
              <Cart />
              <CartSummary />
            </CardContent>
          </Card>
        </Box>
        <Box mx="auto" mt={2} mb={9}>
          <Card variant="outlined">
            <CardHeader title="Checkout With Stripe" />
            <CardContent>
              <StripeCheckOutSplit />
            </CardContent>
          </Card>
        </Box>
      </Container>
    </StripeProvider>
  );
};

export default HomeComponent;
