// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyCQaAVD6XJE_H6LQXhov_YwE0BPJ8InH6o',
  authDomain: 'template-a3c3e.firebaseapp.com',
  projectId: 'template-a3c3e',
  storageBucket: 'template-a3c3e.appspot.com',
  messagingSenderId: '373733640034',
  appId: '1:373733640034:web:2dd9b5afb80df1d0f74e3b',
  measurementId: 'G-B7X1W8BRX3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
