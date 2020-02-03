import React, { useEffect, useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';
import { ProductsContext } from './productsProvider';
import ProductThumbnail from './productThumbnail';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

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
        <Container>
          {products.map(product => (
            <Box>
              <ProductThumbnail key={product.id} product={product} />
            </Box>
          ))}
        </Container>
      )}
    </>
  );
};

export default ProductsComponent;
