import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import ShutterSpeedOutlinedIcon from '@material-ui/icons/ShutterSpeedOutlined';

import Loadable from '@loadable/component';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const MediaUploadComponent = Loadable(
  () => import('src//components/mediaUpload/mediaUploadComponent'),
  {
    fallback: <IndefiniteLoading message="MediaUploadComponent" />,
  },
);

const PredictionsForm = Loadable(() => import('./predictionsForm'), {
  fallback: <IndefiniteLoading message="PredictionsForm" />,
});

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  margin: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(0),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PredictionsDialog = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
        className={classes.margin}
      >
        <ShutterSpeedOutlinedIcon className={classes.extendedIcon} />
        Create Prediction
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar color="inherit" className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Create Prediction
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <MediaUploadComponent />
          <PredictionsForm handleClose={handleClose} />
        </Container>
      </Dialog>
    </React.Fragment>
  );
};

export default PredictionsDialog;
