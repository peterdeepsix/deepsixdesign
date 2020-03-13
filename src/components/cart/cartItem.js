import React, { useContext } from 'react';

import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';

import { CartContext } from './cartProvider';

const CartItem = ({ sku, quantity }) => {
  const { remove } = useContext(CartContext);
  const price = sku.price / 100;
  const total = (sku.price / 100) * quantity;
  return (
    <ListItem disableGutters divider button>
      <ListItemText
        primary={sku.product.name}
        secondary={`$${price} * Quantity ${quantity} = $${total}`}
      />
      <ListItemSecondaryAction>
        <IconButton
          onClick={() => {
            remove(sku.id);
          }}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default CartItem;
