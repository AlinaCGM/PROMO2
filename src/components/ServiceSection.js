import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ServiceSection.css'
import './Button.css'
import Button from './Button'
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'
import { auth, db, storage } from '../firebase-config'
import 'firebase/storage'
import { Image } from 'react-bootstrap'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  getStorage,
  connectStorageEmulator,
} from 'firebase/storage'

// import { ContentSection } from './Content'
// import FadeInSection from "./FadeInSection";

const ServiceSection = () => {
  const [postLists, setPostList] = useState([])
  const postsCollectionRef = collection(db, 'services-data')
  const [isOpen, setIsOpen] = useState(false)
  const [newText, setNewText] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [isAuth] = useState(localStorage.getItem('isAuth'))
  const [files1, setFiles1] = useState([])
  const [files2, setFiles2] = useState([])
  const [files3, setFiles3] = useState([])
  const [files4, setFiles4] = useState([])

  const updateUser = async (id, text, title) => {
    const userDoc = doc(db, 'services-data', id) // users-name of the collection
    const newFields = { text: newText, title: newTitle }
    await updateDoc(userDoc, newFields)
    return updateUser(id, text, title)
  }

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef)
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      console.log(data)
    }

    getPosts()

    // eslint-disable-next-line
  }, [])

  const storage1 = getStorage()
  getDownloadURL(ref(storage, 'image1')).then((url) => {
    setFiles1(url)
    return
  })

  const storage2 = getStorage()
  getDownloadURL(ref(storage, 'image2')).then((url) => {
    setFiles2(url)
    return
  })

  const storage3 = getStorage()
  getDownloadURL(ref(storage, 'image3')).then((url) => {
    setFiles3(url)
    return
  })

  const storage4 = getStorage()
  getDownloadURL(ref(storage, 'image4')).then((url) => {
    setFiles4(url)
    return
  })

  const card1 = postLists.map((text1) => (
    <>
      <h2 className='title_services'>{text1.title1}</h2>
      <p className='title_content'>{text1.text1}</p>
    </>
  ))

  const card2 = postLists.map((text2) => (
    <>
      <h2 className='title_services'>{text2.title2}</h2>
      <p className='title_content'>{text2.text2}</p>
    </>
  ))

  const card3 = postLists.map((text3) => (
    <>
      <h2 className='title_services'>{text3.title3}</h2>
      <p className='title_content'>{text3.text3}</p>
    </>
  ))

  const card4 = postLists.map((text4) => (
    <>
      <h2 className='title_services'>{text4.title4}</h2>
      <p className='title_content'>{text4.text4}</p>
    </>
  ))

  // const cardsData = async () => {
  //   postLists.map((post) => {
  //     const titlu = (post.title1, post.text1)
  //     return
  //     setInfo(title1, text1)
  //   })
  // }
  // console.log(info)

  const updatePage = async () => {
    const data = await getDocs(postsCollectionRef)
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    updatePage()
  }

  return (
    // <FadeInSection>
    <div>
      <div className='cont-services icon-box'>
        <div className='row align-items-center'>
          <div className='col-12  col-md-6 col-lg-3  d-flex justify-content-between '>
            <div></div>
            <Card className='first col '>
              <Image src={files1} width='96' height='65' />

              <Card.Body>{card1}</Card.Body>
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
            </Card>
          </div>

          <div className='col-12  col-md-6 col-lg-3 d-flex justify-content-between'>
            <Card className='first col'>
              <Image src={files2} width='96' height='65' />

              <Card.Body>{card2}</Card.Body>
              <Button />
            </Card>
          </div>

          <div className='col-12  col-md-6 col-lg-3 d-flex justify-content-between'>
            <Card className='first col'>
              <Image src={files3} width='96' height='65' />

              <Card.Body>{card3}</Card.Body>
              <Button />
            </Card>
          </div>

          <div className='col-12  col-md-6 col-lg-3 d-flex justify-content-between'>
            <Card className='first col'>
              <Image src={files4} width='96' height='65' />

              <Card.Body>{card4}</Card.Body>
              <Button />
            </Card>
          </div>
        </div>
        )
      </div>
    </div>
  )
}

export default ServiceSection
