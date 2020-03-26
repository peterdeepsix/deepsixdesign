import React from 'react';
import { inject, observer } from 'mobx-react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const VideoStream = ({ store, muted, stream }) => {
  const classes = useStyles();

  const setVideoRef = (videoElement) => {
    if (videoElement) {
      videoElement.srcObject = stream;
    }
  };

  return <video muted={muted} autoPlay={true} ref={setVideoRef} />;
};
export default inject('store')(observer(VideoStream));
