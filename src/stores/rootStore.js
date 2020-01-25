import ObjectsStore from './objectsStore';
import SessionStore from './sessionStore';

class RootStore {
    constructor() {
        this.objectsStore = new ObjectsStore(this);
        this.sessionStore = new SessionStore(this);
    }
}
const Store = new RootStore()

export default Store;