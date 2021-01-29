import * as React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const Footer = () => {
  return (
    <div className='footer '>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <h6>About</h6>
            <p className='text-justify'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-sm-6 col-xs-12'>
            <p className='copyright-text'>Copyright &copy;</p>
          </div>

          <div className='col-md-4 col-sm-6 col-xs-12'>
            <ul className='social-icons'>
              <li>
                <Link className='facebook' to='#'>
                  <i className='fa fa-facebook'></i>
                </Link>
              </li>
              <li>
                <Link className='twitter' to='#'>
                  <i className='fa fa-twitter'></i>
                </Link>
              </li>
              <li>
                <Link className='dribbble' to='#'>
                  <i className='fa fa-dribbble'></i>
                </Link>
              </li>
              <li>
                <Link className='linkedin' to='#'>
                  <i className='fa fa-linkedin'></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
