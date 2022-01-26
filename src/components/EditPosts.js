import React, { useState, useEffect } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState('')
  const [postText, setPostText] = useState('')

  const postsCollectionRef = collection(db, 'posts-database')
  let navigate = useNavigate()
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    })
    navigate('/')
  }

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //   return (
  //     <div className='createPostPage'>
  //       <div className='cpContainer'>
  //         <h1>Create a post</h1>
  //         <div className='inputGp'>
  //           <label>Title:</label>
  //           <input
  //             placeholder='Title'
  //             onChange={(event) => {
  //               setTitle(event.target.value)
  //             }}
  //           />
  //         </div>
  //         <div className='inputGP'></div>
  //         <label>Post</label>
  //         <textarea
  //           placeholder='Post...'
  //           onChange={(event) => {
  //             setPostText(event.target.value)
  //           }}
  //         />
  //         <button onClick={createPost}>Submit post</button>
  //       </div>
  //     </div>
  //   )
}

export default CreatePost