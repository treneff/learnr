import React from "react";
import { useAuthValue } from "../AuthContext";
import { Navigate } from "react-router-dom";
import { ProfileContainer, ProfileForm } from "../GlobalStyles";

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
      <ProfileContainer>
        <ProfileForm>
          <div className="profileImageContainer">
            {currentUser.photoURL == null ? (
              <img src="https://img.icons8.com/external-kosonicon-lineal-color-kosonicon/512/external-education-insurance-kosonicon-lineal-color-kosonicon.png" />
            ) : (
              <img src={currentUser.photoURL} />
            )}
          </div>
          <h2>Profile</h2>
          <br />
          <ul>
            <li className="form-row">
              <label id="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={currentUser.email}
                required
              />
            </li>
            <li className="form-row">
              <label id="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                // value={currentUser.email}
                required
              />
            </li>
            <li className="form-row">
              <label id="last-name">Last Name</label>
              <input type="text" id="last-name" name="last-name" required />
            </li>
            <li className="form-row">
              <label id="DOB">Date of Birth</label>
              <input type="date" id="DOB" name="DOB" required />
            </li>
            <li className="form-row">
              <label id="Phone">Phone</label>
              <input type="text" id="phone" name="phone" required />
            </li>
            <li className="form-row">
              <label id="bio">Bio</label>
              <textarea id="bio" name="bio" required />
            </li>
            {/* <li className="form-row"> */}
            {/* </li> */}
          </ul>
          <button type="submit">Update Profile</button>

        </ProfileForm>
      </ProfileContainer>
    </>
  );
};

export default Profile;
