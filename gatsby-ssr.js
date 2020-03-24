import 'babel-polyfill';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// import 'firebase/messaging';
// import 'firebase/functions';
// import 'firebase/performance';
// import 'firebase/analytics';

import RootProvider from './src/providers/RootProvider';

export const wrapPageElement = RootProvider;
