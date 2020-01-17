import React, {
  useEffect,
  forwardRef,
  useRef,
  useState,
} from 'react';

import { inject, observer } from 'mobx-react';
import dateFormat from 'date-format';
import 'date-fns';

import { useFirebase } from 'gatsby-plugin-firebase';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
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

const PredictionsForm = ({
  handleClose,
  predictions: predictionsStore,
}) => {
  const classes = useStyles();
  const { firestore } = predictionsStore;

  const titleRef = useRef(null);
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [message, setMessage] = useState('');
  const [storage, setStorage] = useState(null);

  useFirebase(firebase => {
    setStorage(firebase.storage());
  }, []);

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
      handleClose();
      setMessage('Prediction added!');
    } else {
      setMessage('An error occurred adding the prediction.');
    }
    setIsSubmitting(false);
  };

  // wait for the firestore to be ready
  useEffect(() => {
    if (!firestore) return;
    setIsInitialized(true);
  }, [firestore, setIsInitialized]);

  if (!isInitialized) return null;
  return (
    <form onSubmit={handleSubmit}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Box>
          <TextField
            ref={titleRef}
            htmlFor="title"
            id="title"
            label="Title"
            name="title"
            onChange={handleTitleChange}
          />
        </Box>
        <Box>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Due Date"
            value={dueDate}
            className={classes.textField}
            onChange={handleDueDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Box>
        <Box>
          {message && (
            <Typography variant="body1">{message}</Typography>
          )}
        </Box>
        <Box>
          <Button
            variant="outlined"
            type="submit"
            color="primary"
            disabled={!title || isSubmitting}
          >
            Create Prediction
          </Button>
        </Box>
      </MuiPickersUtilsProvider>
    </form>
  );
};

export default inject('predictions')(observer(PredictionsForm));
