import { Navigate, Outlet } from 'react-router-dom';
import { useAuthValue } from './AuthContext';
import React from 'react';


const PrivateRoute: React.FC = () => {
  const { currentUser } =  useAuthValue();

  // if (!currentUser) {
  //   return <Navigate to="/registration"  />;
  // } else {
  //   return <Outlet />
  // }

  return ( currentUser ? <Outlet /> : null )
};

export default PrivateRoute;
