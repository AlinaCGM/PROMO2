// import { useState, useEffect } from 'react'
// import { db } from '../firebase-config'
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   doc,
//   deleteDoc,
// } from 'firebase/firestore'

// function Update() {
//   const [newName, setNewName] = useState('')
//   const [newAge, setNewAge] = useState(0)
//   const [users, setUsers] = useState([])
//   const usersCollectionRef = collection(db, 'users')

//   const createUser = async () => {
//     await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) })
//   }

//   const updateUser = async (id, age, name) => {
//     const userDoc = doc(db, 'users', id) // users-name of the collection
//     // const newFields = { age: Number(newAge) }
//     const newNames = { name: newName, age: Number(newAge) }
//     await updateDoc(userDoc, newNames)
//     return updateUser(id, age, name)
//   }

//   const deleteUser = async (id) => {
//     const userDoc = doc(db, 'users', id)
//     await deleteDoc(userDoc)
//   }

//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await getDocs(usersCollectionRef)
//       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//       console.log(getUsers)
//     }

//     getUsers()
//     // eslint-disable-next-line
//   }, [])

//   const usersDisplay = async () => {
//     const data = await getDocs(usersCollectionRef)
//     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

//     usersDisplay()
//   }

//   return (
//     <div className='App'>
//       <input
//         placeholder='Name...'
//         onChange={(event) => {
//           setNewName(event.target.value)
//         }}
//       />
//       <input
//         type='number '
//         placeholder='Age...'
//         onChange={(event) => {
//           setNewAge(event.target.value)
//         }}
//       />

//       <button onClick={createUser}>Create User</button>

//       {users.map((user) => {
//         return (
//           <div>
//             <h1>Name: {user.name}</h1>
//             <h1>Age: {user.age}</h1>
//             <button
//               onClick={() => {
//                 updateUser(user.id, user.age, user.name)
//               }}
//             >
//               Update User
//             </button>

//             <button
//               onClick={() => {
//                 deleteUser(user.id)
//                 usersDisplay()
//               }}
//             >
//               Delete user
//             </button>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default Update
