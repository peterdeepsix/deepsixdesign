import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';

import { useTheme } from '@material-ui/core/styles';
import { SketchPicker } from 'react-color';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const ColorPickerComponent = ({ store }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const { themeStore } = store;
  const { color } = themeStore;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeComplete = newColor => {
    themeStore.setColor(newColor);
  };

  return (
    <>
      <IconButton
        aria-label="change color"
        color="primary"
        onClick={handleClickOpen}
      >
        <ColorLensOutlinedIcon />
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {'Change Theme Color'}
        </DialogTitle>
        <DialogContent>
          {/* <SketchPicker
            disableAlpha
            color={color}
            onChangeComplete={handleChangeComplete}
          /> */}
          asd
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Save
          </Button>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default inject('store')(observer(ColorPickerComponent));
