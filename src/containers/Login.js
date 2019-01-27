import React, { Component } from 'react'

import { loginUser } from '../adapters/userAdapter'

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const loginCredentials = {...this.state}
    loginUser(loginCredentials)
    .then(console.log)
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