import React from 'react';

import SEO from 'src/components/seo';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';
import StoreLayout from 'src/layouts/storeLayout'

import Loadable from '@loadable/component';

const IndexComponent = Loadable(
  () => import('src/components/index/indexComponent'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const IndexPage = () => {
  return (
    <StoreLayout>
      <SEO title="Deep Six Design" />
      <IndexComponent />
    </StoreLayout>
  );
};

export default IndexPage;
