import '../App.css';
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
  Redirect,
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
        console.log(user)
      } else {
        setAuth(false)
        setUser(null)
      }
    })
  }, [])

  return (
    <Router>
      <div>
        <div>
          <Link to="/">
            Home Chat
          </Link>
          <Link to="/profile">
            Profile Page <i className="fas fa-user-circle"></i>
          </Link>
          <Link to="/login">
            Login
          </Link>
        </div>
        <Switch>
          {/* We'll insert more Route components here */}
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <PublicRoute authenticated={authenticated} path="/public" component={PublicPage} />
          <PrivateRoute authenticated={authenticated} path="/profile" component={ProfilePage} />
          {/* <Route path="/ProfilePage" component={ProfilePage} /> */}
          <Route path="/#" />
        </Switch>
      </div>
    </Router>
  )
}

export default App;