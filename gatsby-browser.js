/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import TopLayout from './plugins/gatsby-plugin-top-layout/TopLayout';

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};

export const onClientEntry = () => {
  console.log('Log Rocket!');
  LogRocket.init('6frqmr/deepsixdesign');
  setupLogRocketReact(LogRocket);
};
