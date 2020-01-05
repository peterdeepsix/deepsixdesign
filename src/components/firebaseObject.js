import React from 'react';
import LogRocket from 'logrocket';
import { useFirebase } from 'gatsby-plugin-firebase';

function FirebaseObject() {
  const [user, setUser] = React.useState();

  useFirebase(firebase => {
    firebase
      .auth()
      .signInAnonymously()
      .catch(function(error) {
        console.log(error.code);
        console.log(error.message);
      });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        setUser(user.uid);
        LogRocket.identify(user.uid, {
          name: `Anonymous - ${user.uid}`,
          email: 'anonymous@example.com',
          isAnonymous: 'true',
        });
        // ...
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });
  }, []);

  return <p>{user && user.name}</p>;
}

export default FirebaseObject;
