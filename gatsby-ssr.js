import 'babel-polyfill';
import React from 'react';

// material-ui
import TopLayout from './src/components/layouts/topLayout';

// mobx stores
import provideStores from './src/providers/provide-stores';

export const wrapRootElement = ({ element }) => {
  return provideStores(<TopLayout>{element}</TopLayout>);
};
