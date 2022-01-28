import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Button.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { db } from '../firebase-config'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore'
import Popup from './Popup'

function Button() {
  const [isAuth] = useState(localStorage.getItem('isAuth'))
  const [newText, setNewText] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [info, setInfo] = useState([])
  const usersCollectionRef = collection(db, 'services-data')

  const updateUser = async (id, text, title) => {
    const userDoc = doc(db, 'services-data', id) // users-name of the collection
    const newFields = { text: newText, title: newTitle }
    await updateDoc(userDoc, newFields)
    return updateUser(id, text, title)
  }

  useEffect(() => {
    const getInfo = async () => {
      const data = await getDocs(usersCollectionRef)
      setInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      console.log(getInfo)
    }

    getInfo()
    // eslint-disable-next-line
  }, [])

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  // const publishButton = () => {
  //   info.map((infos) => updateUser(infos.id, infos.text, infos.title))
  // }

  return (
    <div>
      {!isAuth ? (
        <Link to='signup'>
          <button
            type='button'
            className='btn btn-outline-secondary btn-sm button'
          >
            more
          </button>
        </Link>
      ) : (
        <>
          <button onClick={togglePopup}>Edit</button>
          {isOpen && (
            <Popup
              content={
                <>
                  <input
                    placeholder='Edit Title'
                    onChange={(event) => {
                      setNewTitle(event.target.value)
                    }}
                  />
                  <input
                    placeholder='Edit Text'
                    onChange={(event) => {
                      setNewText(event.target.value)
                    }}
                  />
                  {/* {info.map((infos) => {
                    return (
                      <button onClick={(infos.id, infos.title, infos.text)}>
                        Publish
                      </button>
                    )
                  })} */}
                </>
              }
              handleClose={togglePopup}
            />
          )}
          )
        </>
      )}
    </div>
  )
}

export default Button
