import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import dateFormat from 'date-format'

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const IndexComponent = ({ predictions: predictionsStore }) => {
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

  if (isLoading) return 'Loading tasks...'
  return (
    <Container>
      <Box maxWidth="sm">
        <ul>
          {predictions.map(({ id, title, dueAt }) => (
            <li key={id}>
              <h3>{title}</h3>
              <time>
                {dateFormat('MM/dd/yyyy h:mm', new Date(dueAt))}
              </time>
            </li>
          ))}
        </ul>
      </Box>
    </Container>
  );
};

export default inject('predictions')(observer(IndexComponent))
