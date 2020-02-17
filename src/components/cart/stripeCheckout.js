import React, { useState } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CreditCard from '@material-ui/icons/CreditCard';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 4,
    height: '100%',
    overflow: 'auto',
    '& *': {},
  },
  paper: { padding: 16 },
  button: { textTransform: 'none' },
}));

const createOptions = () => {
  return {
    style: {
      base: {
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};

const StripeCheckOut = props => {
  const styles = useStyles();
  const stripe = useStripe();
  const elements = useElements();

  const [cardName, setCardName] = useState();
  const [cardMonth, setCardMonth] = useState();
  const [cardYear, setCardYear] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [cardCCV, setCardCCV] = useState();

  const handleChangeCardName = event => {
    setCardName(event.target.value);
    console.log('[change month]', event);
  };

  const handleChangeCardMonth = event => {
    setCardMonth(event.target.value);
    console.log('[change month]', event);
  };

  const handleChangeCardYear = event => {
    setCardYear(event.target.value);
    console.log('[change year]', event);
  };

  const handleChangeCardNumber = event => {
    setCardNumber(event.target.value);
    console.log('[change card number]', event);
  };

  const handleChangeCardCCV = event => {
    setCardCCV(event.target.value);
    console.log('[change card number]', event);
  };

  const handleBlur = () => {
    console.log('[blur]');
  };
  const handleClick = () => {
    console.log('[click]');
  };
  const handleFocus = () => {
    console.log('[focus]');
  };
  const handleReady = () => {
    console.log('[ready]');
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod(
      {
        type: 'card',
        card: elements.getElement(CardElement),
      },
    );
  };

  return (
    <Box className={styles.root}>
      <Paper className={styles.paper} variant="outlined">
        <form onSubmit={handleSubmit}>
          <Box pb={2} pt={1}>
            <Typography variant="h3">Payment Info</Typography>
          </Box>
          <Box pb={2}>
            <CardElement />
          </Box>
          <Box pb={1}>
            <Button
              type="submit"
              disabled={!stripe}
              className={styles.button}
              size="large"
              color="primary"
              variant="outlined"
            >
              Check Out Now
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default StripeCheckOut;
