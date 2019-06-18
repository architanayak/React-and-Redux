import React, { Component } from 'react'
import { Form, Label, Input, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      }
    }
  }
  getUserDetails(e) {
    let obj = {}
    obj[e.target.id] = e.target.value
    this.setState({ user: { ...this.state.user, ...obj } })
  }
  checkUser() {
    let user = this.props.users.find(i => {
      return i.email === this.state.user.email
    })
    if (user) {
      console.log(user)
      localStorage.setItem('user', user.email)
      this.props.history.push(`/${user.email}/dashboard`)
    } else {
      console.log('not matched')
    }
  }
  render() {
    return (
      <div>
        {localStorage.getItem('user') ?<>
          {this.props.location.pathname === '/' ? <h3>You need to Logout first</h3> : null}
          <Button onClick={() => localStorage.removeItem('user')}>
            <NavLink className='link' to='/'>Logout</NavLink>
          </Button>
          </> :
          <Form>
            <Label>Email</Label>
            <Input type='text' id='email' onChange={(e) => { this.getUserDetails(e) }} />
            <Label>Password</Label>
            <Input type='password' id='password' onChange={(e) => { this.getUserDetails(e) }} />
            <br />
            <Button block color='info' onClick={() => this.checkUser()}>Log In</Button>
          </Form>
        }
      </div>
    )
  }
}
const stateToProps = (state) => {
  return { users: state.userRoles.userRoles }
}
export default connect(stateToProps)(Login);