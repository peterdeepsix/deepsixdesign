import 'babel-polyfill';
import React from 'react';

import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

import StoreProvider from 'src/providers/storeProvider';
import PredictionsStore from 'src/stores/predictionsStore'

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
