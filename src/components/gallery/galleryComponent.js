import React from 'react';
import Loadable from '@loadable/component';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const MediaGrid = Loadable(
  () => import('src/components/gallery/mediaGrid'),
  {
    fallback: <IndefiniteLoading message="loading mediaGrid" />,
  },
);

const GalleryComponent = () => {
  return (
    <>
      <MediaGrid />
    </>
  );
};

export default GalleryComponent;
