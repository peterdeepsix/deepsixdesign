import React from 'react';
import Loadable from '@loadable/component';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

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
      <Container maxWidth="sm">
        <Box my={4}>
          <ProductsComponent />
        </Box>
      </Container>
    </AppLayout>
  );
};

export default ProductsPage;
