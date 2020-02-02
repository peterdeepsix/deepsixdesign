import React, { useContext } from 'react';
import { CartContext } from './cartProvider';

const CartItem = ({ sku, quantity }) => {
  const { remove } = useContext(CartContext);
  return (
    <div key={sku.id} style={{ display: 'flex', margin: '1rem 0' }}>
      <div style={{ flexBasis: '100%' }}>
        <div style={{ fontWeight: 'bold' }}>{sku.product.name}</div>
        <div>
          ${sku.price / 100} &times; {quantity}
        </div>
        <div>
          <strong>${(sku.price / 100) * quantity}</strong>
        </div>
      </div>
      <span
        style={{}}
        onClick={() => {
          remove(sku.id);
        }}
      >
        &times;
      </span>
    </div>
  );
};

export default CartItem;
