import React, { useContext } from 'react';
import { CartContext } from './cartProvider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const CartItem = ({ sku, quantity }) => {
  const { remove } = useContext(CartContext);
  return (
    <Container key={sku.id}>
      <Box>
        <Typography>{sku.product.name}</Typography>
        <Typography>
          ${sku.price / 100} &times; {quantity}
        </Typography>
        <Typography>${(sku.price / 100) * quantity}</Typography>
        <Button
          style={{}}
          onClick={() => {
            remove(sku.id);
          }}
        >
          &times; Remove
        </Button>
      </Box>
    </Container>
  );
};

export default CartItem;
