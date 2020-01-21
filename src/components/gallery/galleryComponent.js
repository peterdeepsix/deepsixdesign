import React, { useEffect, useState } from 'react';
import Loadable from '@loadable/component';

import { makeStyles } from '@material-ui/core/styles';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const MediaUpload = Loadable(
  () => import('src/components/gallery/mediaUpload'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const MediaGrid = Loadable(
  () => import('src/components/gallery/mediaGrid'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const DetailDialog = Loadable(
  () => import('src/components/gallery/detailDialog'),
  {
    fallback: <IndefiniteLoading />,
  },
);



const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
  },
  chip: {
    marginLeft: theme.spacing(-0.5),
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const GalleryComponent = () => {
  return (
    <>
      <DetailDialog />
      <MediaUpload />
      <MediaGrid />
    </ >
  );
};

export default GalleryComponent;
