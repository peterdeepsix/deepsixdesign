import React, { useContext, useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

  return (
    <>
      {product && (
        <>
          <Typography>{product.name}</Typography>
          <br />
          <Typography>Product ID - {product.id}</Typography>
          <br />
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              add(product.skus[0].id);
              toggle(true);
            }}
          >
            Add To Cart
          </Button>
        </>
      )}
    </>
  );
};

export default ProductComponent;
