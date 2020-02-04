import React from 'react';
import Loadable from '@loadable/component';

import CartLayout from 'src/layouts/cartLayout';
import HomeLayout from 'src/layouts/homeLayout';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const ProductComponent = Loadable(
  () => import('../components/product/productComponent'),
  {
    fallback: <IndefiniteLoading message="IndefiniteLoading" />,
  },
);

const ItemTemplate = ({ pageContext: { id } }) => {
  return (
    <>
      <HomeLayout>
        <CartLayout>
          <ProductComponent productId={id} />
        </CartLayout>
      </HomeLayout>
    </>
  );
};

export default ItemTemplate;
