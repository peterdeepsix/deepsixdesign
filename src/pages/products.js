import React from 'react';
import Loadable from '@loadable/component';

import SEO from 'src/components/seo';
import AppLayout from 'src/layouts/appLayout'
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const ProductsComponent = Loadable(
  () => import('src/components/products/productsComponent'),
  {
    fallback: <IndefiniteLoading message='ProductsComponent' />,
  },
);

const ProductsPage = () => {
  return (
    <AppLayout>
      <SEO title="Products - Deep Six Design" />
      <ProductsComponent />
    </AppLayout>
  );
};

export default ProductsPage;
