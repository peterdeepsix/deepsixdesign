import React, { useContext, useMemo } from 'react';
import { inject } from 'mobx-react';
import { FirebaseContext } from 'gatsby-plugin-firebase';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const StoreLayout = ({ store, children }) => {
  const firebaseContext = useContext(FirebaseContext);

  const {
    firebaseStore,
    sessionStore,
    predictionsStore,
    themeStore,
  } = store;

  const prefersDarkMode = useMediaQuery(
    '(prefers-color-scheme: dark)',
  );

  useMemo(() => {
    if (!firebaseStore.firebase) return;
    firebaseStore.setFirebase(firebaseContext);
  }, [firebaseStore]);

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

  useMemo(() => {
    if (!firebaseStore.firebase) return;
    predictionsStore.setStorage(firebaseStore.firebase.storage());
    predictionsStore.setFirestore(firebaseStore.firebase.firestore());
  }, [firebaseStore, predictionsStore]);

  useMemo(() => {
    themeStore.getColor();
    themeStore.setIsDark(prefersDarkMode);
    themeStore.getIsDark();
  }, [prefersDarkMode, themeStore]);

  return <div>{children}</div>;
};

export default inject('store')(StoreLayout);
