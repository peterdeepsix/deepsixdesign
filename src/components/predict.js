import React, { useRef } from "react";

import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

import { useObjects } from "use-tensorflow";

import pic from "../images/room.jpg"

const Predict = () => {

  const ref = useRef(null);
  const objects = useObjects(ref);

  return(
    <Container maxWidth="sm">
      <Box my={4}>
      <img ref={ref} src={pic} />
      {objects ? objects.map(({ left, top, width, height, label, score }) => (
        <Typography variant="h4" component="h4" gutterBottom align="center">
        {left}-{top}-{width}-{height}-{label}-{score}
      </Typography>
      )) : 'Loading...'}
        
      </Box>
    </Container>
  )
}
export default Predict
