import * as React from 'react'
import { Redirect } from 'react-router-dom'

const PrivateRouter = ({ children }) => {
  if (!localStorage.getItem('token')) return <Redirect to='/' />

  return children
}

export default PrivateRouter
