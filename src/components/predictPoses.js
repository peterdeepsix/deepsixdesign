import React from "react";
import useWindowSize from '../hooks/useWindowSize';
import { Container } from "./container"
import { Box } from "./box"

import LinearProgress from '@material-ui/core/LinearProgress';

import useCamera from "../hooks/useCamera";

import { useObjects } from "use-tensorflow";

const PredictPoses = () => {
  
  const videoRef = useCamera({ audio: false });
  const size = useWindowSize();
  const objects = useObjects(videoRef);

  return(
    <Container>
      {objects ? objects.map(({ left, top, width, height, label, score }) => (
          <Box
          left={left}
          top={top}
          width={width}
          height={height}
          label={label}
          color={score > 0.6 ? "#FF1654" : "#70C1B3"}
          score={score}
        />
      )) :  <LinearProgress />}
      <video ref={videoRef} autoPlay width={size.width} height={(size.height - 64)} />
    </Container>
  )
}
export default PredictPoses
