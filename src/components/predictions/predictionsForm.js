import React, { useEffect, useState } from 'react';

import { inject, observer } from 'mobx-react';

import { Formik, Form } from 'formik';

import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Button, LinearProgress } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { DatePicker } from 'formik-material-ui-pickers';
import { Select, TextField } from 'formik-material-ui';

import { DropzoneDialog } from 'material-ui-dropzone';

import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';

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

const PredictionsForm = ({ handleClose, store }) => {
  const classes = useStyles();
  const { firestore, storage } = store.predictionsStore;

  const [isInitialized, setIsInitialized] = useState(false);
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [inputImageUrl, setInputImageUrl] = useState([]);

  useEffect(() => {
    if (!firestore) return;
    setIsInitialized(true);
  }, [firestore, setIsInitialized]);

  const handleDropzoneClose = () => {
    setOpen(false);
  };

  const handleDropzoneSave = files => {
    setFiles(files);
    handleSubmit(files);
    setOpen(false);
  };

  const handleDropzoneOpen = () => {
    setOpen(true);
  };

  const handleSubmit = files => {
    const file = files[0];

    const uploadTask = storage
      .ref()
      .child(file.name)
      .put(file);

    uploadTask.on(
      'state_changed',
      snapshot => {
        let progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        setProgress(progress);
        setLoading(true);
        console.log(`Progress - ${progress}`);
      },
      error => {
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          setLoading(false);
          setInputImageUrl(downloadURL);
        });
      },
    );
  };

  if (!isInitialized) return null;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Box>
        <Formik
          initialValues={{
            dueAt: new Date(),
            title: '',
            status: 'pending',
          }}
          onSubmit={(values, { setSubmitting }) => {
            store.predictionsStore.addPrediction({
              title: values.title,
              status: values.status,
              dueAt: values.dueAt.valueOf(),
              inputImageUrl: inputImageUrl,
            });
            setSubmitting(false);
            handleClose();
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <Box>
                <TextField type="text" label="Title" name="title" />
              </Box>
              <br />
              <Box>
                <FormControl>
                  <InputLabel htmlFor="status">Status</InputLabel>
                  <Select
                    type="text"
                    name="status"
                    inputProps={{
                      id: 'status',
                    }}
                  >
                    <MenuItem value="not started">
                      Not Started
                    </MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <br />
              <Box>
                <DatePicker
                  variant="outlined"
                  name="dueAt"
                  label="Due At"
                />
              </Box>
              <br />
              <Box>
                <Button
                  variant="outlined"
                  onClick={handleDropzoneOpen}
                >
                  Upload Media
                </Button>
                <DropzoneDialog
                  open={open}
                  onSave={handleDropzoneSave}
                  acceptedFiles={[
                    'image/jpeg',
                    'image/png',
                    'image/bmp',
                  ]}
                  dialogTitle="Upload Media"
                  dropzoneText="Drag and drop media files, or click to select."
                  maxFileSize={50000000}
                  filesLimit={1}
                  maxWidth="sm"
                  fullWidth={true}
                  showFileNames={false}
                  showPreviews={false}
                  showPreviewsInDropzone={true}
                  onClose={handleDropzoneClose}
                />
              </Box>
              <br />
              <Box>
                <img width={200} src={inputImageUrl} />
              </Box>
              {isSubmitting && <LinearProgress />}
              <br />
              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                  variant="outlined"
                >
                  Submit Prediction
                </Button>
              </Box>
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
