import React, { useMemo } from 'react';
import { inject } from 'mobx-react';
import firebase from 'gatsby-plugin-firebase';

const FirebaseLayout = ({ children, store }) => {
  const { firebaseStore } = store;
  const { setAuth, setFirestore } = firebaseStore;

  useMemo(() => {
    console.log('Check for firebase.');
    if (!firebase) return;
    console.log('Found firebase.');
  }, [firebase]);

  return <>{children}</>;
};

export default inject('store')(FirebaseLayout);
