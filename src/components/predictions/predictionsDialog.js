import React from 'react';
import Loadable from '@loadable/component';

import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import PredictionsForm from './predictionsForm';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const useStyles = makeStyles(theme => ({
  button: {
    marginBottom: theme.spacing(1),
  },
}));

export default function PredictionDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmission = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        className={classes.button}
        onClick={handleClickOpen}
      >
        Create Prediction
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {'Create Prediction'}
        </DialogTitle>
        <DialogContent>
          <PredictionsForm
            handleSubmission={handleSubmission}
            handleClose={handleClose}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
