import React, { useContext, useMemo } from 'react';
import { inject } from 'mobx-react';

const SessionLayout = ({ store, children }) => {
  const { firebaseStore, sessionStore } = store;

  useMemo(() => {
    if (!firebaseStore.firebase) return;
    sessionStore.setAuth(firebaseStore.firebase.auth());
    sessionStore.getAuthUser();
    sessionStore.getAuthToken();
    sessionStore.setGoogleProvider(
      new firebaseStore.firebase.auth.GoogleAuthProvider(),
    );
    sessionStore.getLoggedIn();
  }, [firebaseStore, sessionStore]);

  return <>{children}</>;
};

export default inject('store')(SessionLayout);
