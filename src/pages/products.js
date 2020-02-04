import React from 'react';
import Loadable from '@loadable/component';

import CartLayout from 'src/layouts/cartLayout';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const ProductsComponent = Loadable(
  () => import('src/components/products/productsComponent'),
  {
    fallback: <IndefiniteLoading message="ProductsComponent" />,
  },
);

const ProductsPage = ({ location }) => {
  return (
    <>
      <CartLayout>
        <ProductsComponent />
      </CartLayout>
    </>
  );
};

export default ProductsPage;
