import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import { connect } from 'react-redux';

class StudentDetails extends Component {
  render() {
    let { activeStudent } = this.props;
    if (!activeStudent) {
      return true
    }
    else {
      return (
        <Card>
          <CardBody>
            <CardTitle>Name: {activeStudent.first} {activeStudent.last}</CardTitle>
            <CardText>
              Age: {activeStudent.age}
            </CardText>
            <CardText>
              Technology: {activeStudent.technology}
            </CardText>
          </CardBody>
        </Card>
      )
    }
  }
}
const mapStateToProps = (state) => {
  return { activeStudent: state.studentInfo.activeStudent }
}
export default connect(mapStateToProps)(StudentDetails);