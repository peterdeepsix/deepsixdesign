import React from 'react';

import SEO from 'src/components/seo';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

import Loadable from '@loadable/component';

const IndexComponent = Loadable(
  () => import('src/components/index/indexComponent'),
  {
    fallback: <IndefiniteLoading />,
  },
);

const IndexPage = () => {
  return (
    <>
      <SEO title="Deep Six Design" />
      {/* <IndexComponent /> */}
    </>
  );
};

export default IndexPage;
