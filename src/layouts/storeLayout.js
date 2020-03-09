import React, { useContext, useMemo } from 'react';
import { inject } from 'mobx-react';
import { FirebaseContext } from 'gatsby-plugin-firebase';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const StoreLayout = ({ store, children }) => {
  const firebase = useContext(FirebaseContext);

  const { firebaseStore, sessionStore, predictionsStore } = store;

  const prefersDarkMode = useMediaQuery(
    '(prefers-color-scheme: dark)',
  );

  useMemo(() => {
    if (!firebase) return;
    firebaseStore.setFirebase(firebase);
  }, [firebase, firebaseStore]);

  useMemo(() => {
    if (!firebase) return;
    sessionStore.setAuth(firebase.auth());
    sessionStore.getAuthUser();
    sessionStore.getAuthToken();
    sessionStore.setGoogleProvider(
      new firebase.auth.GoogleAuthProvider(),
    );
    sessionStore.getLoggedIn();
  }, [firebase, sessionStore]);

  useMemo(() => {
    if (!firebase) return;
    predictionsStore.setStorage(firebase.storage());
    predictionsStore.setFirestore(firebase.firestore());
  }, [firebase, predictionsStore]);

  useMemo(() => {
    themeStore.getColor();
    themeStore.setIsDark(prefersDarkMode);
    themeStore.getIsDark();
  }, [prefersDarkMode, themeStore]);

  return <div>{children}</div>;
};

export default inject('store')(StoreLayout);
