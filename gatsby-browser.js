import 'babel-polyfill';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// import 'firebase/messaging';
// import 'firebase/functions';
// import 'firebase/performance';
// import 'firebase/analytics';

import RootProvider from 'src/providers/RootProvider';

export const wrapRootElement = RootProvider;

export const onClientEntry = () => {
  LogRocket.init('6frqmr/deepsixdesign');
  setupLogRocketReact(LogRocket);
};
