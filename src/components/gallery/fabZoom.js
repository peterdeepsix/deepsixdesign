import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { green } from '@material-ui/core/colors';

import TabPanel from './tabPanel';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    margin: 0,
    position: 'static',
    right: 'auto',
    bottom: 'auto',
    top: theme.spacing(2),
    left: theme.spacing(2),
    zIndex: 10000,
  },
}));

export default function FloatingActionButtonZoom(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const { onClick, disabled } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <div className={classes.root}>
      {/* <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab
            label="Item One"
            id="action-tab-0"
            aria-controls="action-tabpanel-0"
          />
          <Tab
            label="Item Two"
            id="action-tab-1"
            aria-controls="action-tabpanel-1"
          />
          <Tab
            label="Item Three"
            id="action-tab-2"
            aria-controls="action-tabpanel-2"
          />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Item Three
      </TabPanel> */}

      {/* <Zoom
        key="primary"
        in={value}
        timeout={transitionDuration}
        unmountOnExit
      > */}
      <Fab
        sticky
        variant="extended"
        aria-label="Create Prediction"
        className={classes.fab}
        color="primary"
        onClick={onClick}
        disabled={disabled}
      >
        <AddIcon />
        Create Prediction
      </Fab>
      {/* </Zoom> */}
    </div>
  );
}
