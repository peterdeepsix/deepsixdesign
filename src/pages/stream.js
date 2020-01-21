import React from 'react';
import Loadable from '@loadable/component';

import SEO from 'src/components/seo';
import AppLayout from 'src/layouts/appLayout'
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';



const StreamComponent = Loadable(
  () => import('src/components/stream/streamComponent'),
  {
    fallback: <IndefiniteLoading message="StreamComponent" />,
  },
);

const StreamPage = () => {
  return (
    <AppLayout>
      <SEO title="Stream - Deep Six Design" />
      <StreamComponent />
    </AppLayout>
  );
};

export default StreamPage;
