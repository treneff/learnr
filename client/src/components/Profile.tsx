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

  const[firstName, setFirstName] = useState("")
  const[lastName, setLastName] = useState("")
  const[dateOfBirth, setDateOfBirth] = useState("")
  const[phone, setPhoneNumber] = useState("")
  const[bio, setBio] = useState("")


  const { currentUser } = useAuthValue();

  const courseID = 1;

  //Get Student by Email
  useEffect(() => {
    StudentService.getStudentByEmail(currentUser.email).then((profile) => {
      setProfileContent(profile[0]);
      console.log(profileContent)
    });
  }, []);

  //Post New Student
  const addStudent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return fetch("http://localhost:8080/api/students/", {
        method: 'POST',
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: currentUser.email,
          phone: phone,
          dateOfBirth: dateOfBirth,
          bio: bio,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => {
        console.log(res);
        return res.json();
    });
 }
 
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
        <ProfileForm onSubmit={addStudent}>
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
              <input type="text" id="first-name" name="first-name"   onChange={(e) => setFirstName (e.target.value)} required />
            </li>
            <li className="form-row">
              <label id="last-name">Last Name</label>
              <input type="text" id="last-name" name="last-name"   onChange={(e) => setLastName (e.target.value)} required />
            </li>
            <li className="form-row">
              <label id="DOB">Date of Birth</label>
              <input type="date" id="DOB" name="DOB"   onChange={(e) => setDateOfBirth (e.target.value)} required />
            </li>
            <li className="form-row">
              <label id="Phone">Phone</label>
              <input type="text" id="phone" name="phone"  onChange={(e) => setPhoneNumber (e.target.value)}  required />
            </li>
            <li className="form-row">
              <label id="bio">Bio</label>
              <textarea id="bio" name="bio" onChange={(e) => setBio (e.target.value)} required />
            </li>
          </ul>
          <button type="submit">Update Profile</button>
        </ProfileForm>
      )}
    </ProfileContainer>
  );
};