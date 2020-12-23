import './App.css';
import { Component } from 'react';
import HomePage from "./HomePage.js"
import ProfilePage from "./ProfilePage"

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          This is a bunch of filler text.
          <div className="ui menu">
            <Link to="/HomePage">
              Home Chat
            </Link>
            <Link to="/ProfilePage">
              Profile Page
            </Link>
            <Link to="/#">
              Root
            </Link>
          </div>
          <Switch>
            {/* We'll insert more Route components here */}
            <Route path="/HomePage" component={HomePage} />
            <Route path="/ProfilePage" component={ProfilePage} />
            <Route path="/#" />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;