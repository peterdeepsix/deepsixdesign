import React, { useContext, useMemo } from 'react';
import { inject } from 'mobx-react';
import { FirebaseContext } from 'gatsby-plugin-firebase';

const DefaultLayout = ({
  predictions: predictionsStore,
  children,
}) => {
  // get firebase context from the plugin
  const firebase = useContext(FirebaseContext);

  useMemo(() => {
    if (!firebase) return;
    // after firebase init add it to the store
    predictionsStore.setFirestore(firebase.firestore());
  }, [firebase]);

  return <div>{children}</div>;
};

export default inject('predictions')(DefaultLayout);
