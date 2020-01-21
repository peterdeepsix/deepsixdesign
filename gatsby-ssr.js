import 'babel-polyfill';
import React from 'react';

import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

import AppLayout from 'src/layouts/appLayout'
import provideStores from 'src/providers/provideStores '

export const wrapRootElement = ({ element }) => {
  return provideStores(
    <AppLayout>
      {element}
    </AppLayout>
  )
};

export const onClientEntry = () => {
  LogRocket.init('6frqmr/deepsixdesign');
  setupLogRocketReact(LogRocket);
};
