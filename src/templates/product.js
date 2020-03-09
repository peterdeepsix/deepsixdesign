import React from 'react';
import { graphql } from 'gatsby';
import Loadable from '@loadable/component';

import CartLayout from 'src/layouts/cartLayout';
import MainLayout from 'src/layouts/mainLayout';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const ProductComponent = Loadable(
  () => import('../components/product/productComponent'),
  {
    fallback: <IndefiniteLoading message="IndefiniteLoading" />,
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

const ProductTemplate = ({ pageContext: { id }, data }) => {
  return (
    <>
      <MainLayout>
        <CartLayout>
          <ProductComponent productId={id} data={data} />
        </CartLayout>
      </MainLayout>
    </>
  );
};

export default ProductTemplate;
