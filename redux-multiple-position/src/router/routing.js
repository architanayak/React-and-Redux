import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from '../containers/login';
// import { PrivateRoutes } from './private-routing';
import Admin from '../containers/admin/admin-routes';
import Doctor from '../containers/doctor/doctor-routes';
import User from '../containers/user/user-routes';
import { NotFound } from '../containers/not-found';

const selectUserPosition = (key, Component, props) => {
  return (
    localStorage.getItem('user') === key ? <Component {...props} /> : <Redirect to='/' />
  )
}

export const routing = (
  <Router>
    <Route path='/' component={Login} />
    <Switch>
      <Route path='/admin' render={(props) => selectUserPosition('admin', Admin, props)} />
      <Route path='/user' render={(props) => selectUserPosition('user', User, props)} />
      <Route path='/doctor' render={(props) => selectUserPosition('doctor', Doctor, props)} />
    </Switch>
  </Router>
)

//Not found not working properly