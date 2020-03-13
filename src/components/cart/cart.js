import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

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
        <>
          <Typography>
            There are currently no items in your shopping cart.
          </Typography>
        </>
      )) || (
        <List aria-label="cart items">
          {cart.map(([sku, quantity]) => (
            <CartItem key={sku} sku={sku} quantity={quantity} />
          ))}
        </List>
      )}
    </>
  );
};

export default CartComponent;
