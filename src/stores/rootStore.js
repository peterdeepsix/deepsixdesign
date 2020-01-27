import ObjectsStore from './objectsStore';
import SessionStore from './sessionStore';
import PredictionsStore from './predictionsStore';

class RootStore {
  constructor() {
    // this.objectsStore = new ObjectsStore(this);
    this.sessionStore = new SessionStore(this);
    this.predictionsStore = new PredictionsStore(this);
  }
}
const Store = new RootStore();

export default Store;
