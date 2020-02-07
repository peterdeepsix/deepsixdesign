import React, {
  useContext,
  useMemo,
  useEffect,
  useState,
} from 'react';
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
    sessionStore.getAuthUser();
    sessionStore.getAuthToken();
    sessionStore.getLoggedIn();

    themeStore.getColor();
    themeStore.getIsDark();
    themeStore.setIsDark(prefersDarkMode);

    firebaseStore.setFirebase(firebase);

    predictionsStore.setStorage(firebase.storage());
    predictionsStore.setFirestore(firebase.firestore());

    sessionStore.setAuth(firebase.auth());
    sessionStore.setGoogleProvider(
      new firebase.auth.GoogleAuthProvider(),
    );
  }, [firebase, prefersDarkMode]);

  return <div>{children}</div>;
};

export default inject('store')(StoreLayout);
