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
        <ThemeLayout>
          <HelmetLayout>{element}</HelmetLayout>
        </ThemeLayout>
      </FirebaseLayout>
    </Provider>
  );
};

export default RootProvider;
