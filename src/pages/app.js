import React from 'react';
import { Router } from '@reach/router';
import Loadable from '@loadable/component';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const PrivateRouteComponent = Loadable(
  () => import('src/components/privateRoute/privateRouteComponent'),
  {
    fallback: <IndefiniteLoading message="PrivateRouteComponent" />,
  },
);

const InterfaceLayout = Loadable(
  () => import('src/layouts/InterfaceLayout'),
  {
    fallback: <IndefiniteLoading message="InterfaceLayout" />,
  },
);

const FirebaseLayout = Loadable(
  () => import('src/layouts/firebaseLayout'),
  {
    fallback: <IndefiniteLoading message="FirebaseLayout" />,
  },
);

const DefaultComponent = Loadable(
  () => import('src/components/default/defaultComponent'),
  {
    fallback: <IndefiniteLoading message="DefaultComponent" />,
  },
);

const GeneratorComponent = Loadable(
  () => import('src/components/generator/generatorComponent'),
  {
    fallback: <IndefiniteLoading message="GeneratorComponent" />,
  },
);

const AccountComponent = Loadable(
  () => import('src/components/account/accountComponent'),
  {
    fallback: <IndefiniteLoading message="AccountComponent" />,
  },
);

const PredictionsComponent = Loadable(
  () => import('src/components/predictions/predictionsComponent'),
  {
    fallback: <IndefiniteLoading message="PredictionsComponent" />,
  },
);

const SignInComponent = Loadable(
  () => import('src/components/signIn/signInComponent'),
  {
    fallback: <IndefiniteLoading message="SignInComponent" />,
  },
);

const AppPage = () => {
  return (
    <>
      {/* <FirebaseLayout>
      <InterfaceLayout>
        <Router>
          <DefaultComponent path="/app" />
          <GeneratorComponent path="/app/generator" />
          <AccountComponent path="/app/account" />
          <PrivateRouteComponent
            path="/app/predictions"
            component={PredictionsComponent}
          />
          <SignInComponent path="/app/signin" />
        </Router>
      </InterfaceLayout>
    </FirebaseLayout> */}
    </>
  );
};

export default AppPage;
