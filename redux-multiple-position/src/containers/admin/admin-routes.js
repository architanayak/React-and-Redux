import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom'
import { AdminDashboard } from './admin-dashboard';
import { AdminDetails } from './admin-details';
import { NotFound } from '../not-found';

class Admin extends Component {
  render() {
    const { match } = this.props
    return (
      <>
        <Switch>
          <Route exact path={`${match.path}/dashboard`} component={AdminDashboard} />
          <Route exact path={`${match.path}/details`} component={AdminDetails} />
          <Route path='*' exact={true} render={NotFound} />
        </Switch>
      </>
    )
  }
}
export default Admin;