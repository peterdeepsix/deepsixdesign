import React from 'react';

import SEO from 'src/components/seo';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

import Loadable from '@loadable/component';

import StoreProvider from 'src/providers/storeProvider';
import PredictionsStore from 'src/stores/predictionsStore'

const IndexComponent = Loadable(
  () => import('src/components/index/indexComponent'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const IndexPage = () => {
  return (
    <StoreProvider predictions={new PredictionsStore()}>
      <SEO title="Deep Six Design" />
      <IndexComponent />
    </StoreProvider>
  );
};

export default IndexPage;
