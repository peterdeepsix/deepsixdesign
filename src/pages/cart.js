import React from 'react';
import Loadable from '@loadable/component';

import SEO from 'src/components/seo';
import AppLayout from 'src/layouts/appLayout';
import CartLayout from 'src/layouts/cartLayout';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const CartComponent = Loadable(
  () => import('src/components/cart/cartComponent'),
  {
    fallback: <IndefiniteLoading message="CartComponent" />,
  },
);

const CartPage = ({ productId }) => {
  return (
    <AppLayout>
      <SEO title="Products - Deep Six Design" />
      <CartLayout>
        <CartComponent />
      </CartLayout>
    </AppLayout>
  );
};

export default CartPage;
