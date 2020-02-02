import React, { useEffect, useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';
import { ProductsContext } from './productsProvider';
import ProductThumbnail from './productThumbnail';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const ProductsComponent = () => {
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
