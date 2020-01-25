import React, { useContext, useMemo } from 'react'
import { inject } from 'mobx-react'
import { FirebaseContext } from 'gatsby-plugin-firebase'

const StoreLayout = ({ store, children }) => {
  const firebase = useContext(FirebaseContext)
  const { objectsStore, sessionStore } = store
  useMemo(() => {
    if (!firebase) return
    objectsStore.setFirestore(firebase.firestore())
    sessionStore.setAuth(firebase.auth())
    sessionStore.setGoogleProvider(new firebase.auth.GoogleAuthProvider())
  }, [firebase])

  return <div>{children}</div>
}

export default inject('store')(StoreLayout)