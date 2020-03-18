import React from 'react';
import { graphql } from 'gatsby';
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

const ProductsPage = ({ data, location }) => {
  return (
    <>
      {/* <ProductsLayout>
      <CartLayout>
        <ProductsComponent data={data} />
      </CartLayout>
    </ProductsLayout> */}
    </>
  );
};

export default ProductsPage;
