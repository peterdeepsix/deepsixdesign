import React from 'react';
import ProductsProvider from 'src/components/products/productsProvider';
import CartProvider from 'src/components/cart/cartProvider';

const CartLayout = ({ children }) => (
  <ProductsProvider>
    <CartProvider>{children}</CartProvider>
  </ProductsProvider>
);

export default CartLayout;
