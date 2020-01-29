import { observable, action, decorate, toJS } from 'mobx';
import localStorage from 'mobx-localstorage';

class SessionStore {
  auth = null;
  authUser = null;
  loggedIn = null;
  googleProvider = null;

  setAuth(auth) {
    this.auth = auth;
  }

  getAuthToken() {
    this.authToken = localStorage.getItem('authToken');
    console.log('getAuthToken');
    console.log(this.authToken);
  }
  getAuthUser() {
    this.authUser = localStorage.getItem('authUser');
    console.log('getAuthUser');
    console.log(this.authUser);
  }
  getLoggedIn() {
    this.loggedIn = localStorage.getItem('loggedIn');
    console.log('getLoggedIn');
    console.log(this.loggedIn);
  }

  setAuthToken(authToken) {
    this.authToken = authToken;
    localStorage.setItem('authToken', authToken);
  }

  setAuthUser(authUser) {
    this.authUser = authUser;
    localStorage.setItem('authUser', authUser);
  }

  setLoggedIn(loggedIn) {
    this.loggedIn = loggedIn;
    localStorage.setItem('loggedIn', loggedIn);
  }

  setGoogleProvider(googleProvider) {
    this.googleProvider = googleProvider;
  }

  // onAuthUserListener = (next, fallback) =>
  //   this.auth.onAuthStateChanged(authUser => {
  //     if (authUser) {
  //       this.user(authUser.uid)
  //         .once('value')
  //         .then(snapshot => {
  //           const dbUser = snapshot.val();

  //           // default empty roles
  //           if (!dbUser.roles) {
  //             dbUser.roles = {};
  //           }

  //           // merge auth and db user
  //           authUser = {
  //             uid: authUser.uid,
  //             email: authUser.email,
  //             emailVerified: authUser.emailVerified,
  //             providerData: authUser.providerData,
  //             ...dbUser,
  //           };

  //           next(authUser);
  //         });
  //     } else {
  //       fallback();
  //     }
  //   });

  dehydrate() {
    return {
      auth: this.auth,
      authUser: this.authUser,
      authToken: this.authToken,
      loggedIn: this.loggedIn,
      googleProvider: this.googleProvider,
    };
  }
}

decorate(SessionStore, {
  auth: observable,
  authUser: observable,
  authToken: observable,
  loggedIn: observable,
  googleProvider: observable,
  getAuthUser: action,
  getAuthToken: action,
  getLoggedIn: action,
  setFirebase: action,
  setAuthUser: action,
  setAuthToken: action,
  setLoggedIn: action,
  setGoogleProvider: action,
});

export default SessionStore;
