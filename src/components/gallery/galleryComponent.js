import React, { useEffect, useState } from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

import { inject, observer } from 'mobx-react';

import Loading from '../loading';
import MediaUpload from './mediaUpload';

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

const GalleryComponent = ({ predictions: predictionsStore }) => {
  const classes = useStyles();

  const { predictions, firestore } = predictionsStore;

  const [isLoading, setIsLoading] = useState(true);

  const [storage, setStorage] = useState(null);

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

  useFirebase(firebase => {
    setStorage(firebase.storage());
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Container>
      <MediaUpload firestore={firestore} storage={storage} />
    </Container>
  );
};

export default inject('predictions')(observer(GalleryComponent));
