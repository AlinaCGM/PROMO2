import { useState } from 'react'
import { storage } from '../firebase-config'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { Image } from 'react-bootstrap'
import { useEffect } from 'react'
import 'firebase/storage'

function Storage() {
  const [files, setFiles] = useState([])
  const [image, setImage] = useState(null)
  const [url1, setUrl1] = useState([])
  const [url2, setUrl2] = useState([])

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleSubmit1 = () => {
    const imageRef = ref(storage, 'image1')
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url1) => {
            setUrl1(url1)
          })
          .catch((error) => {
            console.log(error.message, 'error getting the image url')
          })
        setImage(null)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const handleSubmit2 = () => {
    const imageRef = ref(storage, 'image2')
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url2) => {
            setUrl2(url2)
          })
          .catch((error) => {
            console.log(error.message, 'error getting the image url')
          })
        setImage(null)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const imagePart = () => {}

  return (
    <div>
      <Image src={url1} width='96' height='65' />

      <input type='file' onChange={handleImageChange} />
      <button onClick={handleSubmit1}>Submit</button>

      <div>
        <h1>
          <Image src={url2} width='96' height='65' />
          <input type='file' onChange={handleImageChange} />
          <button onClick={handleSubmit2}>Submit</button>
        </h1>
      </div>
    </div>
  )
}

export default Storage
