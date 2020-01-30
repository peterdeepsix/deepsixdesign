import React, {
  useEffect,
  forwardRef,
  useRef,
  useState,
} from 'react';

import { inject, observer } from 'mobx-react';
import 'date-fns';
import { Formik, Form } from 'formik';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button, LinearProgress } from '@material-ui/core';
import {
  TimePicker,
  DatePicker,
  DateTimePicker,
} from 'formik-material-ui-pickers';

import Box from '@material-ui/core/Box';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import MediaUploadComponent from 'src/components/mediaUpload/mediaUploadComponent';

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
  handleSubmission,
  handleClose,
  store,
}) => {
  const classes = useStyles();
  const { firestore } = store.predictionsStore;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async values => {
    // avoid double submissions
    if (isSubmitting) return;
    setIsSubmitting(true);

    // add the new task
    const success = await store.predictionsStore.addPrediction({
      title: values.title,
      dueAt: values.dueAt.valueOf(),
    });

    if (success) {
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
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Box>
        <Formik
          initialValues={{
            dueAt: new Date(),
            title: '',
            description: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <TextField name="title" label="Title" />
              <br />
              <TextField name="description" label="Description" />
              <br />
              <DatePicker name="dueAt" label="Due At" />
              <br />
              <MediaUploadComponent />
              <br />
              {isSubmitting && <LinearProgress />}
              <br />
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
                variant="outlined"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      <Box>
        {message && (
          <Typography variant="body1">{message}</Typography>
        )}
      </Box>
    </MuiPickersUtilsProvider>
  );
};

export default inject('store')(observer(PredictionsForm));
