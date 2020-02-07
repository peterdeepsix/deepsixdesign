import { observable, action, decorate } from 'mobx';

class FirebaseStore {
  firebase = null;

  setFirebase(firebase) {
    this.firebase = firebase;
  }
  dehydrate() {
    return {
      firebase: this.firebase,
    };
  }
}

decorate(FirebaseStore, {
  firebase: observable,
  setFirebase: action,
});

export default FirebaseStore;
