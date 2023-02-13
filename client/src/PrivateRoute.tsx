import { Navigate } from 'react-router-dom';
import { useAuthValue } from './AuthContext';
import React from 'react';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { currentUser } = useAuthValue();

  if (!currentUser?.emailVerified) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
