import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ServiceSection.css'
import './Button.css'
// import Button from './Button'
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'
import { auth, db } from '../firebase-config'
import Storage from './PicStorage'

// import { ContentSection } from './Content'
// import FadeInSection from "./FadeInSection";

const ServiceSection = () => {
  const [postLists, setPostList] = useState([])
  const postsCollectionRef = collection(db, 'services-data')
  const [isOpen, setIsOpen] = useState(false)
  const [newText, setNewText] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [isAuth] = useState(localStorage.getItem('isAuth'))
  const [info, setInfo] = useState([])

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

  const updatePage = async () => {
    const data = await getDocs(postsCollectionRef)
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    updatePage()
  }

  return (
    // <FadeInSection>
    <div className='cont-services icon-box'>
      {postLists.map((post) => {
        return (
          <div className='row align-items-center'>
            <div className='col-12  col-md-6 col-lg-3  d-flex justify-content-between '>
              <Card className='first col '>
                {/* <img
                  className='img_first one'
                  src='../images/11.png'
                  path='/about'
                  alt=''
                /> */}
                {/* <Storage /> */}

                <Card.Body>
                  <h2 className='title_services'>{post.title}</h2>
                  <p className='title_content'>{post.text}</p>
                </Card.Body>
                {/* <Button /> */}
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

            {/* <div className='col-12  col-md-6 col-lg-3 d-flex justify-content-between'>
            <Card className='first col'>
              <img
                className='img_first two'
                src='../images/22.png'
                path='/about'
                alt=''
              />
              <Card.Body>
                <h2 className='title_services'>{post.title}</h2>
                <p className='title_content'>{post.text}</p>
              </Card.Body>
              <Button />
            </Card>
          </div>

          <div className='col-12  col-md-6 col-lg-3 d-flex justify-content-between'>
            <Card className='first col'>
              <img
                className='img_first three'
                src='../images/33.png'
                path='/about'
                alt=''
              />
              <Card.Body>
                <h2 className='title_services'>{post.title}</h2>
                <p className='title_content'>{post.text}</p>
              </Card.Body>
              <Button />
            </Card>
          </div>

          <div className='col-12  col-md-6 col-lg-3 d-flex justify-content-between'>
            <Card className='first col'>
              <img
                className='img_first four'
                src='../images/44.png'
                path='/about'
                alt=''
              />
              <Card.Body>
                <h2 className='title_services'>{post.title}</h2>
                <p className='title_content'>{post.text}</p>
              </Card.Body>
              <Button />
            </Card> 
          </div> */}
          </div>
        )
      })}
    </div>
  )
}

export default ServiceSection
