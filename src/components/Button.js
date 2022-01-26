import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Button.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Button() {
  const [isAuth] = useState(localStorage.getItem('isAuth'))

  return (
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
          <Link to='signup'>
            <button
              type='button'
              className='btn btn-outline-secondary btn-sm button'
            >
              more
            </button>
          </Link>
          <button>Edit</button>
        </>
      )}
    </div>
  )
}

export default Button
