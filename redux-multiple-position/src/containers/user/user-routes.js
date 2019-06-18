import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { UserDashboard } from './user-dashboard';
import { UserDetails } from './user-details';
import { NotFound } from '../not-found';

class User extends Component {
  render() {
    const { match } = this.props
    return (
      <>
        <Route exact path={`${match.path}/dashboard`} component={UserDashboard} />
        <Route exact path={`${match.path}/details`} component={UserDetails} />
        <Route render={NotFound} />
      </>
    )
  }
}
export default User;
