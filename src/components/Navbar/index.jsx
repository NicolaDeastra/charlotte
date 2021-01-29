import * as React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const Navbar = ({ isLogin, logOut }) => {
  return (
    <div className='navbar navbar-expand-lg' id='mainNav'>
      <div className='container'>
        <Link className='navbar-brand js-scroll-trigger navbar__logo' to='/'>
          Mabar
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ml-auto navbar__nav'>
            {isLogin ? (
              <li className='nav-item'>
                <div
                  className='nav-link js-scroll-trigger navbar__links'
                  onClick={logOut}
                >
                  Log Out
                </div>
              </li>
            ) : (
              <li className='nav-item'>
                <Link
                  className='nav-link js-scroll-trigger navbar__links'
                  to='/login'
                >
                  Log In
                </Link>
              </li>
            )}

            {isLogin ? (
              <li className='nav-item'>
                <Link
                  className='nav-link js-scroll-trigger navbar__links'
                  to='/dashboard'
                >
                  Dashboard
                </Link>
              </li>
            ) : (
              ''
            )}

            <li className='nav-item'>
              <Link
                className='nav-link js-scroll-trigger navbar__links'
                to='/about'
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link js-scroll-trigger navbar__links' to='#'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
