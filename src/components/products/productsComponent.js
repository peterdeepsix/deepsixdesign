import React, { useEffect, useState } from 'react';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Img from 'gatsby-image';
import { ProductsContext } from './productsProvider';
import { CartContext } from 'src/cart/cartProvider';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const ProductsComponent = ({ productId }) => {
  const classes = useStyles();
  const { products } = useContext(ProductsContext);
  const { add, toggle } = useContext(CartContext);

  const product = products[productId];

  return (
    <div style={{ margin: '0 auto', maxWidth: 500 }}>
      <div style={{ margin: '3rem auto', maxWidth: 300 }}>
        {product.localFiles && (
          <Img fluid={product.localFiles[0].childImageSharp.fluid} />
        )}
      </div>
      <h2>{product.name}</h2>
      <div>{product.caption}</div>
      <br />
      <div style={{ textAlign: 'justify' }}>
        {product.description}
      </div>
      <button
        style={{ margin: '2rem auto' }}
        onClick={() => {
          add(product.skus[0].id);
          toggle(true);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductsComponent;
