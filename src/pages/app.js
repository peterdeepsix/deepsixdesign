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

const PrivateRouteComponent = Loadable(
  () => import('src/components/privateRoute/privateRouteComponent'),
  {
    fallback: <IndefiniteLoading message="PrivateRouteComponent" />,
  },
);

const AppPageComponent = Loadable(
  () => import('src/components/appPage/AppPageComponent'),
  {
    fallback: <IndefiniteLoading message="AppPageComponent" />,
  },
);

const AccountPageComponent = Loadable(
  () => import('src/components/accountPage/AccountPageComponent'),
  {
    fallback: <IndefiniteLoading message="AccountPageComponent" />,
  },
);

const SigninPageComponent = Loadable(
  () => import('src/components/signinPage/SigninPageComponent'),
  {
    fallback: <IndefiniteLoading message="SigninPageComponent" />,
  },
);

const AppPage = ({ location, siteData }) => {
  return (
    <InterfaceLayout location={location}>
      <Router>
        <SigninPageComponent path="/app/signin" />
        <PrivateRouteComponent
          path="/app/account"
          component={AccountPageComponent}
        />
        {/* <PrivateRouteComponent
          path="/app"
          component={AppPageComponent}
        /> */}
      </Router>
    </InterfaceLayout>
  );
};
export default AppPage;
