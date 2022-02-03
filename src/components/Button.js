import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Button.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { db } from '../firebase-config'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'
// import Popup from './Popup'

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
          <Link to='/editposts'>
            <button>Edit</button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Button
