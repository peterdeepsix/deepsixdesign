import React, { useContext, useState, useEffect } from 'react';
import { navigate } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { ProductsContext } from 'src/components/products/productsProvider';
import { CartContext } from 'src/components/cart/cartProvider';

const useStyles = makeStyles({
  img: {
    maxWidth: `100%`,
  },
});

const ProductComponent = ({ productId }) => {
  const { products } = useContext(ProductsContext);
  const { add, toggle } = useContext(CartContext);
  const classes = useStyles();
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
        <Container maxWidth="sm">
          <Box mx="auto">
            <img
              className={classes.img}
              src={product.skus[0].image}
            />
          </Box>
          <br />
          <Box>
            <Typography variant="h3">{product.name}</Typography>
            <br />
            <Typography
              variant="h6"
              color="textSecondary"
              component="p"
            >
              ${product.skus[0].price / 100}
            </Typography>
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
