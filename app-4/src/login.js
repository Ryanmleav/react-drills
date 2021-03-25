import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      pass: ''
    };
    this.updateLogin = this.updateLogin.bind(this)
  }
  updateUser(name) {
    this.setState({ user: name })
  }
  updatePass(value) {
    this.setState({ pass: value })
  }
  updateLogin() {
    alert(`Username: ${this.state.user} Password: ${this.state.pass}`)
  }
  render() {
    return (
      <h1>
        <input onChange={(e) => this.updateUser(e.target.value)} type='text'></input>
        <input onChange={(e) => this.updatePass(e.target.value)} type='text'></input>
        <button onClick={this.updateLogin}>Login</button>
      </h1>
    )
  }
}
export default Login