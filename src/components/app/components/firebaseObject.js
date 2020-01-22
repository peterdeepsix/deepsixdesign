import React from 'react';
import LogRocket from 'logrocket';
import { useFirebase } from 'gatsby-plugin-firebase';

import Typography from '@material-ui/core/Typography';

function FirebaseObject() {
  const [user, setUser] = React.useState();

  useFirebase(firebase => {
    firebase
      .auth()
      .signInAnonymously()
      .catch(function (error) {
        console.log(error.code);
        console.log(error.message);
      });
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        setUser(user);
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
      {(user && (
        <Typography variant="caption" display="block">
          {user.uid}
        </Typography>
      )) || (

          <Typography variant="caption" display="block">
            Not signed in
        </Typography>
        )}
    </React.Fragment>
  );
}

export default FirebaseObject;
