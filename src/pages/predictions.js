import React from 'react';

import DefaultLayout from '../components/layouts/defaultLayout';
import StoreLayout from '../components/layouts/storeLayout';

import SEO from '../components/seo';
import Loading from '../components/loading';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Loadable from '@loadable/component';

const PredictionsComponent = Loadable(
  () => import('../components/predictionsComponent'),
  {
    fallback: <Loading />,
  },
);

const Predictions = () => {
  return (
    <DefaultLayout>
      <StoreLayout>
        <SEO title="Predictions" />
        <PredictionsComponent />
      </StoreLayout>
    </DefaultLayout>
  );
};

export default Predictions;
