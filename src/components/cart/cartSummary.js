import React, { useContext } from 'react';
import { navigate } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { CartContext } from './cartProvider';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  big: {
    fontSize: 16,
  },
  large: {
    fontSize: 24,
  },
  mainGrid: {
    [breakpoints.up('sm')]: {
      flexDirection: 'row-reverse',
    },
  },
}));

const DailySummary = () => {
  const styles = useStyles();
  const { total } = useContext(CartContext);

  return (
    <>
      <Box mt={3}>
        <Button
          variant="outlined"
          onClick={() => {
            navigate(`/products`);
          }}
        >
          Continue Shopping
        </Button>
      </Box>
      <Box mt={3}>
        <b>Subtotal:</b>
      </Box>
      <Box>
        <span>${total / 100}</span>
      </Box>
      <Box mt={3}>
        <b>Shipping:</b>
      </Box>
      <Box>
        <span>$0</span>
      </Box>
      <Box mt={3}>
        <b>Total:</b>
      </Box>
      <Box>
        <span>${total / 100}</span>
      </Box>
    </>
  );
};

export default DailySummary;
