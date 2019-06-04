import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-details';

export const routing = (
  <Router>
    <Route exact path = '/' component={UserList}/>
    <Route exact path = '/:id' component={UserDetails}/>
  </Router>
)

