import React, {
  useEffect,
  forwardRef,
  useRef,
  useState,
} from 'react';

import { inject, observer } from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';

import PredictionsTable from './predictionsTable';
import PredictionsForm from './predictionsForm';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  grid: {
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
    marginBottom: 12,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const PredictionsComponent = ({ predictions: predictionsStore }) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const { predictions, firestore } = predictionsStore;

  const [isBusy, setIsBusy] = useState(false);

  const inputRef = useRef(null);
  const [predictionValue, setPredictionValue] = useState('');

  const titleRef = useRef(null);
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [prediction, setPrediction] = useState('');
  const [message, setMessage] = useState('');

  const handleTitleChange = event =>
    setTitle(event.target.value.trim());

  const handleDueDateChange = date => {
    setDueDate(date);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    // avoid double submissions
    if (isSubmitting) return;
    setIsSubmitting(true);

    // add the new task
    const success = await predictionsStore.addPrediction({
      title,
      dueAt: dueDate.valueOf(),
    });

    if (success) {
      titleRef.current.value = '';
      setMessage('Prediction added!');
    } else {
      setMessage('An error occurred adding the prediction.');
    }
    setIsSubmitting(false);
  };

  return (
    <React.Fragment>
      <PredictionsTable />
      <PredictionsForm />
    </React.Fragment>
  );
};

export default inject('predictions')(observer(PredictionsComponent));
