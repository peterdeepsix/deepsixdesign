/* eslint-disable import/prefer-default-export, react/prop-types */
import 'babel-polyfill';
import React from 'react';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import TopLayout from './src/components/layouts/topLayout';

// mobx stores
import provideStores from './src/providers/provide-stores';

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{provideStores({ element })}</TopLayout>;
};

export const onClientEntry = () => {
  console.log('Log Rocket!');
  LogRocket.init('6frqmr/deepsixdesign');
  setupLogRocketReact(LogRocket);
};
