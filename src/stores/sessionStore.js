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

  setAuthUser() {
    this.authUser = this.auth.currentUser;
    localStorage.setItem('authUser', this.auth.currentUser);
  }

  setGoogleProvider(googleProvider) {
    this.googleProvider = googleProvider;
  }

  setLoggedIn(loggedIn) {
    this.loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
      this.loggedIn = loggedIn;
      localStorage.setItem('loggedIn', loggedIn);
    } else {
      localStorage.setItem('loggedIn', this.loggedIn);
    }
    console.log(`set logged in to ${this.loggedIn}`);
  }

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });

  async getAuthUser() {
    try {
      console.log('get Auth User');
    } catch (error) {
      console.log(error);
    }
  }

  dehydrate() {
    return {
      auth: this.auth,
      authUser: this.authUser,
      loggedIn: this.loggedIn,
      googleProvider: this.googleProvider,
    };
  }
}

decorate(SessionStore, {
  auth: observable,
  authUser: observable,
  loggedIn: observable,
  googleProvider: observable,
  setFirebase: action,
  setAuthUser: action,
  setGoogleProvider: action,
  getAuthUser: action,
});

export default SessionStore;
