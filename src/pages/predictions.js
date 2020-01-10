import React from 'react';

import DefaultLayout from '../layouts/defaultLayout';
import StoreLayout from '../layouts/storeLayout';

import SEO from '../components/seo';
import Loading from '../components/loading';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

// Async loadable imports
import Loadable from '@loadable/component';

const PredictionsComponent = Loadable(
  () => import('../components/predictionsComponent'),
  {
    fallback: <Loading />,
  },
);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Predictions = () => {
  const classes = useStyles();

  return (
    <DefaultLayout>
      <StoreLayout>
        <SEO title="Predictions" />
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <PredictionsComponent />
            </Grid>
          </Grid>
        </Grid>
      </StoreLayout>
    </DefaultLayout>
  );
};

export default Predictions;
