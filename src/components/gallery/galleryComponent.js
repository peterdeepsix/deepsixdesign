import React from 'react';
import Loadable from '@loadable/component';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const MediaGrid = Loadable(
  () => import('src/components/gallery/mediaGrid'),
  {
    fallback: <IndefiniteLoading message='loading mediaGrid' />,
  },
);

const CreatePredictionDialog = Loadable(
  () => import('src/components/gallery/createPredictionDialog'),
  {
    fallback: <IndefiniteLoading message='CreatePredictionDialog' />,
  },
);

const GalleryComponent = () => {
  return (
    <>
      <CreatePredictionDialog />
      <MediaGrid />
    </ >
  );
};

export default GalleryComponent;
