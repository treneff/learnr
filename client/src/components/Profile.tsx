import React from "react";
import { useAuthValue } from "../AuthContext";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { currentUser } = useAuthValue();
  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  if (!currentUser?.emailVerified) {
    return <Navigate to="/" replace />;
  }
  // console.log(currentUser)

  return (
    <>
      <h2>Profile</h2>
      {currentUser.displayName}
      <p>{currentUser.email} </p>
    </>
  );
};

export default Profile;
