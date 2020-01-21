import React from 'react';
import { Provider } from 'mobx-react';
import PredictionsStore from 'src/stores/predictionsStore';

export default ({ element }) => (
  <Provider predictions={new PredictionsStore()}>
    {element}
  </Provider>
);
