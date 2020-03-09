import React from 'react';
import { graphql } from 'gatsby';
import Loadable from '@loadable/component';

import MainLayout from 'src/layouts/mainLayout';
import CartLayout from 'src/layouts/cartLayout';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const ProductsComponent = Loadable(
  () => import('src/components/products/productsComponent'),
  {
    fallback: <IndefiniteLoading message="ProductsComponent" />,
  },
);

export const query = graphql`
  query ProductsPageQuery {
    allContentfulProduct(filter: {}) {
      edges {
        node {
          id
          slug
          stripeId
          stripeSku
          stripePrice
          featured
          rating
          details
          breadcrumb {
            breadcrumb
          }
          description {
            content {
              content {
                value
              }
            }
          }
          title {
            title
          }
          shortOverview {
            content {
              content {
                value
              }
            }
          }
          media {
            resolutions {
              src
            }
          }
          overview {
            content {
              content {
                value
              }
            }
          }
        }
      }
    }
  }
`;

const ProductsPage = ({ data }) => {
  return (
    <MainLayout>
      <CartLayout>
        <ProductsComponent data={data} />
      </CartLayout>
    </MainLayout>
  );
};

export default ProductsPage;
