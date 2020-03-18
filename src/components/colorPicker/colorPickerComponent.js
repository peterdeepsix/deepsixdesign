import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';

import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { CirclePicker, SliderPicker, BlockPicker } from 'react-color';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import DialogTitle from '@material-ui/core/DialogTitle';

import { GoPaintcan } from 'react-icons/go';

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
      <Button
        color="primary"
        onClick={handleClickOpen}
        aria-label="change color"
        variant="contained"
        startIcon={<GoPaintcan />}
      >
        Theme Color
      </Button>
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
          <DialogContentText>
            Select a color to be used for the interface theme.
          </DialogContentText>
          <Container disableGutters maxWidth="sm">
            <Box my={4}>
              <CirclePicker
                circleSize={64}
                circleSpacing={16}
                width="480"
                color={color}
                onChangeComplete={handleChangeComplete}
              />
            </Box>
            <Box my={4}>
              <SliderPicker
                width="480"
                color={color}
                onChangeComplete={handleChangeComplete}
              />
            </Box>
            <Box my={4}>
              <BlockPicker
                colors={[]}
                triangle="hide"
                width="480"
                color={color}
                onChangeComplete={handleChangeComplete}
              />
            </Box>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button
            size="large"
            variant="contained"
            onClick={handleClose}
            color="primary"
            autoFocus
          >
            Save
          </Button>
          <Button
            size="large"
            variant="outlined"
            autoFocus
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default inject('store')(observer(ColorPickerComponent));
