import React, { useContext, useState, useEffect } from 'react';
import { navigate } from 'gatsby';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { ProductsContext } from 'src/components/products/productsProvider';
import { CartContext } from 'src/components/cart/cartProvider';

const ProductComponent = ({ productId }) => {
  const { products } = useContext(ProductsContext);
  const { add, toggle } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products) {
      setProduct(products[productId]);
    }
  }, [products]);

  const handleClick = () => {
    add(product.skus[0].id);
    toggle(true);
    navigate('/cart');
  };

  return (
    <>
      {product && (
        <Container>
          <Box>
            <Typography variant="h4">{product.name}</Typography>
            <br />
            <Typography>Product ID - {product.id}</Typography>
          </Box>
          <br />
          <Box>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClick}
            >
              Add To Cart
            </Button>
          </Box>
        </Container>
      )}
    </>
  );
};

export default ProductComponent;
