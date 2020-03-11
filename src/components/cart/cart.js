import React, { useContext } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { CartContext } from './cartProvider';
import CartItem from './cartItem';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
