import React from 'react';
import LogRocket from 'logrocket';
import { useFirebase } from 'gatsby-plugin-firebase';

import MediaDropzoneArea from '../components/mediaDropzoneArea';

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
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        setUser(user.uid);
        LogRocket.identify(user.uid, {
          name: `Anonymous - ${uid}`,
          email: 'anonymous@example.com',
          isAnonymous: isAnonymous,
        });
        console.log(`${uid} is signed in.`);
      } else {
        console.log(`User has signed out.`);
      }
      // ...
    });
  }, []);

  return (
    <React.Fragment>
      <MediaDropzoneArea />
      <p>{user && user.name}</p>
    </React.Fragment>
  );
}

export default FirebaseObject;
