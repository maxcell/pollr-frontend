import React, { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';

import Home from './Home'
import Login from '../containers/Login'
import SignUp from '../containers/SignUp';
import MyPolls from '../containers/MyPolls'
import PrivateRoute from '../components/PrivateRoute'
import { logout } from '../redux/actions/login';
import { connect } from 'react-redux';


class App extends Component {


  handleLogout = (e) => {
    this.props.dispatch(logout())
  }

  render() {
    let button;
    if(localStorage.getItem('jwt')){
      button = <li><Link onClick={this.handleLogout} to={`/`}>Logout</Link></li>
    } else {
      button = <li><Link to={`/login`}>Login</Link></li>
    }

    return (
      <div className="App">
        <header className="header">
          <nav>
            <li><Link to="/">Home</Link></li>
            {button}
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/dashboard" component={MyPolls} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => { dispatch(logout())}
  }
}

const mapStateToProps = function mapStateToProps(state){
  const { loggedIn, currentUser } = state.auth
  console.log(loggedIn)
  return {
    loggedIn,
    currentUser,
  }
}

export default withRouter(connect(mapDispatchToProps)(App))