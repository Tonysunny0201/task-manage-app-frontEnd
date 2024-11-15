import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{minHeight:'100vh'}} className='d-flex justify-content-center align-items-center flex-column border '>
      <h1 className='text-center mt-5' >Task Management App</h1>
      <div className='text-center mt-3'>
        <Link to={'/login'} className='btn btn-primary'>Login</Link>
        <Link to={'/register'} className='btn btn-primary ms-2'>Register</Link>
      </div>
    </div>
  )
}

export default Home