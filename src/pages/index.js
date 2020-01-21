import React from 'react';

import SEO from 'src/components/seo';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';
import AppLayout from 'src/layouts/appLayout'

import Loadable from '@loadable/component';

const IndexComponent = Loadable(
  () => import('src/components/index/indexComponent'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const IndexPage = () => {
  return (
    <AppLayout>
      <SEO title="Deep Six Design" />
      <IndexComponent />
    </AppLayout>
  );
};

export default IndexPage;
