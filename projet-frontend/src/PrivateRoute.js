import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const authToken = localStorage.getItem('authToken');

  return (
    <Route
      {...rest}
      element={authToken ? <Element /> : <Navigate to="/" />}
    />
  );
};

export default PrivateRoute;
