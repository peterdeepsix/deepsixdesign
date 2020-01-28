import React, {
  useContext,
  useMemo,
  useEffect,
  useState,
} from 'react';
import { inject } from 'mobx-react';
import { FirebaseContext } from 'gatsby-plugin-firebase';

const StoreLayout = ({ store, children }) => {
  const firebase = useContext(FirebaseContext);

  const { firebaseStore, sessionStore, predictionsStore } = store;

  useEffect(() => {
    console.log('get on useEffect');
    sessionStore.getAuthUser();
    sessionStore.getAuthToken();
    sessionStore.getLoggedIn();
  });

  useMemo(() => {
    if (!firebase) return;

    firebaseStore.setFirebase(firebase);

    predictionsStore.setStorage(firebase.storage());
    predictionsStore.setFirestore(firebase.firestore());

    sessionStore.setAuth(firebase.auth());
    sessionStore.setGoogleProvider(
      new firebase.auth.GoogleAuthProvider(),
    );
  }, [firebase]);

  return <div>{children}</div>;
};

export default inject('store')(StoreLayout);
