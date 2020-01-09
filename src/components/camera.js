import React, { useRef, useState } from 'react';
import Measure from 'react-measure';
import { useUserMedia } from '../hooks/useUserMedia';
import { useCardRatio } from '../hooks/useCardRatio';
import { useOffsets } from '../hooks/useOffsets';
import {
  Video,
  Canvas,
  Wrapper,
  Container,
  Flash,
  Overlay,
} from './styles';

import Button from '@material-ui/core/Button';

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: 'environment' },
};

const Camera = ({ onCapture, onClear }) => {
  const canvasRef = useRef();
  const videoRef = useRef();

  const [container, setContainer] = useState({ width: 0, height: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
  const [isFlashing, setIsFlashing] = useState(false);

  const mediaStream = useUserMedia(CAPTURE_OPTIONS);
  const [aspectRatio, calculateRatio] = useCardRatio(1.586);
  const offsets = useOffsets(
    videoRef.current && videoRef.current.videoWidth,
    videoRef.current && videoRef.current.videoHeight,
    container.width,
    container.height,
  );

  if (
    mediaStream &&
    videoRef.current &&
    !videoRef.current.srcObject
  ) {
    videoRef.current.srcObject = mediaStream;
  }

  function handleResize(contentRect) {
    setContainer({
      width: contentRect.bounds.width,
      height: Math.round(contentRect.bounds.width / aspectRatio),
    });
  }

  function handleCanPlay() {
    calculateRatio(
      videoRef.current.videoHeight,
      videoRef.current.videoWidth,
    );
    setIsVideoPlaying(true);
    videoRef.current.play();
  }

  function handleCapture() {
    const context = canvasRef.current.getContext('2d');

    context.drawImage(
      videoRef.current,
      offsets.x,
      offsets.y,
      container.width,
      container.height,
      0,
      0,
      container.width,
      container.height,
    );

    canvasRef.current.toBlob(
      blob => onCapture(blob),
      'image/jpeg',
      1,
    );
    setIsCanvasEmpty(false);
    setIsFlashing(true);
  }

  function handleClear() {
    const context = canvasRef.current.getContext('2d');
    context.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height,
    );
    setIsCanvasEmpty(true);
    onClear();
  }

  if (!mediaStream) {
    return null;
  }

  return (
    <Container>
      <Measure bounds onResize={handleResize}>
        {({ measureRef }) => (
          <Wrapper>
            <Container
              ref={measureRef}
              maxHeight={
                videoRef.current && videoRef.current.videoHeight
              }
              maxWidth={
                videoRef.current && videoRef.current.videoWidth
              }
              style={{
                height: `${container.height}px`,
              }}
            >
              <Video
                ref={videoRef}
                hidden={!isVideoPlaying}
                onCanPlay={handleCanPlay}
                autoPlay
                playsInline
                muted
                style={{
                  top: `-${offsets.y}px`,
                  left: `-${offsets.x}px`,
                }}
              />

              <Overlay hidden={!isVideoPlaying} />

              <Canvas
                ref={canvasRef}
                width={container.width}
                height={container.height}
              />

              <Flash
                flash={isFlashing}
                onAnimationEnd={() => setIsFlashing(false)}
              />
            </Container>
            {isVideoPlaying && (
              <Button
                color="primary"
                onClick={isCanvasEmpty ? handleCapture : handleClear}
              >
                {isCanvasEmpty
                  ? 'Make a prediction'
                  : 'Make another prediction'}
              </Button>
            )}
          </Wrapper>
        )}
      </Measure>
    </Container>
  );
};
export default Camera;