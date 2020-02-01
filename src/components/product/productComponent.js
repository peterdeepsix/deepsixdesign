import React, { useContext } from 'react';
import Img from 'gatsby-image';
import { ProductsContext } from './ProductsProvider';
import { CartContext } from './CartProvider';

const ProductComponent = ({ productId }) => {
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

export default ProductComponent;
