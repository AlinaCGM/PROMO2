import React, { useState, useEffect } from 'react'
import { db, auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'
import Storage from './PicStorage'

function EditPost(props) {
  const [postLists, setPostList] = useState([])
  const [newText1, setNewText1] = useState('')
  const [newTitle1, setNewTitle1] = useState('')
  const [newText2, setNewText2] = useState('')
  const [newTitle2, setNewTitle2] = useState('')
  const [newText3, setNewText3] = useState('')
  const [newTitle3, setNewTitle3] = useState('')
  const [newText4, setNewText4] = useState('')
  const [newTitle4, setNewTitle4] = useState('')
  const [newText, setNewText] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [files, setFiles] = useState([])
  const [result, setResult] = useState('')

  const postsCollectionRef = collection(db, 'services-data')
  let navigate = useNavigate()

  // const updateUser = async (kkWsx3b47ew0Gfyb13by) => {
  //   const userDoc = doc(db, 'services-data', kkWsx3b47ew0Gfyb13by) // users-name of the collection
  //   const newFields = { text1: 'ddd', title1: 'bbb' }
  //   await updateDoc(userDoc, newFields)
  //   console.log(updateUser)
  //   return
  // }

  const update1 = async () => {
    const servicesDoc = doc(db, 'services-data', 'kkWsx3b47ew0Gfyb13by')
    await updateDoc(servicesDoc, {
      text1: newText1,
      title1: newTitle1,
    })
  }
  const update2 = async () => {
    const servicesDoc = doc(db, 'services-data', 'kkWsx3b47ew0Gfyb13by')
    await updateDoc(servicesDoc, {
      text2: newText2,
      title2: newTitle2,
    })
  }
  const update3 = async () => {
    const servicesDoc = doc(db, 'services-data', 'kkWsx3b47ew0Gfyb13by')
    await updateDoc(servicesDoc, {
      text3: newText3,
      title3: newTitle3,
    })
  }
  const update4 = async () => {
    const servicesDoc = doc(db, 'services-data', 'kkWsx3b47ew0Gfyb13by')
    await updateDoc(servicesDoc, {
      text4: newText4,
      title4: newTitle4,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    console.log('title', form.title, form.elements.title)
    console.log('text', form.text, form.elements.text)
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

  const card1 = postLists.map((text) => (
    <>
      <h2 className='title_services'>{text.title1}</h2>
      <h4 className='title_content'>{text.text1}</h4>
    </>
  ))

  const card2 = postLists.map((text2) => (
    <>
      <h2 className='title_services'>{text2.title2}</h2>
      <h4 className='title_content'>{text2.text2}</h4>
    </>
  ))

  const card3 = postLists.map((text3) => (
    <>
      <h2 className='title_services'>{text3.title3}</h2>
      <h4 className='title_content'>{text3.text3}</h4>
    </>
  ))

  const card4 = postLists.map((text4) => (
    <>
      <h2 className='title_services'>{text4.title4}</h2>
      <h4 className='title_content'>{text4.text4}</h4>
    </>
  ))

  // const cityRef = db.collection('services-data').doc('text1', 'title1')
  // console.log(cityRef)

  // Set the 'capital' field of the city
  // const res = await cityRef.update({ text1: true })

  // const card1 = postLists.map((text) => (
  //   <>
  //     {text.title1}
  //     {/* {text.text1} */}
  //   </>
  // ))

  // const card2 = async () => {
  //   const data = await postLists.map()
  //   setNewText(data.text.text1, data.text.title1)
  //   return
  // }

  return (
    <div>
      <div>
        <h1>Edit Services Section</h1>

        <div>
          <div>
            <div>
              <h1>Card 1</h1>
              {card1}
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    placeholder='Title'
                    onChange={(event) => {
                      setNewTitle1(event.target.value)
                    }}
                  />
                </div>

                <textarea
                  id='text'
                  name='text'
                  placeholder='Text...'
                  type='text'
                  required
                  onChange={(event) => {
                    setNewText1(event.target.value)
                  }}
                />
                <button
                  onClick={() => {
                    update1()
                    updatePage()
                  }}
                >
                  Publish to database
                </button>
              </form>
            </div>
            <div>
              <h1>Card 2</h1>
              {card2}
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    placeholder='Title'
                    onChange={(event) => {
                      setNewTitle2(event.target.value)
                    }}
                  />
                </div>

                <textarea
                  id='text'
                  name='text'
                  placeholder='Text...'
                  type='text'
                  required
                  onChange={(event) => {
                    setNewText2(event.target.value)
                  }}
                />
                <button
                  onClick={() => {
                    update2()
                    updatePage()
                  }}
                >
                  Publish to database
                </button>
              </form>
            </div>
            <div>
              <h1>Card 3</h1>
              {card3}
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    placeholder='Title'
                    onChange={(event) => {
                      setNewTitle3(event.target.value)
                    }}
                  />
                </div>

                <textarea
                  id='text'
                  name='text'
                  placeholder='Text...'
                  type='text'
                  required
                  onChange={(event) => {
                    setNewText3(event.target.value)
                  }}
                />
                <button
                  onClick={() => {
                    update3()
                    updatePage()
                  }}
                >
                  Publish to database
                </button>
              </form>
            </div>
            <div>
              <h1>Card 4</h1> {card4}
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    placeholder='Title'
                    onChange={(event) => {
                      setNewTitle4(event.target.value)
                    }}
                  />
                </div>

                <textarea
                  id='text'
                  name='text'
                  placeholder='Text...'
                  type='text'
                  required
                  onChange={(event) => {
                    setNewText4(event.target.value)
                  }}
                />
                <button
                  onClick={() => {
                    update4()
                    updatePage()
                  }}
                >
                  Publish to database
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditPost
