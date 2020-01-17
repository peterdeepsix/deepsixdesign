import 'babel-polyfill';
import React from 'react';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import AppLayout from './src/components/layouts/appLayout';

import provideStores from './src/providers/provide-stores';

export const wrapRootElement = ({ element }) => {
  return <AppLayout>{provideStores({ element })}</AppLayout>;
};

export const onClientEntry = () => {
  LogRocket.init('6frqmr/deepsixdesign');
  setupLogRocketReact(LogRocket);
};
