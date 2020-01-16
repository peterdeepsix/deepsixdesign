import React from 'react';
import AppLayout from '../components/layouts/appLayout';
import StoreLayout from '../components/layouts/storeLayout';
import SEO from '../components/seo';
import Loading from '../components/loading';

import Loadable from '@loadable/component';

const ProcessComponent = Loadable(
  () => import('../components/process/processComponent'),
  {
    fallback: <Loading />,
  },
);

export default () => {
  return (
    <AppLayout>
      <StoreLayout>
        <SEO title="Timeline" />
        <ProcessComponent />
      </StoreLayout>
    </AppLayout>
  );
};
