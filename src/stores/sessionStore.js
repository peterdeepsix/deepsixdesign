import { observable, action, decorate, toJS } from 'mobx';

class SessionStore {
  authUser = null
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  setAuthUser(authUser) {
    this.authUser = authUser;
  }
  dehydrate() {
    return {
      authUser: this.authUser,
    };
  }
}

decorate(SessionStore, {
  authUser: observable,
  setAuthUser: action,
});

export default SessionStore;
