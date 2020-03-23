import React, { useContext, useMemo } from 'react';
import { inject } from 'mobx-react';
import { FirebaseContext } from 'gatsby-plugin-firebase';

const FirebaseLayout = ({ store, children }) => {
  const firebaseContext = useContext(FirebaseContext);
  const { firebaseStore, predictionsStore } = store;

  useMemo(() => {
    if (!firebaseStore.firebase) return;
    firebaseStore.setFirebase(firebaseContext);
  }, [firebaseStore]);

  useMemo(() => {
    if (!firebaseStore.firebase) return;
    predictionsStore.setStorage(firebaseStore.firebase.storage());
    predictionsStore.setFirestore(firebaseStore.firebase.firestore());
  }, [firebaseStore, predictionsStore]);

  return <>{children}</>;
};

export default inject('store')(FirebaseLayout);
