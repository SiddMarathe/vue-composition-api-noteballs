// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyAZ7MFMTAy5yJXPr5dcKBfyhn50Q12tg_M',
  authDomain: 'noteballs-cc589.firebaseapp.com',
  projectId: 'noteballs-cc589',
  storageBucket: 'noteballs-cc589.appspot.com',
  messagingSenderId: '567120453209',
  appId: '1:567120453209:web:48c7b39acdd6c248865b48'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
