import React from 'react';

import Loadable from '@loadable/component';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const GalleryComponent = Loadable(
  () => import('src/components/gallery/galleryComponent'),
  {
    fallback: <IndefiniteLoading message="GalleryComponent" />,
  },
);

const GalleryPage = () => {
  return (
    <>
      <GalleryComponent />
    </>
  );
};

export default GalleryPage;
