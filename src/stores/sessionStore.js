import { observable, action, decorate } from 'mobx';

class SessionStore {
  auth = null
  googleProvider = null
  authUser = null

  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  setAuth(auth) {
    this.auth = auth;
  }
  setGoogleProvider(googleProvider) {
    this.googleProvider = googleProvider

  }
  signInWithGoogle(firebase) {
    firebase.auth().signInWithPopup(this.googleProvider).then(function (result) {
      const token = result.credential.accessToken;
      const user = result.user;
      this.setAuthUser(user)
    }).catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(errorMessage)
    });

  }
  setAuthUser(authUser) {
    this.authUser = authUser;
  }
  dehydrate() {
    return {
      auth: this.auth,
      authUser: this.authUser,
    };
  }
}

decorate(SessionStore, {
  auth: observable,
  authUser: observable,
  setAuth: action,
  setAuthUser: action,
  setGoogleProvider: action,
});

export default SessionStore;
