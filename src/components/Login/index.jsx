import * as React from 'react'
import { useHistory, Link } from 'react-router-dom'

import api from '../../services'

const Login = ({ setIsLogin }) => {
  const history = useHistory()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isError, setIsError] = React.useState('')

  const onSubmit = async () => {
    try {
      const res = await api.login(username, password)

      if (res.status === 500) {
        throw new Error('can`t login')
      }

      localStorage.setItem('token', res.token)
      setIsLogin(localStorage.getItem('token'))
      history.push('/')
    } catch (error) {
      setIsError(error.message)
    }
  }

  return (
    <div className='margin-custom mb-5'>
      {isError ? (
        <div className='alert alert-danger col-md-6  offset-md-3' role='alert'>
          {isError}
        </div>
      ) : (
        ''
      )}

      <div className='form-group col-md-6 offset-md-3'>
        <label htmlFor='username' className='color-font'>
          Username
        </label>
        <input
          type='text'
          className={`form-control ${isError ? 'is-invalid' : ''}`}
          name='username'
          id='username'
          onChange={(e) => {
            setUsername(e.target.value)
            setIsError(false)
          }}
          aria-describedby='emailHelp'
        />
      </div>
      <div className='form-group col-md-6 offset-md-3'>
        <label htmlFor='password' className='color-font'>
          Password
        </label>
        <input
          type='password'
          className={`form-control ${isError ? 'is-invalid' : ''}`}
          name='password'
          id='password'
          onChange={(e) => {
            setPassword(e.target.value)
            setIsError(false)
          }}
        />
      </div>
      <div className='row ml-1'>
        <div className='form-group col-md-3 offset-md-3 '>
          <button type='submit' onClick={onSubmit} className='btn btn-primary'>
            Submit
          </button>
        </div>
        <div className='form-group col-md-3  '>
          <p>
            Don't have account <Link to='/register'>Register</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
