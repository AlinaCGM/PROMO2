import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ServiceSection.css'
import './Button.css'
import Button from './Button'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { auth, db } from '../firebase-config'
import { ContentSection } from './Content'
// import FadeInSection from "./FadeInSection";

const ServiceSection = () => {
  const [postLists, setPostList] = useState([])
  const postsCollectionRef = collection(db, 'services-data')
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
  return (
    // <FadeInSection>
    <div className='cont-services icon-box'>
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
              {postLists.map((post) => (
                <div>
                  <ContentSection className='title_services'>
                    {post.title1}
                  </ContentSection>
                  <p className='title_content'>{post.text1}</p>
                </div>
              ))}
            </Card.Body>
            <Button />
          </Card>
        </div>

        <div className='col-12  col-md-6 col-lg-3 d-flex justify-content-between'>
          <Card className='first col'>
            <img
              className='img_first two'
              src='../images/22.png'
              path='/about'
              alt=''
            />
            <Card.Body>
              <h2 className='title_services'>title2s</h2>
              <p className='title_content'>Lorem ipsum dolor sit amet,</p>
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
              <h2 className='title_services'>SERVICE 3</h2>
              <p className='title_content'>Lorem ipsum dolor sit amet,</p>
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
              <h2 className='title_services'>SERVICE 4</h2>
              <p className='title_content'>Lorem ipsum dolor sit amet,</p>
            </Card.Body>
            <Button />
          </Card>
        </div>
      </div>
      )
    </div>
  )
}

export default ServiceSection
