import React, { useContext } from 'react';

import { ProductsContext } from './productsProvider';
import ProductThumbnail from './productThumbnail';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const ProductsComponent = () => {
  const { listProducts } = useContext(ProductsContext);
  const products = listProducts();

  return (
    <>
      {products && (
        <Container disableGutters maxWidth="sm">
          <Box pt={2} px={1} pb={2} mx="auto">
            <Typography variant="h3">Products</Typography>
          </Box>
          <br />
          <Box pt={1} pb={6} mx="auto">
            {products.map(product => (
              <Box px={1} pb={1} mx="auto">
                <ProductThumbnail
                  key={product.id}
                  product={product}
                />
              </Box>
            ))}
          </Box>
        </Container>
      )}
    </>
  );
};

export default ProductsComponent;
