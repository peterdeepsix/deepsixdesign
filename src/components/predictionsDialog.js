import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import PredictionsForm from './predictionsForm';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
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
      <Container>
        <Box>
          {' '}
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClickOpen}
          >
            Generate Vision
          </Button>
        </Box>
      </Container>

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
              Generate Vision
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <PredictionsForm handleClose={handleClose} />
        </Container>
      </Dialog>
    </React.Fragment>
  );
};

export default PredictionsDialog;
