import React from 'react';
import ProductsProvider from 'src/components/products/productsProvider';

const ProductsLayout = ({ children }) => (
  <ProductsProvider>{children}</ProductsProvider>
);

export default ProductsLayout;
