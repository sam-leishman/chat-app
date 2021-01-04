import '../App.scss';
import React, { useState, useEffect } from 'react';

import { auth } from "../services/firebase";

import HomePage from "../pages/HomePage.js";
import LoginPage from "../pages/LoginPage.js";
import ProfilePage from "../pages/ProfilePage";
import PublicPage from "../pages/PublicPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'

const App = () => {
  let [authenticated, setAuth] = useState(false)
  let [user, setUser] = useState(null)

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setAuth(true)
        setUser(user)
      } else {
        setAuth(false)
        setUser(null)
      }
    })
  }, [])

  return (
    <Router>
      <div>
        <div className='navbar'>
          <Link to="/">
            Chat
          </Link>
          <Link to="/profile">
            {authenticated ? 'Profile' : 'Login'} <i className="fas fa-user-circle"></i>
          </Link>
        </div>
        <Switch>
          <PrivateRoute exact path="/" authenticated={authenticated} user={user} component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <PublicRoute authenticated={authenticated} path="/public" component={PublicPage} />
          <PrivateRoute authenticated={authenticated} user={user} path="/profile" component={ProfilePage} />
          <Route path="/#" />
        </Switch>
      </div>
    </Router>
  )
}

export default App;