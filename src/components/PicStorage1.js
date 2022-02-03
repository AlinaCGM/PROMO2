import React, { useState } from 'react'
import { storage } from '../firebase-config'
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage'
import firebase from 'firebase/app'
import 'firebase/storage'
import { Image } from 'react-bootstrap'

function Storage1() {
  const [files, setFiles] = useState([])

  const onFileChange = (e) => {
    const file = e.target.files[0]
    const storageRef = ref(storage, `images/${file.name}`)
    const fileRef = storageRef.child(file.name)
    fileRef.put(file).then(() => {
      console.log('Uploaded file', file.name)
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }
  const storage1 = getStorage()
  getDownloadURL(ref(storage, 'images/MikaGame.png')).then((url) => {
    setFiles(url)
    console.log(files)
    return
  })
  const spaceRef = ref(storage, 'images/MikaGame.png')

  // References can be chained together multiple times
  const earthRef = ref(spaceRef.parent, 'earth.jpg')
  // earthRef points to 'images/earth.jpg'

  // nullRef is null, since the parent of root is null
  const nullRef = spaceRef.root.parent

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type='file' onChange={onFileChange} />
        <input type='text' name='username' placeholder='Name' />
        <button onClick={onFileChange}>Submit</button>
      </form>
      <ul>
        <Image src={files} width='96' height='65' />
      </ul>
    </>
  )
}

export default Storage1
