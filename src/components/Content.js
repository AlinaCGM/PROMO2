// import React, { useEffect, useState } from 'react'

// import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
// import { auth, db } from '../firebase-config'

// export const ContentSection = () => {
//   const [postLists, setPostList] = useState([])
//   const postsCollectionRef = collection(db, 'services-data')
//   const deletePost = async (id) => {
//     const postDoc = doc(db, 'services-data', id)
//     await deleteDoc(postDoc)
//     // window.location.reload()
//   }

//   useEffect(() => {
//     const getPosts = async () => {
//       const data = await getDocs(postsCollectionRef)
//       setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//       console.log(data)
//     }

//     getPosts()

//     // eslint-disable-next-line
//   }, [])

//   const updatePage = async () => {
//     const data = await getDocs(postsCollectionRef)
//     setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//     updatePage()
//   }

//   //    {postLists.map((post)=> {
//   //        return(
//   //     let jora={post.title1}

//   //     ) }

//   //     )}

//   return (
//     <div>
//       {postLists.map((post) => {
//         return (
//           <div>
//             <h3>{post.title} </h3>
//           </div>
//         )
//       })}
//     </div>
//   )
// }
