import { useEffect, useRef } from 'react';

export default ({ audio, video } = {}) => {
  const ref = useRef(null);
  useEffect(() => {
    const attachCam = async (ref, audio = false, opts = {}) => {
      const {
        facingMode = 'environment',
        width = ref.width,
        height = ref.height,
      } = opts;
      if (
        !navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia
      ) {
        throw new Error('No camera available');
      }
      ref.srcObject = await navigator.mediaDevices.getUserMedia({
        audio,
        video: { facingMode, width, height },
      });
    };
    if (!ref.current) return;
    attachCam(ref.current, audio, video);
  }, []);
  return ref;
};
