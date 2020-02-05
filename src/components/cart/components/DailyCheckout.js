import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CreditCard from '@material-ui/icons/CreditCard';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import {
  Elements,
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PaymentRequestButtonElement,
  IbanElement,
  IdealBankElement,
  StripeProvider,
  injectStripe,
} from 'react-stripe-elements';

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

const DailyCheckout = props => {
  const styles = useStyles();

  const handleBlur = () => {
    console.log('[blur]');
  };
  const handleChange = change => {
    console.log('[change]', change);
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

  const handleSubmit = ev => {
    ev.preventDefault();
    if (props.stripe) {
      props.stripe
        .createToken()
        .then(payload => console.log('[token]', payload));
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  return (
    <Box className={styles.root}>
      <Paper className={styles.paper} variant="outlined">
        <Typography variant="h3">Payment Info.</Typography>
        <Divider />
        <Typography>Payment Method:</Typography>
        <Grid container>
          <Grid xs={6} item>
            <Elements>
              <form onSubmit={handleSubmit}>
                <label>
                  Card details
                  {/* <CardElement
                  onBlur={handleBlur}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onReady={handleReady}
                  {...createOptions()}
                /> */}
                </label>
              </form>
            </Elements>
          </Grid>
        </Grid>
        <Divider />
        <TextField
          fullWidth
          label={'Name On Card:'}
          value={'Peter Arnold'}
        />
        <Box />
        <TextField
          fullWidth
          label={'Card Number:'}
          value={'••••  ••••  ••••  1829'}
        />
        <Box />
        <Grid container>
          <Grid item xs={8}>
            <Typography>Expiration Date:</Typography>
            <Box mt={'-23px'}>
              <Grid container>
                <Grid item xs={6}>
                  <TextField select fullWidth label={'MM'} />
                </Grid>
                <Grid item xs={6}>
                  <TextField select fullWidth label={'YYYY'} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label={'CCV:'} placeholder={'XXX'} />
          </Grid>
        </Grid>
        <Box />
        <Button size="large" color="primary" variant="outlined">
          Check Out.
        </Button>
      </Paper>
    </Box>
  );
};

export default DailyCheckout;
