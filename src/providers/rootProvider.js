import React from 'react';
import { Provider } from 'mobx-react';
import Loadable from '@loadable/component';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';
import Store from 'src/stores/rootStore';

const FirebaseLayout = Loadable(
  () => import('src/layouts/FirebaseLayout'),
  {
    fallback: <IndefiniteLoading message="FirebaseLayout" />,
  },
);

const SessionLayout = Loadable(
  () => import('src/layouts/SessionLayout'),
  {
    fallback: <IndefiniteLoading message="SessionLayout" />,
  },
);

const ThemeLayout = Loadable(
  () => import('src/layouts/ThemeLayout'),
  {
    fallback: <IndefiniteLoading message="ThemeLayout" />,
  },
);

const HelmetLayout = Loadable(
  () => import('src/layouts/HelmetLayout'),
  {
    fallback: <IndefiniteLoading message="HelmetLayout" />,
  },
);

const RootProvider = ({ element }) => {
  return (
    <Provider store={Store}>
      <FirebaseLayout>
        <SessionLayout>
          <ThemeLayout>
            <HelmetLayout>{element}</HelmetLayout>
          </ThemeLayout>
        </SessionLayout>
      </FirebaseLayout>
    </Provider>
  );
};

export default RootProvider;
