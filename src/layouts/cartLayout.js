import React from 'react';
import CartProvider from 'src/components/cart/cartProvider';

const CartLayout = ({ children }) => (
  <CartProvider>{children}</CartProvider>
);

export default CartLayout;
