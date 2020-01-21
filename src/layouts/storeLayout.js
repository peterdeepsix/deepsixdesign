import React, { useContext, useMemo } from 'react';
import { inject } from 'mobx-react';
import { FirebaseContext } from 'gatsby-plugin-firebase';

const StoreLayout = ({ predictions: predictionsStore, children }) => {
  // get firebase context from the plugin
  const firebase = useContext(FirebaseContext);

  useMemo(() => {
    if (!firebase) return;
    // after firebase init add it to the store
    predictionsStore.setFirestore(firebase.firestore());
    predictionsStore.setStorageRef(firebase.storage());
  }, [firebase]);

  return <div>{children}</div>;
};

export default inject('predictions')(StoreLayout);
