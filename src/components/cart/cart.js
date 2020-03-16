import React, { useContext } from 'react';
import { navigate } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { CartContext } from './cartProvider';
import CartItem from './cartItem';

const useStyles = makeStyles(() => ({
  root: {},
  box: {},
}));

const CartComponent = () => {
  const classes = useStyles();
  const { cart, count, mode, toggle } = useContext(CartContext);
  return (
    <>
      {(count === 0 && (
        <Box mt={2} mb={1}>
          <Typography>
            There are currently no items in your shopping cart.
          </Typography>
        </Box>
      )) || (
        <Box mb={1}>
          <List aria-label="cart items">
            {cart.map(([sku, quantity]) => (
              <CartItem key={sku} sku={sku} quantity={quantity} />
            ))}
          </List>
        </Box>
      )}
      <Box mt={2} mb={3}>
        <Button
          variant="outlined"
          onClick={() => {
            navigate(`/products`);
          }}
        >
          Continue Shopping
        </Button>
      </Box>
    </>
  );
};

export default CartComponent;
