import React from 'react';
import { graphql } from 'gatsby';
import Loadable from '@loadable/component';

import AppLayout from '../layouts/appLayout';
import SEO from '../components/seo';
import IndefiniteLoading from '../components/loading/indefiniteLoading';

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
    <Layout>
      <ProductComponent productId={id} />
    </Layout>
  );
};

export default ItemTemplate;
