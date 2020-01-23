import React from 'react';
import { Provider } from 'mobx-react';
import ObjectsStore from 'src/stores/objectsStore';

export default ({ element }) => (
  <Provider objects={new ObjectsStore()}>
    {element}
  </Provider>
);
