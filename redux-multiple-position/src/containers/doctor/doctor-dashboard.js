import React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export const DoctorDashboard = () => {
  return <div>
    <h1>Doctor Dashboard</h1>
    <h3>For Doctor Details.. Click <Button><NavLink className='link' to='/doctor/details'>Doctor Details</NavLink></Button></h3>
  </div>
}