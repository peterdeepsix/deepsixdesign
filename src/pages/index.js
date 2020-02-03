import React from 'react';
import Loadable from '@loadable/component';

import SEO from 'src/components/seo';
import AppLayout from 'src/layouts/appLayout';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const IndexComponent = Loadable(
  () => import('src/components/index/indexComponent'),
  {
    fallback: <IndefiniteLoading message="IndexComponent" />,
  },
);

const IndexPage = ({ location }) => {
  return (
    <AppLayout location={location}>
      <SEO title="Deep Six Design" />
      <IndexComponent />
    </AppLayout>
  );
};

export default IndexPage;
