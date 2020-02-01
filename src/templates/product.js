import React from 'react';
import { graphql } from 'gatsby';
import Loadable from '@loadable/component';

import AppLayout from 'src/layouts/appLayout';
import SEO from 'src/components/seo';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

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
      <Container maxWidth="sm">
        <Box my={4}>
          <ProductComponent />
        </Box>
      </Container>
    </AppLayout>
  );
};

export default ItemTemplate;
