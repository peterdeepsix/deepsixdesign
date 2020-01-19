import React, { useEffect, useState } from 'react';

function usePersistentState(init) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem('draw-app')) || init,
  );
  useEffect(() => {
    localStorage.setItem('draw-app', JSON.stringify(value));
  });
  return [value, setValue];
}

export default usePersistentState;
