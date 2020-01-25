import { observable, action, decorate, toJS } from 'mobx';

class SessionStore {
  auth = null
  authUser = null;
  googleProvider = null

  setAuth(auth) {
    this.auth = auth;
  }

  setAuthUser(authUser) {
    this.authUser = authUser;
  }

  setGoogleProvider(googleProvider) {
    this.googleProvider = googleProvider;
  }

  async getAuthUser() {
    try {
      console.log('get Auth User')
    } catch (error) {
      console.log(error);
    }
  }

  dehydrate() {
    return {
      auth: this.auth,
      authUser: this.authUser,
      googleProvider: this.googleProvider,
    };
  }
}

decorate(SessionStore, {
  auth: observable,
  authUser: observable,
  googleProvider: observable,
  setAuthUser: action,
  setGoogleProvider: action,
  getAuthUser: action,
});

export default SessionStore;
