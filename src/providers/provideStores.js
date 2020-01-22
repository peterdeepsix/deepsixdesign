import React from 'react';
import { Provider } from 'mobx-react';
import FirebaseStore from 'src/stores/firebaseStore';

export default ({ element }) => (
  <Provider firebaseStore={new FirebaseStore()}>
    {element}
  </Provider>
);
