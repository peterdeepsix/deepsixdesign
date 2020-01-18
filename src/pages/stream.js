import React from 'react';

import StoreLayout from '../components/layouts/storeLayout';
import SEO from '../components/seo';
import Loading from '../components/loading';

import Loadable from '@loadable/component';

const StreamComponent = Loadable(
  () => import('../components/stream/streamComponent'),
  {
    fallback: <Loading />,
  },
);

const StreamPage = () => {
  return (
    <StoreLayout>
      <SEO title="Predictions" />
      <StreamComponent />
    </StoreLayout>
  );
};

export default StreamPage;
