import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import User from '../User'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Layout goes here */}
          {/* Routes go here */}
          <Route exact path="/" component={User}/>
        </div>
      </Router>
    )
  }
}

export default App
