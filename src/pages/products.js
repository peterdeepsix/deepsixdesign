import React from 'react';
import Loadable from '@loadable/component';

import SEO from 'src/components/seo';
import AppLayout from 'src/layouts/appLayout';
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
    <AppLayout location={location}>
      <SEO title="Products - Deep Six Design" />
      <CartLayout>
        <ProductsComponent />
      </CartLayout>
    </AppLayout>
  );
};

export default ProductsPage;
