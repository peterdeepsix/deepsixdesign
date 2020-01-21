import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'

import IndefiniteLoading from 'src/components/loading/indefiniteLoading'
import PredictionsTable from './predictionsTable';


import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2),
  },
}));

const PredictionsComponent = ({ predictions: predictionsStore }) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true)
  const { predictions, firestore } = predictionsStore

  useEffect(() => {
    if (!firestore) return
    let didCancel = false

    const getPredictions = async () => {
      await predictionsStore.getPredictions()
      if (!didCancel) setIsLoading(false)
    }
    getPredictions()
    return () => (didCancel = true)
  }, [firestore])

  if (isLoading) return <IndefiniteLoading message='Loading predictions component ...' />
  return (
    <div className={classes.container}>
      <Container>
        <Box>
          <PredictionsTable predictions={predictions} />
        </Box>
      </Container>
    </div>
  );
};

export default inject('predictions')(observer(PredictionsComponent))