import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, roles }) => {
  const { isAuthenticated, user } = useContext(AuthContext);

  const hasRequiredRole = roles.includes(user?.role);

  if (!isAuthenticated || !hasRequiredRole) {
    return <Navigate to="/login" replace />;
  }

  return <Component />;
};

export default ProtectedRoute;