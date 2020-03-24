import { observable, action, decorate } from 'mobx';

class FirebaseStore {
  auth = null;
  firestore = null;

  setAuth(auth) {
    this.auth = auth;
  }

  setFirestore(firestore) {
    this.firestore = firestore;
  }
  dehydrate() {
    return {
      auth: this.auth,
      firestore: this.firestore,
    };
  }
}

decorate(FirebaseStore, {
  auth: observable,
  firestore: observable,
  setAuth: action,
  setFirestore: action,
});

export default FirebaseStore;
