import React from 'react';
import Loadable from '@loadable/component';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const ProductsLayout = Loadable(
  () => import('src/layouts/ProductsLayout'),
  {
    fallback: <IndefiniteLoading message="ProductsLayout" />,
  },
);

const CartLayout = Loadable(() => import('src/layouts/CartLayout'), {
  fallback: <IndefiniteLoading message="CartLayout" />,
});

const CartComponent = Loadable(
  () => import('src/components/cart/cartComponent'),
  {
    fallback: <IndefiniteLoading message="CartComponent" />,
  },
);

const InterfaceLayout = Loadable(
  () => import('src/layouts/InterfaceLayout'),
  {
    fallback: <IndefiniteLoading message="InterfaceLayout" />,
  },
);

const CartPage = ({ location }) => {
  return (
    <ProductsLayout>
      <CartLayout>
        {/* <InterfaceLayout location={location}> */}
        <CartComponent />
        {/* </InterfaceLayout> */}
      </CartLayout>
    </ProductsLayout>
  );
};

export default CartPage;
