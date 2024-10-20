import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if token is stored
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
