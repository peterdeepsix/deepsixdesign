import React from 'react';
import Loadable from '@loadable/component';

import HomeLayout from 'src/layouts/homeLayout';
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
    <HomeLayout>
      <CartLayout>
        <CartComponent />
      </CartLayout>
    </HomeLayout>
  );
};

export default CartPage;
