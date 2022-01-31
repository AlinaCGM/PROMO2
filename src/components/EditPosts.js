import React, { useState, useEffect } from 'react'
import { db, auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore'

import Update from './UpdateContent'

function EditPost() {
  const [postLists, setPostList] = useState([])

  const [newText, setNewText] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [info, setInfo] = useState([])

  const postsCollectionRef = collection(db, 'services-data')
  let navigate = useNavigate()

  // const createPost = async () => {
  //   await addDoc(postsCollectionRef, {
  //     newTitle,
  //     postText,
  //     author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
  //   })
  //   navigate('/')
  // }

  const updateUser = async (id, text, title) => {
    const userDoc = doc(db, 'services-data', id) // users-name of the collection
    const newFields = { text: newText, title: newTitle }
    await updateDoc(userDoc, newFields)
    console.log(updateUser)
    return
  }

  useEffect(() => {
    const getInfo = async () => {
      const data = await getDocs(postsCollectionRef)
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      console.log(getInfo)
    }

    getInfo()
    // eslint-disable-next-line
  }, [])

  const updatePage = async () => {
    const data = await getDocs(postsCollectionRef)
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    return
  }

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate('/login')
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <div>
      <div>
        {/* <Update /> */}
        {postLists.map((post) => {
          return (
            <div>
              <h1>Title: {post.title}</h1>
              <h1>Content: {post.text}</h1>
              <h1>Edit Post</h1>
              <div>
                <label>Title:</label>
                <input
                  placeholder='Title'
                  onChange={(event) => {
                    setNewTitle(event.target.value)
                  }}
                />
              </div>

              <label>Content</label>

              <textarea
                placeholder='Text...'
                onChange={(event) => {
                  setNewText(event.target.value)
                }}
              />
              <button
                onClick={() => {
                  updateUser(post.id, post.title, post.text)
                  updatePage()
                }}
                // onClick={
                //   (() => updateUser(post.id, post.title, post.text),
                //   updatePage())
                // }
              >
                Publish to database
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EditPost
