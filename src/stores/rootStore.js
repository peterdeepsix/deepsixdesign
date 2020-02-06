import SessionStore from './sessionStore';
import PredictionsStore from './predictionsStore';
import FirebaseStore from './firebaseStore';
import ThemeStore from './themeStore';

class RootStore {
  constructor() {
    this.themeStore = new ThemeStore(this);
    this.firebaseStore = new FirebaseStore(this);
    this.sessionStore = new SessionStore(this);
    this.predictionsStore = new PredictionsStore(this);
  }
}
const Store = new RootStore();

export default Store;
