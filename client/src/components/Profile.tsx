import React, { useEffect, useState } from "react";
import { useAuthValue } from "../AuthContext";
import { Navigate } from "react-router-dom";
import { ProfileContainer, ProfileForm } from "../GlobalStyles";
import StudentService from "../service/StudentService";

const Profile: React.FC = () => {
  const { currentUser } = useAuthValue();
  if (!currentUser) {
    return <Navigate to="/" replace />;
  } else {
    if (!currentUser.emailVerified) {
      return <Navigate to="/" replace />;
    } else {
      return <ActualProfile />;
    }
  }
};

export default Profile;

const ActualProfile: React.FC = () => {
  const [profileContent, setProfileContent] = useState<any>();

  const { currentUser } = useAuthValue();

  //Get Student by Email
  useEffect(() => {
    StudentService.getStudentByEmail(currentUser.email).then((profile) => {
      setProfileContent(profile[0]);
    });
  }, []);

  return (
    <ProfileContainer>
      {profileContent ? (
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
                value={profileContent.firstName}
                required
              />
            </li>
            <li className="form-row">
              <label id="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                value={profileContent.lastName}
                required
              />
            </li>
            <li className="form-row">
              <label id="DOB">Date of Birth</label>
              <input
                type="date"
                id="DOB"
                name="DOB"
                value={profileContent.dob}
                required
              />
            </li>
            <li className="form-row">
              <label id="Phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={profileContent.phone}
                required
              />
            </li>
            <li className="form-row">
              <label id="bio">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={profileContent.bio}
                required
              />
            </li>
          </ul>
          <button type="submit">Update Profile</button>
        </ProfileForm>
      ) : (
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
              <input type="text" id="first-name" name="first-name" required />
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
          </ul>
          <button type="submit">Update Profile</button>
        </ProfileForm>
      )}
    </ProfileContainer>
  );
};