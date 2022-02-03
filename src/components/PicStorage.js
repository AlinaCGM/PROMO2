import { useState } from 'react'
import { storage } from '../firebase-config'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { Image } from 'react-bootstrap'
import { useEffect } from 'react'
import 'firebase/storage'

function Storage() {
  const [files, setFiles] = useState([])
  const [image, setImage] = useState(null)
  const [url, setUrl] = useState([])

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleSubmit = () => {
    const imageRef = ref(storage, `/images/${image.name}`)
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url)
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

  return (
    <div>
      <Image src={url} width='96' height='65' />

      <input type='file' onChange={handleImageChange} />
      <button onClick={handleSubmit}>Submit</button>

      <div>
        {image.map((images) => (
          <h1>
            <img key={images.name} src={images.url} alt='album' />
          </h1>
        ))}
      </div>
    </div>
  )
}

export default Storage
