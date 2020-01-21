import 'babel-polyfill';
import React from 'react';

import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

import AppLayout from 'src/layouts/appLayout'
import StoreLayout from 'src/layouts/storeLayout'

export const wrapRootElement = ({ element }) => {
  return (
    <AppLayout>
      {/* <StoreLayout> */}
      {element}
      {/* </StoreLayout> */}
    </AppLayout>
  )
};

export const onClientEntry = () => {
  LogRocket.init('6frqmr/deepsixdesign');
  setupLogRocketReact(LogRocket);
};
