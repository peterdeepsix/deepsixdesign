import React from 'react';
import Loadable from '@loadable/component';

import CartLayout from 'src/layouts/cartLayout';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const CartComponent = Loadable(
  () => import('src/components/cart/cartComponent'),
  {
    fallback: <IndefiniteLoading message="CartComponent" />,
  },
);

const CartPage = ({ location }) => {
  return (
    <>
      <CartLayout>
        <CartComponent />
      </CartLayout>
    </>
  );
};

export default CartPage;
