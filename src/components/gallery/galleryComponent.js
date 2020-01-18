import React, { useEffect, useState } from 'react';

import { inject, observer } from 'mobx-react';

import Loading from '../loading';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
  },
  chip: {
    marginLeft: theme.spacing(-0.5),
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const GalleryComponent = ({
  data,
  predictions: predictionsStore,
}) => {
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

  if (isLoading) return <Loading />;

  return <Container>asd</Container>;
};

export default inject('predictions')(observer(GalleryComponent));
