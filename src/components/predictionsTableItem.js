import React, { useState } from 'react';
import { inject } from 'mobx-react';
import dateFormat from 'date-format';

const PredictionsTableItem = ({
  predictions: predictionsStore,
  prediction,
  rowData,
}) => {
  const [isBusy, setIsBusy] = useState(false);
  const { title, status, dueAt } = rowData;
  const { firestore } = predictionsStore;

  const handleMarkComplete = async () => {
    setIsBusy(true);
    // update the task with the new status
    await predictionsStore.updatePrediction({
      ...prediction,
      status: 'complete',
    });
    setIsBusy(false);
  };

  return (
    <li>
      <h3>{title}</h3>
      <div>
        <time>Due {dateFormat('MM/dd/yyyy', new Date(dueAt))}</time>
      </div>
      <div>
        <mark>{status}</mark>
        {status !== 'complete' && (
          <button
            disabled={!firestore || isBusy}
            onClick={handleMarkComplete}
          >
            {isBusy ? '...' : 'Mark Complete'}
          </button>
        )}
      </div>
    </li>
  );
};

export default inject('predictions')(PredictionsTableItem);
