// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
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
export const storage = getStorage(app)

// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// import { getFirestore } from 'firebase/firestore'
// import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyAMniv9zDkzQqPYqvGSK_pkp-4fzjZ2w7A',
//   authDomain: 'fir-tutorial-693bc.firebaseapp.com',
//   projectId: 'fir-tutorial-693bc',
//   storageBucket: 'fir-tutorial-693bc.appspot.com',
//   messagingSenderId: '182718809004',
//   appId: '1:182718809004:web:92d9b14b669aa32a9e3009',
//   measurementId: 'G-6M4KG3YW4L',
// }

// // Initialize Firebase
// const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
// export const db = getFirestore(app)
// export const auth = getAuth(app)
// export const provider = new GoogleAuthProvider()
