import React from 'react';
import LogRocket from 'logrocket';
import { useFirebase } from 'gatsby-plugin-firebase';

import MaterialTable from 'material-table';

function PredictionsTable() {
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
      {user && (
        <div style={{ maxWidth: '100%' }}>
          <MaterialTable
            columns={[
              { title: 'Adı', field: 'name' },
              { title: 'Soyadı', field: 'surname' },
              {
                title: 'Doğum Yılı',
                field: 'birthYear',
                type: 'numeric',
              },
              {
                title: 'Doğum Yeri',
                field: 'birthCity',
                lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
              },
            ]}
            data={[
              {
                name: 'Mehmet',
                surname: 'Baran',
                birthYear: 1987,
                birthCity: 63,
              },
            ]}
            title="Demo Title"
          />
        </div>
      )}
    </React.Fragment>
  );
}

export default PredictionsTable;
