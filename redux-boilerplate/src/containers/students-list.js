import React, { Component } from 'react';
import { Button, Table, Collapse } from 'reactstrap'
import { connect } from 'react-redux'; 
import { activeStudent, deleteStudent } from "./../actions/index.js";
import StudentDetails from './student-details.js';
import AddStudent from './add-student.js';

class StudentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      collapse: false,
      currentStudent: {},
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  onSelectRecord(student) {
    const { currentStudent } = this.state;
    this.setState({ currentStudent: student.id === currentStudent.id ? {} : student })
    this.props.dispatch(activeStudent(student));
  }
  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }
  render() {
    const { currentStudent } = this.state;
    return (
      <div>
        <h1>Student List</h1>
        <Table borderless cellPadding='10px'>
          <thead>
            <tr>
              <th text-align='center' colSpan='5'>Name</th>
            </tr>
          </thead>
          {(this.props.studentInfo.students || []).map((student) => {
            return (
              <tbody key={student.id}>
                <tr
                  onClick={() => this.onSelectRecord(student)}
                >
                  <td>{student.first} {student.last}</td>
                </tr>
                <tr>
                  <Collapse
                    isOpen={currentStudent.id === student.id}>
                    <StudentDetails />
                  </Collapse>
                </tr>
              </tbody>
            )
          })}
        </Table>
        <br />
        <Button onClick={() => this.toggleModal()} >Add Student</Button>
        <AddStudent
          modal={this.state.modal}
          toggleModal={this.toggleModal}
        />
        <Button onClick={() => this.props.dispatch(deleteStudent(this.state.currentStudent))}>Delete Student</Button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state.studentInfo)
  return { studentInfo: state.studentInfo }
}
export default connect(mapStateToProps)(StudentsList);