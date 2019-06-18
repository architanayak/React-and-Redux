import React from 'react'
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoutes = ({ render: Component, ...param }) => {
  return (
    <Route
      {...param}
      render={(props) => localStorage.getItem('user') ? (
        <Component {...props} />
      ) : (<Redirect
        to='/' />)
      }
    />
  )
}