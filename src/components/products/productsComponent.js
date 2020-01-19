import React, { useEffect, useState } from 'react';

import { inject, observer } from 'mobx-react';

import IndefiniteLoading from '../loading/indefiniteLoading';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const ProductsComponent = ({ predictions: predictionsStore }) => {
  const classes = useStyles();

  const { predictions, firestore } = predictionsStore;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!firestore) return;
    let didCancel = false;

    const getPredictions = async () => {
      await predictionsStore.getPredictions();
      if (!didCancel) setIsLoading(false);
    };
    getPredictions();
    return () => (didCancel = true);
  }, [firestore]);

  if (isLoading) return <IndefiniteLoading />;

  return <React.Fragment><Typography variant="h4">Shopping Cart</Typography></React.Fragment>;
};

export default inject('predictions')(observer(ProductsComponent));
