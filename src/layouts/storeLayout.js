import React, { useContext, useMemo } from 'react'
import { inject } from 'mobx-react'
import { FirebaseContext } from 'gatsby-plugin-firebase'

const StoreLayout = ({ objectsStore, sessionStore, children }) => {
  const firebase = useContext(FirebaseContext)

  useMemo(() => {
    if (!firebase) return
    objectsStore.setFirestore(firebase.firestore())
    sessionStore.setAuth(firebase.auth())
    sessionStore.setGoogleProvider(firebase)

  }, [firebase])

  return <div>{children}</div>
}

export default inject('objectsStore', 'sessionStore')(StoreLayout)