import React from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import SEO from '../components/seo';
import IndefiniteLoading from '../components/loading/indefiniteLoading';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Loadable from '@loadable/component';

const ProductsComponent = Loadable(
  () => import('../components/products/productsComponent'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const ProductsPage = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent('visited_products');
  }, []);
  return (
    <React.Fragment>
      <SEO title="Products - Deep Six Design" />
      <Container maxWidth="sm">
        <Box my={4}>
          <ProductsComponent />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default ProductsPage;
