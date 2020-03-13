import React from 'react';

import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import StripeProvider from './stripeProvider';

import Cart from './cart';
import CartSummary from './cartSummary';
import StripeCheckOutSplit from './stripeCheckOutSplit';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

const HomeComponent = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const theme = useTheme();

  return (
    <StripeProvider>
      <Container maxWidth="sm">
        <Box mx="auto" mt={2} mb={2}>
          <Card variant="outlined">
            <CardHeader title="Cart Checkout" />
            <div className={classes.root}>
              <Stepper activeStep={activeStep} orientation="vertical">
                <Step>
                  <StepLabel>Order Summary</StepLabel>
                  <StepContent>
                    <Cart />
                    <CartSummary />
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          {activeStep === 3 ? 'Finish' : 'Next'}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
                <Step disabled={true}>
                  <StepLabel>Design</StepLabel>
                  <StepContent>
                    <Typography>Design Content</Typography>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          {activeStep === 3 ? 'Finish' : 'Next'}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
                <Step disabled={true}>
                  <StepLabel>Delivery</StepLabel>
                  <StepContent>
                    <Typography>Delivery Content</Typography>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          {activeStep === 3 ? 'Finish' : 'Next'}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
                <Step>
                  <StepLabel>Check Out</StepLabel>
                  <StepContent>
                    <StripeCheckOutSplit />
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        <Button
                          disabled={activeStep === 3}
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          {activeStep === 3 ? 'Finish' : 'Next'}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              </Stepper>
            </div>
          </Card>
        </Box>
        {activeStep === 4 && (
          <Box mx="auto" mt={2} mb={2}>
            <Card variant="outlined">
              <CardHeader title="Order Complete" />
              <CardContent>Order Successful</CardContent>
            </Card>
          </Box>
        )}
        <Box mx="auto" mt={2} mb={7}>
          <Card variant="outlined">
            <CardHeader title="Form Test" />
            <CardContent>
              <Button
                variant="outlined"
                onClick={handleReset}
                className={classes.button}
              >
                Reset Stepper
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </StripeProvider>
  );
};

export default HomeComponent;
