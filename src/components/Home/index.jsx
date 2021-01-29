import * as React from 'react'
import { Link } from 'react-router-dom'

import home from '../../home.svg'
import './style.scss'

const Home = () => {
  return (
    <>
      <div className='container home'>
        <h1 className='home__heading'>Welcome to Mabar</h1>
        <h4 className='home__sub-heading text-muted'>
          Please choice create room or join room
        </h4>

        <div className='row home__buttons '>
          <div className='col-md-4'>
            <Link to='/room' className='btn btn-primary'>
              Create Room
            </Link>
          </div>
          <div className='col-md-4 '>
            <a type='submit' href='/joinRoom' className='btn btn-success'>
              Join Room
            </a>
          </div>
        </div>
      </div>
      <img src={home} className='img-fluid home__image mb-5' alt='home' />
    </>
  )
}

export default Home
