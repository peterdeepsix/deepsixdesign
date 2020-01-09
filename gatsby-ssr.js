import 'babel-polyfill';
import React from 'react';

// material-ui
import TopLayout from './plugins/gatsby-plugin-top-layout/TopLayout';

// mobx stores
import provideStores from './provide-stores';

export const wrapRootElement = ({ element }) => {
  return provideStores(<TopLayout>{element}</TopLayout>);
};
