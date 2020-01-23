import React from 'react';
import { Provider } from 'mobx-react';
import rootStore from 'src/stores/rootStore';

export default ({ element }) => (
  <Provider {...rootStore}>
    {element}
  </Provider>
);
