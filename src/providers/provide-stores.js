import React from 'react';
import { Provider } from 'mobx-react';
import PredictionsStore from '../stores/predictions-store';

export default ({ element }) => (
  <Provider predictions={new PredictionsStore()}>{element}</Provider>
);