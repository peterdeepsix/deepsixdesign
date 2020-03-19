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

const AccountPageComponent = Loadable(
  () => import('src/components/accountPage/AccountPageComponent'),
  {
    fallback: <IndefiniteLoading message="AccountPageComponent" />,
  },
);

const AccountPage = ({ location, siteData }) => {
  return (
    <InterfaceLayout location={location}>
      {/* <HelmetComponent
        title={`${location.pathname.replace(/\//, '')} - ${
          siteData.site.siteMetadata.title
        }`}
      /> */}
      <AccountPageComponent />
    </InterfaceLayout>
  );
};
export default AccountPage;
