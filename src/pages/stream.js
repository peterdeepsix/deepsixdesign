import React from 'react';

import SEO from 'src/components/seo';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

import Loadable from '@loadable/component';

const StreamComponent = Loadable(
  () => import('src/components/stream/streamComponent'),
  {
    fallback: <IndefiniteLoading message="StreamComponent" />,
  },
);

const StreamPage = () => {
  return (
    <>
      <SEO title="Stream - Deep Six Design" />
      <StreamComponent />
    </>
  );
};

export default StreamPage;
