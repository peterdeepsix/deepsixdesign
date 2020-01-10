import React, {
  useEffect,
  forwardRef,
  useRef,
  useState,
} from 'react';

import { inject, observer } from 'mobx-react';
import dateFormat from 'date-format';
import 'date-fns';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { Paper } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import MaterialTable from 'material-table';
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from '@material-ui/icons';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => (
    <DeleteOutline {...props} ref={ref} />
  )),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => (
    <SaveAlt {...props} ref={ref} />
  )),
  Filter: forwardRef((props, ref) => (
    <FilterList {...props} ref={ref} />
  )),
  FirstPage: forwardRef((props, ref) => (
    <FirstPage {...props} ref={ref} />
  )),
  LastPage: forwardRef((props, ref) => (
    <LastPage {...props} ref={ref} />
  )),
  NextPage: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => (
    <Clear {...props} ref={ref} />
  )),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => (
    <ArrowDownward {...props} ref={ref} />
  )),
  ThirdStateCheck: forwardRef((props, ref) => (
    <Remove {...props} ref={ref} />
  )),
  ViewColumn: forwardRef((props, ref) => (
    <ViewColumn {...props} ref={ref} />
  )),
};

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

const PredictionsForm = ({ predictions: predictionsStore }) => {
  const classes = useStyles();

  // store
  const { predictions, firestore } = predictionsStore;

  // state
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const [prediction, setPrediction] = useState('');
  const [predictionValue, setPredictionValue] = useState('');
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [message, setMessage] = useState('');

  // refs
  const titleRef = useRef(null);
  const inputRef = useRef(null);

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

    // add the new prediction
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

  //wait for the firestore to be ready
  useEffect(() => {
    if (!firestore) return;
    setIsInitialized(true);
    console.log('firestore is init');
  }, [firestore, setIsInitialized]);

  if (!isInitialized) return null;

  if (isLoading) return <CircularProgress />;
  return (
    <form onSubmit={handleSubmit}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Box>
          <Card className={classes.card} variant="outlined">
            <CardHeader
              title="Create a New Prediction"
              subheader="This will be wild."
            />
            <CardContent>
              <Box>
                {' '}
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
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                type="submit"
                color="primary"
                disabled={!title || isSubmitting}
              >
                Add Prediction
              </Button>
            </CardActions>
          </Card>
        </Box>
      </MuiPickersUtilsProvider>
    </form>
  );
};

export default inject('predictions')(observer(PredictionsForm));
