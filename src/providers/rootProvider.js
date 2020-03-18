import React from 'react';
import { Provider } from 'mobx-react';
import Loadable from '@loadable/component';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';
import Store from 'src/stores/rootStore';

const StoreLayout = Loadable(
  () => import('src/layouts/storeLayout'),
  {
    fallback: <IndefiniteLoading message="StoreLayout" />,
  },
);

const ThemeLayout = Loadable(
  () => import('src/layouts/themeLayout'),
  {
    fallback: <IndefiniteLoading message="ThemeLayout" />,
  },
);

const MainLayout = Loadable(() => import('src/layouts/mainLayout'), {
  fallback: <IndefiniteLoading message="MainLayout" />,
});

const RootProvider = ({ element }) => {
  return (
    <Provider store={Store}>
      <StoreLayout>
        <ThemeLayout>{element}</ThemeLayout>
      </StoreLayout>
    </Provider>
  );
};

export default RootProvider;
