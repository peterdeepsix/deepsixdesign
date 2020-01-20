import React from 'react';

import StoreLayout from 'src/layouts/storeLayout';
import SEO from 'src/components/seo';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

import Loadable from '@loadable/component';

const StreamComponent = Loadable(
  () => import('src/components/stream/streamComponent'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const StreamPage = () => {
  return (
    <StoreLayout>
      <SEO title="Stream - Deep Six Design" />
      <StreamComponent />
    </StoreLayout>
  );
};

export default StreamPage;
