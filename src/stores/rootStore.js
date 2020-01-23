import ObjectsStore from './objectsStore';
import SessionStore from './sessionStore';

class RootStore {
    constructor() {
        this.objectsStore = new ObjectsStore(this);
        this.sessionStore = new SessionStore(this);
    }
}

const rootStore = new RootStore();

export default rootStore;