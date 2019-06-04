import React, { Component } from 'react';
import { Table } from 'reactstrap'
import { NavLink as Link } from 'react-router-dom'
import { connect } from 'react-redux';

class UserList extends Component {
  render() {
    const { users } = this.props
    return (
      <div>
        <h1>User List</h1>
        <Table bordered striped>
          <thead>
            <tr>
              <th><h3>Name</h3></th>
              <th><h3>Edit</h3></th>
            </tr>
          </thead>
          <tbody>
            {(users || []).map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.first} {user.last}</td>
                  <td><Link to={`/${user.id}`}>Edit</Link></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    )
  }
}
const mapStatetoProps = (state) => {
  return { users: state.userInfo.users }
}
export default connect(mapStatetoProps)(UserList);

