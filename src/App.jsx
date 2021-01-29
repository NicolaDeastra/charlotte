import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/index'
import Home from './components/Home/index'
import Footer from './components/Footer/index'
import Room from './components/Room/index'
import Login from './components/Login/index'
import PrivateRouter from './components/privateRoute/index'
import JoinRoom from './components/joinRoom/index'


function App() {
  const token = localStorage.getItem('token')

  const [isLogin, setIsLogin] = React.useState(null)

  React.useEffect(() => {
    if (isLogin === null) {
      localStorage.removeItem('token')
    }

    setIsLogin(token)
  }, [token, isLogin])

  const logOut = () => {
    setIsLogin(null)
  }

  return (
    <Router>
      <Navbar isLogin={isLogin} logOut={logOut} />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/login'>
          <Login setIsLogin={setIsLogin} />
        </Route>
        <Route path='/about'>
          <h1>About</h1>
        </Route>
        <Route path='/room'>
          <Room />
        </Route>
        <Route path='/joinRoom'>
          <JoinRoom />
        </Route>
        <PrivateRouter path='/dashboard'>
          <h1>Dashboard</h1>
        </PrivateRouter>
        <Route>
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
