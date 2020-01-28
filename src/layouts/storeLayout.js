import React, { useContext, useMemo, useState } from 'react';
import { inject } from 'mobx-react';
import { FirebaseContext } from 'gatsby-plugin-firebase';

const StoreLayout = ({ store, children }) => {
  const firebase = useContext(FirebaseContext);

  const [storage, setStorage] = useState(null);
  const [firestore, setFirestore] = useState(null);
  const [auth, setAuth] = useState(null);
  const { sessionStore, predictionsStore } = store;

  useMemo(() => {
    if (!firebase) return;

    setStorage(firebase.storage());
    setFirestore(firebase.firestore());
    setAuth(firebase.auth());

    predictionsStore.setStorage(storage);
    predictionsStore.setFirestore(firestore);

    sessionStore.setAuth(auth);
    sessionStore.setGoogleProvider(
      new firebase.auth.GoogleAuthProvider(),
    );
  }, [firebase]);

  return <div>{children}</div>;
};

export default inject('store')(StoreLayout);
