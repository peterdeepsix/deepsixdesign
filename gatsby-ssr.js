import 'babel-polyfill';
import React from 'react';

// material-ui
import AppLayout from './src/components/layouts/appLayout';

// mobx stores
import provideStores from './src/providers/provide-stores';

export const wrapRootElement = ({ element }) => {
  return provideStores(<AppLayout>{element}</AppLayout>);
};
