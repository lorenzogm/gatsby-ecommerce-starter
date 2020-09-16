import { useEffect, useState } from 'react'

import firebase from './firebase'

export default function useFirebase() {
  const [instance, setInstance] = useState(null)

  useEffect(() => {
    setInstance(firebase())
  }, [])

  return instance
}
