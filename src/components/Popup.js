import React, { useState, useEffect } from 'react'
// import { db } from '../firebase-config'
import './Popup.css'
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   doc,
//   deleteDoc,
// } from 'firebase/firestore'

const Popup = (props) => {
  //   const [info, setInfo] = useState([])
  //   const [newText, setNewText] = useState('')
  //   const [newTitle, setNewTitle] = useState('')

  //   const updateUser = async (id, text, title) => {
  //     const userDoc = doc(db, 'services-data', id) // users-name of the collection
  //     const newFields = { text: newText, title: newTitle }
  //     await updateDoc(userDoc, newFields)
  //     return updateUser(id, text, title)
  //   }

  return (
    <div className='popup-box'>
      <div className='box'>
        <span className='close-icon' onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
      {/* <span>
        {info.map((infos) => (
          <button
            onClick={() => {
              updateUser(infos.id, infos.text, infos.title)
              console.log(updateUser)
            }}
          >
            Publish
          </button>
        ))}
      </span> */}
    </div>
  )
}

export default Popup
