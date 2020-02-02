import React, { useContext } from 'react';
import { CartContext } from './cartProvider';
import Checkout from './checkoutComponent';
import CartItem from './cartItem';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const CartComponent = () => {
  const { cart, count, mode, toggle } = useContext(CartContext);
  return (
    <Container>
      <Box>
        <Typography variant="h4">Shopping Cart</Typography>
        {count === 0 && <Typography>No items in cart.</Typography>}
      </Box>
      <Box>
        {' '}
        {cart.map(([sku, quantity]) => (
          <CartItem key={sku.id} sku={sku} quantity={quantity} />
        ))}
      </Box>
      <Box>
        <Checkout />
      </Box>
    </Container>
  );
};

export default CartComponent;
