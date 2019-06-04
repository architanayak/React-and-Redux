import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button, Input, Label, Form } from 'reactstrap'

class Add_Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: {
        first: '',
        second: '',
        third: '',
        fourth: ''
      },
    }
  }
  handleChange(e) {
    let obj = {}
    obj[e.target.id] = e.target.value;
    this.setState({ address: { ...this.state.address, ...obj } })
  }
  onAddAddress() {
    this.props.addAddress(this.state.address)
  }
  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={() => this.props.toggleModal()}>
        <ModalHeader>Add Address</ModalHeader>
        <ModalBody>
          <Form>
            <Label>House No :</Label>
            <Input type='text' id='first' onChange={(e) => this.handleChange(e)} />
            <Label>City :</Label>
            <Input type='text' id='second' onChange={(e) => this.handleChange(e)} />
            <Label>Pin Code:</Label>
            <Input type='text' id='third' onChange={(e) => this.handleChange(e)} />
            <Label>State :</Label>
            <Input type='text' id='fourth' onChange={(e) => this.handleChange(e)} />
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => {
            this.onAddAddress()
          }}>Add</Button>
          <Button onClick={() => this.props.toggleModal()}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
export default Add_Address;
