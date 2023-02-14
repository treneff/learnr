import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus, useAuthValue } from './AuthContext';
import React from 'react';


const PrivateRoute: React.FC = () => {
  const {loggedIn , checkingStatus} = useAuthStatus()
  if (checkingStatus) {
    return <div>
      Loading...
    </div>
  }
  return loggedIn ? <Outlet /> : <Navigate to='/login' />
};

export default PrivateRoute;
