import React from 'react';
import { Router } from '@reach/router';
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

const PrivateRouteComponent = Loadable(
  () => import('src/components/privateRoute/privateRouteComponent'),
  {
    fallback: <IndefiniteLoading message="PrivateRouteComponent" />,
  },
);

const SigninPageComponent = Loadable(
  () => import('src/components/signinPage/SigninPageComponent'),
  {
    fallback: <IndefiniteLoading message="SigninPageComponent" />,
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
      <Router>
        <PrivateRouteComponent
          path="/app/account"
          component={AccountPageComponent}
        />
        <SigninPageComponent path="/app/signin" />
      </Router>
    </InterfaceLayout>
  );
};
export default AccountPage;
