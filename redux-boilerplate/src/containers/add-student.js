import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button, Input, Label, Form } from 'reactstrap'
import { connect } from 'react-redux';
import { addStudent } from "./../actions/index.js";

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {
        first: '',
        last: '',
        age: '',
        technology: ''
      },
      flag: false
    }
  }
  handleChange(e) {
    let obj = {}
    obj[e.target.id] = e.target.value;
    this.setState({ student: { ...this.state.student, ...obj } })
  }
  onAddStudent() {
    Object.values(this.state.student).map((student_prop, value) => {
      if (!student_prop[value]) { return true }
    })
    this.setState({ flag: true })
    if (!this.state.flag) {
      this.props.dispatch(addStudent({...this.state.student, id: this.props.studentInfo.students.length + 1}))
      this.setState({
        student: {
          ...this.state.student,
          first: '',
          last: '',
          age: '',
          technology: ''
        },
        flag: false
      })
    }
    this.props.toggleModal();
  }
  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={() => this.props.toggleModal()}>
        <ModalHeader>Add Student</ModalHeader>
        <ModalBody>
          <Form>
            <Label>ID :</Label>
            <Input type='text' id='id' value={this.props.studentInfo.students.length + 1}/>
            <Label>First Name :</Label>
            <Input type='text' id='first' onChange={(e) => this.handleChange(e)} />
            <Label>Last Name :</Label>
            <Input type='text' id='last' onChange={(e) => this.handleChange(e)} />
            <Label>Age :</Label>
            <Input type='text' id='age' onChange={(e) => this.handleChange(e)} />
            <Label>Technology :</Label>
            <Input type='text' id='technology' onChange={(e) => this.handleChange(e)} />
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => {
            this.onAddStudent()
          }}>Add</Button>
          <Button onClick={() => this.props.toggleModal()}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return { studentInfo: state.studentInfo }
}
export default connect(mapStateToProps)(AddStudent);
