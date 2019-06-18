import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom'
import { DoctorDashboard } from './doctor-dashboard';
import { DoctorDetails } from './doctor-details';

class Doctor extends Component {
  render() {
    const { match } = this.props
    return (
      <>
        <Switch>
          <Route exact path={`${match.path}/dashboard`} component={DoctorDashboard} />
          <Route exact path={`${match.path}/details`} component={DoctorDetails} />
        </Switch>
      </>
    )
  }
}
export default Doctor;