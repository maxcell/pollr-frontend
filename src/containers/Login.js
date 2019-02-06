import React, { Component } from 'react'

import { connect } from 'react-redux';
import { login } from '../redux/actions/login'
import { currentUser } from '../redux/actions/current_user' 

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  componentDidMount(){
    const token = localStorage.getItem('jwt')
    if(token){
      this.props.dispatch(currentUser(token))
      .then(json => this.props.history.push('/dashboard'))
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const loginCredentials = {...this.state}
    this.props.dispatch(login(loginCredentials))
    .then(json => this.props.history.push('/dashboard'))
  }
  
  render() {
      return  (
      <section>
        <h1>Log In</h1>
        <>
          <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input type="text" name="email" placeholder="user@email.com"/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="hunter2"/>
            <input type="submit" />
          </form>
        </>
      </section>
    )
  }
}

function mapStateToProps(state){
  const { loggedIn, currentUser, isLoading } = state.auth
  return {
    loggedIn,
    currentUser,
    isLoading
  }
}

export default connect(mapStateToProps)(Login)