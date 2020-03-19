import React from 'react';
import { graphql } from 'gatsby';
import Loadable from '@loadable/component';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const InterfaceLayout = Loadable(
  () => import('src/layouts/InterfaceLayout'),
  {
    fallback: <IndefiniteLoading message="InterfaceLayout" />,
  },
);

const CartLayout = Loadable(() => import('src/layouts/CartLayout'), {
  fallback: <IndefiniteLoading message="CartLayout" />,
});

const ProductsLayout = Loadable(
  () => import('src/layouts/ProductsLayout'),
  {
    fallback: <IndefiniteLoading message="ProductsLayout" />,
  },
);

const ProductComponent = Loadable(
  () => import('src/components/product/productComponent'),
  {
    fallback: <IndefiniteLoading message="ProductComponent" />,
  },
);

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      id
      slug
      stripeId
      stripeSku
      stripePrice
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
        fixed {
          src
        }
        fluid {
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
`;

const ProductTemplate = ({ pageContext: { id }, data, location }) => {
  return (
    <>
      <ProductsLayout>
        <CartLayout>
          {/* <InterfaceLayout location={location}> */}
          <ProductComponent productId={id} data={data} />
          {/* </InterfaceLayout> */}
        </CartLayout>
      </ProductsLayout>
    </>
  );
};

export default ProductTemplate;
