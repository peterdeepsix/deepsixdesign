import React from 'react';

import SEO from 'src/components/seo';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Loadable from '@loadable/component';

const ProductsComponent = Loadable(
  () => import('src/components/products/productsComponent'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const ProductsPage = () => {
  return (
    <>
      <SEO title="Products - Deep Six Design" />
      <Container maxWidth="sm">
        <Box my={4}>
          <ProductsComponent />
        </Box>
      </Container>
    </>
  );
};

export default ProductsPage;
