import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editUser } from './../actions/index.js';
import { Button, Input, Label, Form } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import Add_Address from './add-address.js';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      modal: false,
    }
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    const user = this.props.users.find(x => x.id === parseInt(id));
    this.setState({ user });
  }
  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }
  editUserDetails(e) {
    let obj = {};
    obj[e.target.id] = e.target.value;
    this.setState({ user: { ...this.state.user, ...obj } })
  }
  addAddress(newAddress) {
    // let newAdd = ;
    const { user } = this.state;
    this.setState({ user: {...user, address: [...user.address, newAddress ] } }, () => this.toggleModal())
  }
  render() {
    return (
      <div>
        <h1>Edit User Details</h1>
        <Form>
          <Label>ID</Label>
          <Input type='text' value={this.state.user.id} />
          <Label>First Name</Label>
          <Input type='text' id='first' value={this.state.user.first} onChange={(e) => this.editUserDetails(e)} />
          <Label>Last Name</Label>
          <Input type='text' value={this.state.user.last} id='last' onChange={(e) => this.editUserDetails(e)} />
          <Label>Age</Label>
          <Input type='text' value={this.state.user.age} id='age' onChange={(e) => this.editUserDetails(e)} />
          <Label>Technology</Label>
          <Input type='text' value={this.state.user.technology} id='technology' onChange={(e) => this.editUserDetails(e)} />
          <Label>School</Label>
          <Input type='text' value={this.state.user.school} id='school' onChange={(e) => this.editUserDetails(e)} />
          <Label>Date of Birth</Label>
          <Input type='text' value={this.state.user.dateOfBirth} id='dateOfBirth' onChange={(e) => this.editUserDetails(e)} />
          <Label>Address</Label>
          {(this.state.user.address || []).map((address, key) => {
            return (
              <div key={key}>
                <Input type='textarea'
                  value={Object.values(address).map((addressDetails) => {
                    return (addressDetails)
                  })}
                />
                <br />
              </div>
            )
          })}
          <Button onClick={() => this.toggleModal()}>Add Address</Button>
          <br />
          <br />
          <Add_Address
            addAddress={(newAddress) => this.addAddress(newAddress)}
            modal={this.state.modal}
            toggleModal={() => this.toggleModal()}
          />
          <Button block color='success' onClick={() => this.props.dispatch(editUser({ ...this.state.user }))}>Submit</Button>
          <Button block color='info'><Link className='link' to='/'>Cancel</Link></Button>
        </Form>
      </div>
    )
  }
}
const mapStatetoProps = (state) => {
  return { users: state.userInfo.users }
}
export default connect(mapStatetoProps)(UserDetails);
