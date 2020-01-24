import { observable, action, decorate } from 'mobx';

class SessionStore {
  auth = null
  googleProvider = null

  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  setAuth(auth) {
    this.auth = auth;
  }
  setGoogleProvider(firebase) {
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
  }

  dehydrate() {
    return {
      auth: this.auth,
      googleProvider: this.googleProvider
    };
  }
}
decorate(SessionStore, {
  auth: observable,
  googleProvider: observable,
  setAuth: action,
});

export default SessionStore;
