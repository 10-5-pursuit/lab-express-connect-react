import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>Welcome!</h1>
    <h3>
      <Link to="/logs">Click here!</Link>
    </h3>
    </>
  )
}

export default Home