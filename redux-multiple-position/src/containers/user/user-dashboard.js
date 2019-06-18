import React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export const UserDashboard = () => {
  return <div>
    <h1>User Dashboard</h1>
    <h3>For User Details.. Click <Button><NavLink className='link' to='/user/details'>User Details</NavLink></Button></h3>
  </div>
}