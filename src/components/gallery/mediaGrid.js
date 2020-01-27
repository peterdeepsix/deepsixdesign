import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

import IndefiniteLoading from '../loading/indefiniteLoading';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {},
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const MediaGrid = ({ store }) => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);

  const { sessionStore } = store;
  const { auth, authUser, googleProvider } = sessionStore;

  const { predictionsStore } = store;
  const { predictions, firestore } = predictionsStore;

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

  if (isLoading) return <IndefiniteLoading message="MediaGrid" />;
  return (
    <div className={classes.root}>
      <GridList spacing={2} className={classes.gridList}>
        {predictions.map(prediction => (
          <GridListTile key={prediction.id}>
            <img
              src={prediction.inputImageUrl}
              alt={prediction.title}
            />
            <GridListTileBar
              title={prediction.title}
              actionIcon={
                <IconButton
                  aria-label={`info about ${prediction.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default inject('store')(observer(MediaGrid));
