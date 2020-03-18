import 'babel-polyfill';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

import RootProvider from 'src/providers/rootProvider';

export const wrapRootElement = RootProvider;

export const onClientEntry = () => {
  LogRocket.init('6frqmr/deepsixdesign');
  setupLogRocketReact(LogRocket);
};
