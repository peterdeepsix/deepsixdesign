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
import InputLabel from '@material-ui/core/InputLabel';

import theme from 'src/configs/theme';

import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 4,
    height: '100%',
    overflow: 'auto',
    '& *': {},
  },
  paper: { padding: 16 },
  button: {
    textTransform: 'none',
    color: '#fff',
  },
}));

console.log(theme);

const ELEMENT_OPTIONS = {
  style: {
    base: {
      iconColor: theme.palette.text.secondary,
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.htmlFontSize,
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: theme.palette.text.primary,
      },
      '::placeholder': {
        color: theme.palette.text.secondary,
      },
    },
    invalid: {
      iconColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
    },
  },
};

const StripeCheckOutSplit = props => {
  const styles = useStyles();
  const elements = useElements();
  const stripe = useStripe();
  const [name, setName] = useState('');
  const [postal, setPostal] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name,
        address: {
          postal_code: postal,
        },
      },
    });

    if (payload.error) {
      console.log('[error]', payload.error);
      setErrorMessage(payload.error.message);
      setPaymentMethod(null);
    } else {
      console.log('[PaymentMethod]', payload.paymentMethod);
      setPaymentMethod(payload.paymentMethod);
      setErrorMessage(null);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box mt={2} mb={3}>
        <TextField
          id="name"
          label="Full Name"
          required
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
      </Box>
      <Box mb={5}>
        <InputLabel htmlFor="cardNumber">Card Number</InputLabel>
        <CardNumberElement
          id="cardNumber"
          onBlur={console.log('blur')}
          onChange={console.log('change')}
          onFocus={console.log('focus')}
          onReady={console.log('ready')}
          options={ELEMENT_OPTIONS}
        />
      </Box>
      <Box mb={5}>
        <InputLabel htmlFor="expiry">Card Expiration</InputLabel>
        <CardExpiryElement
          id="expiry"
          onBlur={console.log('blur')}
          onChange={console.log('change')}
          onFocus={console.log('focus')}
          onReady={console.log('ready')}
          options={ELEMENT_OPTIONS}
        />
      </Box>
      <Box mb={5}>
        <InputLabel htmlFor="cvc">CVC</InputLabel>
        <CardCvcElement
          id="cvc"
          onBlur={console.log('blur')}
          onChange={console.log('change')}
          onFocus={console.log('focus')}
          onReady={console.log('ready')}
          options={ELEMENT_OPTIONS}
        />
      </Box>
      <Box mb={5}>
        <TextField
          id="postal"
          label="Postal Code"
          required
          placeholder="12345"
          value={postal}
          onChange={e => {
            setPostal(e.target.value);
          }}
        />
      </Box>
      <Box>
        {errorMessage && <Typography>{errorMessage}</Typography>}
        {paymentMethod && (
          <Typography>
            Got PaymentMethod: {paymentMethod.id}
          </Typography>
        )}
      </Box>
      <Box mb={5}>
        <Button
          type="submit"
          disabled={!stripe}
          className={styles.button}
          color="primary"
          variant="contained"
        >
          Check Out Now
        </Button>
      </Box>
    </form>
  );
};

export default StripeCheckOutSplit;
