import React, { useEffect, useState, useContext } from 'react';
import ProductThumbnail from './productThumbnail';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Img from 'gatsby-image';
import { ProductsContext } from './productsProvider';
import { CartContext } from 'src/components/cart/cartProvider';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const ProductsComponent = ({ productId }) => {
  const classes = useStyles();
  const { listProducts } = useContext(ProductsContext);
  const products = listProducts();

  return (
    <>
      {products && (
        <div style={{ columnCount: 3 }}>
          {products.map(product => (
            <ProductThumbnail key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsComponent;
