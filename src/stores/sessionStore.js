import { observable, action, decorate } from 'mobx';


class SessionStore {
  authUser = null
  googleProvider = null

  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  setAuthUser(authUser) {
    this.authUser = authUser;
  }
  setGoogleProvider(googleProvider) {
    this.googleProvider = googleProvider;
  }
  dehydrate() {
    return {
      authUser: this.authUser,
      googleProvider: this.googleProvider,

    };
  }
}
decorate(SessionStore, {
  authUser: observable,
  googleProvider: observable,
  setAuthUser: action,
  setGoogleProvider: action,
});

export default SessionStore;
