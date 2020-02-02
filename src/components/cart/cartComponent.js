import React, { useContext } from 'react';
import { CartContext } from './cartProvider';
import Checkout from './checkoutComponent';
import CartItem from './cartItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CartComponent = () => {
  const { cart, count, mode, toggle } = useContext(CartContext);
  return (
    <>
      <Button variant="outlined" onClick={() => toggle()}>
        {mode ? '→' : 'cart'}
      </Button>
      <Typography>Shopping Cart</Typography>
      {count === 0 && <span>No items in cart.</span>}
      {cart.map(([sku, quantity]) => (
        <CartItem key={sku.id} sku={sku} quantity={quantity} />
      ))}
      <Checkout />
    </>
  );
};

export default CartComponent;
