import React, { useContext, useMemo } from 'react'
import { inject } from 'mobx-react'
import { FirebaseContext } from 'gatsby-plugin-firebase'

const StoreLayout = ({ store, children }) => {
  const firebase = useContext(FirebaseContext)
  useMemo(() => {
    if (!firebase) return
    store.objectsStore.setFirestore(firebase.firestore())
  }, [firebase])

  return <div>{children}</div>
}

export default inject('store')(StoreLayout)