import firebase_ from 'firebase/app'

// Firebase web config
const config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
}

let instance = null

export default function firebase() {
  if (typeof window !== 'undefined') {
    if (instance) {
      return instance
    }

    instance = firebase_.initializeApp(config)
    return instance
  }

  return null
}
