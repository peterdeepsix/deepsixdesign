import React from 'react';
import { Provider } from 'mobx-react';
import Store from 'src/stores/rootStore';

export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  return (
    <Provider store={Store}>
      {element}
    </Provider>)
}
