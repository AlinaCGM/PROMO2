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
import Popup from './Popup'

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

  const deletePost = async (id) => {
    const postDoc = doc(db, 'services-data', id)
    await deleteDoc(postDoc)
    // window.location.reload()
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
  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
  return (
    // <FadeInSection>
    <div className='cont-services icon-box'>
      {postLists.map((post) => {
        return (
          <div className='row align-items-center'>
            <div className='col-12  col-md-6 col-lg-3  d-flex justify-content-between '>
              <Card className='first col '>
                <img
                  className='img_first one'
                  src='../images/11.png'
                  path='/about'
                  alt=''
                />

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
                    <>
                      <button onClick={togglePopup}>Edit</button>

                      {isOpen && (
                        <Popup
                          content={
                            <>
                              <div>
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
                                <button
                                  onClick={() => {
                                    updateUser(post.id, post.text, post.title)
                                  }}
                                >
                                  Publish
                                </button>
                              </div>
                            </>
                          }
                          handleClose={togglePopup}
                        />
                      )}
                    </>
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
