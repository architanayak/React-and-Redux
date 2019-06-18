import React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export const AdminDashboard = () => {
  return <div>
    <h1>Admin Dashboard</h1>
    <h3>For Admin Details.. Click <Button><NavLink className='link' to='/admin/details'>Admin Details</NavLink></Button></h3>
  </div>
}