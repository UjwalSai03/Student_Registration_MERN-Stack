import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
          <h1>Developers Hub</h1>
          <p>Create a developer profile/Portfolio, Sharepost and get help from other developers</p>
          <div className='button'>
            <button><Link className = 'link' to = '/signup'>Signup</Link></button>
            <button><Link className = 'link' to = '/login'>Login</Link></button>
          </div>
        </div>
    </div>
  )
}

export default Home
