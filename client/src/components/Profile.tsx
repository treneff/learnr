import React from "react";
import { useAuthValue } from "../AuthContext";

const Profile = () => {
  const {currentUser} = useAuthValue();
  console.log(currentUser)

  return (
    <>
      <h2>Profile</h2>
      {currentUser.displayName}
      <p>{currentUser.email} </p>
    </>
  );
};

export default Profile;
