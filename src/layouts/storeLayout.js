import React, { useContext, useMemo } from 'react';
import { inject } from 'mobx-react';
import { FirebaseContext } from 'gatsby-plugin-firebase';

const StoreLayout = ({ predictions: firebaseStore, children }) => {
  const firebase = useContext(FirebaseContext);

  useMemo(() => {
    if (!firebase) return;
    firebaseStore.setFirebase(firebase);
    firebaseStore.setAuth(firebase.auth());
    firebaseStore.setFirestore(firebase.firestore());
    firebaseStore.setStorageRef(firebase.storage());
  }, [firebase]);

  return <div>{children}</div>;
};

export default inject('predictions')(StoreLayout);
