import React, { useContext } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { CartContext } from './cartProvider';
import CartItem from './cartItem';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 24,
  },
}));

const CartComponent = () => {
  const styles = useStyles();
  const { cart, count, mode, toggle } = useContext(CartContext);
  return (
    <Container className={styles.root}>
      <Box>
        <Typography variant="h3">Shopping Cart</Typography>
        {count === 0 && <Typography>No items in cart.</Typography>}
      </Box>
      <Box>
        <List aria-label="cart items">
          {cart.map(([sku, quantity]) => (
            <CartItem key={sku} sku={sku} quantity={quantity} />
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default CartComponent;
