import React from 'react';
import { Provider } from 'mobx-react';
import Store from 'src/stores/rootStore';

export default ({ element }) => {
  return <Provider store={Store}>{element}</Provider>;
};
