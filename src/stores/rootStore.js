import ObjectsStore from './objectsStore';
import SessionStore from './sessionStore';
import PredictionsStore from './predictionsStore';
import FirebaseStore from './firebaseStore';

class RootStore {
  constructor() {
    // this.objectsStore = new ObjectsStore(this);
    this.firebaseStore = new FirebaseStore(this);
    this.sessionStore = new SessionStore(this);
    this.predictionsStore = new PredictionsStore(this);
  }
}
const Store = new RootStore();

export default Store;
