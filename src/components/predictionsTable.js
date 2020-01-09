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
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const PredictionsTable = ({ predictions: predictionsStore }) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const { predictions, firestore } = predictionsStore;

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

  // Keep track of new prediction value
  const handleInputChange = event => {
    setPredictionValue(event.target.value);
  };

  // Add new prediction
  const handleNewPrediction = () => {
    predictionsStore.addPrediction(predictionValue);
    // clear the input field
    inputRef.current.value = '';
  };
  // Old but bette??????
  useEffect(() => {
    if (!firestore) return;
    // avoid race conditions
    let didCancel = false;

    const getPredictions = async () => {
      await predictionsStore.getPredictionss();
      if (!didCancel) setIsLoading(false);
    };
    getPredictions();
    return () => (didCancel = true);
  }, [firestore]);

  // wait for the firestore to be ready
  // useEffect(() => {
  //   if (!firestore) return;
  //   setIsInitialized(true);
  // }, [firestore, setIsInitialized]);

  // if (!isInitialized) return null;
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <React.Fragment>
      <div style={{ maxWidth: '100%' }}>
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
        <form onSubmit={handleSubmit}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Card className={classes.card} variant="outlined">
              <CardHeader
                title="Create a New Prediction"
                subheader="This will be wild."
              />
              <CardContent>
                <TextField
                  ref={titleRef}
                  htmlFor="title"
                  id="title"
                  label="Title"
                  name="title"
                  onChange={handleTitleChange}
                />
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
                {message && (
                  <Typography variant="body1">{message}</Typography>
                )}
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
            <Grid container justify="space-around"></Grid>
          </MuiPickersUtilsProvider>
        </form>

        <MaterialTable
          components={{
            Container: props => (
              <Card {...props} variant="outlined" />
            ),
          }}
          icons={tableIcons}
          columns={[
            { title: 'Filename', field: 'filename' },
            {
              title: 'Width',
              field: 'width',
              type: 'numeric',
            },
            {
              title: 'Height',
              field: 'height',
              type: 'numeric',
            },
          ]}
          data={[
            {
              filename: '00000000.jpg',
              height: 1024,
              width: 1024,
            },
            {
              filename: '00000001.jpg',
              height: 2048,
              width: 2048,
            },
            {
              filename: '00000002.jpg',
              height: 512,
              width: 512,
            },
          ]}
          title="Predictions"
        />
      </div>
    </React.Fragment>
  );
};

export default inject('predictions')(observer(PredictionsTable));
