import React, { useContext, useMemo } from 'react'
import { inject } from 'mobx-react'
import { FirebaseContext } from 'gatsby-plugin-firebase'

const StoreLayout = ({ rootStore, children }) => {
  const firebase = useContext(FirebaseContext)
  const { objectsStore, sessionStore } = rootStore
  useMemo(() => {
    if (!firebase) return
    objectsStore.setFirestore(firebase.firestore())
    sessionStore.setAuth(firebase.auth())
  }, [firebase])

  return <div>{children}</div>
}

export default inject('rootStore')(StoreLayout)