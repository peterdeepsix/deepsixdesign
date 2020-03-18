import React from 'react';
import Loadable from '@loadable/component';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const HelmetComponent = Loadable(
  () => import('src/components/helmet/HelmetComponent'),
  {
    fallback: <IndefiniteLoading message="HelmetComponent" />,
  },
);

const InterfaceLayout = Loadable(
  () => import('src/layouts/InterfaceLayout'),
  {
    fallback: <IndefiniteLoading message="InterfaceLayout" />,
  },
);

const IndexComponent = Loadable(
  () => import('src/components/index/IndexComponent'),
  {
    fallback: <IndefiniteLoading message="IndexComponent" />,
  },
);

const IndexPage = ({ location, siteData }) => {
  return (
    <InterfaceLayout location={location}>
      {/* <HelmetComponent
        title={`${location.pathname.replace(/\//, '')} - ${
          siteData.site.siteMetadata.title
        }`}
      /> */}
      <IndexComponent />
    </InterfaceLayout>
  );
};
export default IndexPage;
