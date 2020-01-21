import 'babel-polyfill';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

import provideStores from 'src/providers/provideStores'

export const wrapRootElement = provideStores

export const onClientEntry = () => {
  LogRocket.init('6frqmr/deepsixdesign');
  setupLogRocketReact(LogRocket);
};
