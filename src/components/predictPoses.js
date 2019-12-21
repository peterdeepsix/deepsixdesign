import React from "react"
import useWindowSize from "../hooks/useWindowSize"
import { Container } from "./container"
import { Box } from "./box"
import { Circle } from "./circle"

import LinearProgress from "@material-ui/core/LinearProgress"

import useCamera from "../hooks/useCamera"

import { usePoses } from 'use-tensorflow';

const PredictPoses = () => {
    const videoRef = useCamera({ audio: false })
    const size = useWindowSize()
    const poses = usePoses(videoRef);


    return (
        <Container>
            {}
            {poses ? (
                poses.forEach(element => Object.entries(element)[0])
            ) : (
                <LinearProgress />
            )}
            <video
                ref={videoRef}
                autoPlay
                width={size.width}
                height={size.height - 64}
            />
        </Container>
    )
}
export default PredictPoses


