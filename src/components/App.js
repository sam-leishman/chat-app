import '../App.scss';
import React, { useState, useEffect } from 'react';

import { auth } from "../services/firebase";

import HomePage from "../pages/HomePage.js";
import LoginPage from "../pages/LoginPage.js";
import ProfilePage from "../pages/ProfilePage";
import PublicPage from "../pages/PublicPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import SignedIn from "./SignedIn"

import {
  HashRouter as Router,
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
  console.log('App.js: ' + authenticated)

  return (
    <Router>
      <div>
        <div className='navbar'>
          <Link className="link" to="/">
            Chat
          </Link>
          <h5 className='header-website-name'>{authenticated ? 'Spiffy' : ''}</h5>
          <Link className="link" to="/profile">
            {authenticated ? 'Profile' : 'Not signed in'} <i className="fas fa-user-circle"></i>
          </Link>
        </div>
        <Switch>
          <PrivateRoute exact path="/" authenticated={authenticated} user={user} component={HomePage} />
          { authenticated ? <Route path="/login" component={SignedIn} /> : <Route path="/login" component={LoginPage} />}
          <PublicRoute authenticated={authenticated} path="/public" component={PublicPage} />
          <PrivateRoute authenticated={authenticated} user={user} path="/profile" component={ProfilePage} />
          <Route path="/#" />
        </Switch>
      </div>
    </Router>
  )
}

export default App;