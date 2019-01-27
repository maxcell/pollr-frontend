import React, { Component } from 'react'

import { signupUser } from '../adapters/userAdapter'

export default class SignUp extends Component {
  state = {
    display_name: '',
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
    const signupCredentials = {...this.state}
    signupUser({user: signupCredentials})
    .then(console.log)
  }
  
  render() {
    return  (
      <section>
        <h1>Sign Up</h1>
      <>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <label htmlFor="display_name">Display Name</label>
          <input type="text" name="display_name" placeholder="Bob"/>
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