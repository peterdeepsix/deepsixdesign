import React from 'react';
import { graphql } from 'gatsby';
import Loadable from '@loadable/component';

import CartLayout from 'src/layouts/cartLayout';
import AppLayout from 'src/layouts/appLayout';
import SEO from 'src/components/seo';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const ProductsComponent = Loadable(
  () => import('../components/products/productsComponent'),
  {
    fallback: <IndefiniteLoading message="IndefiniteLoading" />,
  },
);

const ItemTemplate = ({ pageContext: { id } }) => {
  return (
    <AppLayout>
      <SEO title="Timeline - Deep Six Design" />
      <Container maxWidth="sm">
        <Box my={4}>
          <CartLayout>
            <ProductsComponent productId={id} />
          </CartLayout>
        </Box>
      </Container>
    </AppLayout>
  );
};

export default ItemTemplate;
