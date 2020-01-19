import React, { useEffect, useRef } from 'react';
import usePersistentState from './usePeristentState';

function usePersistentCanvas(draw) {
  const [locations, setLocations] = usePersistentState([]);

  const canvasRef = useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    locations.forEach(location => draw(ctx, location));
  });
  return [locations, setLocations, canvasRef];
}

export default usePersistentCanvas;
