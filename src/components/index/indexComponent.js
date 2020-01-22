import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const IndexComponent = ({ predictions: predictionsStore }) => {
  const [isLoading, setIsLoading] = useState(true)
  const { predictions, firestore } = predictionsStore

  useEffect(() => {
    if (!firestore) return
    let didCancel = false

    const getTasks = async () => {
      console.log('getTasks')
      await predictionsStore.getTasks()
      if (!didCancel) setIsLoading(false)
    }
    getTasks()
    return () => (didCancel = true)
  }, [firestore])

  if (isLoading) return 'Loading predictions...'
  return (
    <Container>
      <Box maxWidth="sm">
        <ul>
          {predictions.map(prediction => (
            <div key={prediction.id}>
              <p>{prediction.title}</p>
            </div>
          ))}
        </ul>
      </Box>
    </Container>
  );
};

export default inject('predictions')(observer(IndexComponent))
