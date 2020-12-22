import './App.css';
import { Component } from 'react';
import Compiler from "./Compiler.js"

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="ui menu">
            <Link to="/homeChat">
              Home Chat
            </Link>
            <Link to="/home">
              Home
            </Link>
          </div>
          <Switch>
            {/* We'll insert more Route components here */}
            <Route path="/homeChat" component={Compiler} />
            {/* <Route path="/home" component={App} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;