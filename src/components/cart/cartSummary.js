import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import { navigate } from 'gatsby';

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
      <Box mt={3}>
        <Button
          size="large"
          variant="outlined"
          onClick={() => {
            navigate(`/products`);
          }}
        >
          Continue Shopping
        </Button>
      </Box>
    </>
  );
};

export default DailySummary;
