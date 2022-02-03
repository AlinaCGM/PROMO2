import React, { useState, useEffect } from 'react'
import { db, auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'
import Storage from './PicStorage'

function EditPost(props) {
  const [postLists, setPostList] = useState([])
  const [newText, setNewText] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [files, setFiles] = useState([])

  const postsCollectionRef = collection(db, 'services-data')
  let navigate = useNavigate()

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

  return (
    <div>
      <div>
        <h1>Edit Services Section</h1>
        {postLists.map((post) => {
          return (
            <div>
              <h1>Title: {post.title} </h1>
              <h1>Content: {post.text} </h1>

              <div>
                <label>Title:</label>
                <input
                  key={props.id}
                  placeholder='Title'
                  type='text'
                  required
                  onChange={(event) => {
                    setNewTitle(event.target.value)
                  }}
                />
              </div>

              <label>Content</label>

              <textarea
                key={props.id}
                placeholder='Text...'
                type='text'
                required
                onChange={(event) => {
                  setNewText(event.target.value)
                }}
              />
              <Storage />
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
