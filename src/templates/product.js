import React from 'react';
import Loadable from '@loadable/component';

import CartLayout from 'src/layouts/cartLayout';
import AppLayout from 'src/layouts/appLayout';
import SEO from 'src/components/seo';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const ProductComponent = Loadable(
  () => import('../components/product/productComponent'),
  {
    fallback: <IndefiniteLoading message="IndefiniteLoading" />,
  },
);

const ItemTemplate = ({ pageContext: { id } }) => {
  return (
    <AppLayout>
      <SEO title="Timeline - Deep Six Design" />
      <CartLayout>
        <ProductComponent productId={id} />
      </CartLayout>
    </AppLayout>
  );
};

export default ItemTemplate;
