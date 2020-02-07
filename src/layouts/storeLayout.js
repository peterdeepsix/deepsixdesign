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
    console.log('useMemo - firebaseStore');
    if (!firebase) return;
    firebaseStore.setFirebase(firebase);
  }, [firebase, firebaseStore]);

  useMemo(() => {
    console.log('useMemo - sessionStore');
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
    console.log('useMemo - predictionsStore');
    if (!firebase) return;
    predictionsStore.setStorage(firebase.storage());
    predictionsStore.setFirestore(firebase.firestore());
  }, [firebase, predictionsStore]);

  useMemo(() => {
    console.log('useMemo - themeStore');
    themeStore.getColor();
    themeStore.setIsDark(prefersDarkMode);
    themeStore.getIsDark();
  }, [prefersDarkMode, themeStore]);

  return <div>{children}</div>;
};

export default inject('store')(StoreLayout);
