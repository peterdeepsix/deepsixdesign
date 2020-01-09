/* eslint-disable import/prefer-default-export, react/prop-types */
import 'babel-polyfill';
import React from 'react';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import TopLayout from './plugins/gatsby-plugin-top-layout/TopLayout';

// mobx stores
import provideStores from './provide-stores';

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{provideStores({ element })}</TopLayout>;
};

export const onClientEntry = () => {
  console.log('Log Rocket!');
  LogRocket.init('6frqmr/deepsixdesign');
  setupLogRocketReact(LogRocket);
};
