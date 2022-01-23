// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyBd5eJH5tZOCQrWK0z8eRN-pw2l4Eu3nSE',
  authDomain: 'login-update-92257.firebaseapp.com',
  projectId: 'login-update-92257',
  storageBucket: 'login-update-92257.appspot.com',
  messagingSenderId: '731112315192',
  appId: '1:731112315192:web:39f2dee59052400ad709cd',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
