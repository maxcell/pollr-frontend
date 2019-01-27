import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Home from './Home'
import Login from '../containers/Login'
import SignUp from '../containers/SignUp';
import MyPolls from '../containers/MyPolls'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/dashboard" component={MyPolls} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
