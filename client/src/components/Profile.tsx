import React, { useEffect, useState } from "react";
import { useAuthValue } from "../AuthContext";
import { Navigate } from "react-router-dom";
import { ProfileContainer, ProfileForm } from "../GlobalStyles";
import StudentService from "../service/StudentService";
import { reload } from "firebase/auth";

// const Profile: React.FC = () => {
//   const { currentUser } = useAuthValue();
//   if (!currentUser) {
//     return <Navigate to="/login" replace />;
//   } else {
//     if (!currentUser.emailVerified) {
//       return <Navigate to="/verify-email" replace />;
//     } else {
//       return <ActualProfile />;
//     }
//   }
// };

// export default Profile;

const Profile: React.FC = () => {
  const [profileContent, setProfileContent] = useState<any>();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");

  const { currentUser } = useAuthValue();

  // const form = (props) => {

  // }

  //Get Student by Email
  useEffect(() => {
    StudentService.getStudentByEmail(currentUser.email).then((profile) => {
      setProfileContent(profile[0]);
      setFirstName(profile[0].firstName);
      setLastName(profile[0].lastName);
      setDateOfBirth(profile[0].dob);
      setPhoneNumber(profile[0].phone);
      setBio(profile[0].bio);
      console.log(profileContent);
    });
  }, []);

  //Post New Student
  const addStudent = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    return fetch("http://localhost:8080/api/students/", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: currentUser.email,
        phone: phone,
        dob: dateOfBirth,
        bio: bio,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then(reload);
  };

  //Update Student
  const updateStudent = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    return fetch(`http://localhost:8080/api/students/${profileContent.id}`, {
      method: "PUT",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: currentUser.email,
        phone: phone,
        dob: dateOfBirth,
        bio: bio,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      return res.json();
    });
  };

  return (
    <ProfileContainer>
      {profileContent ? (
        <ProfileForm onSubmit={updateStudent}>
          <div className="profileImageContainer">
            {currentUser.photoURL == null ? (
              <img src="https://img.icons8.com/external-kosonicon-lineal-color-kosonicon/512/external-education-insurance-kosonicon-lineal-color-kosonicon.png" />
            ) : (
              <img src={currentUser.photoURL} />
            )}
          </div>
          <h2>Update Profile</h2>
          <br />
          <ul>
            <li className="form-row">
              <label id="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={currentUser.email}
                disabled
              />
            </li>
            <li className="form-row">
              <label id="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                defaultValue={profileContent.firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </li>
            <li className="form-row">
              <label id="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                defaultValue={profileContent.lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </li>
            <li className="form-row">
              <label id="DOB">Date of Birth</label>
              <input
                type="date"
                id="DOB"
                name="DOB"
                defaultValue={profileContent.dob}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </li>
            <li className="form-row">
              <label id="Phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                defaultValue={profileContent.phone}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </li>
            <li className="form-row">
              <label id="bio">Bio</label>
              <textarea
                id="bio"
                name="bio"
                defaultValue={profileContent.bio}
                onChange={(e) => setBio(e.target.value)}
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
          <h2>Create Profile</h2>
          <p>Please complete all fields!</p>
          <br />
          <ul>
            <li className="form-row">
              <label id="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={currentUser.email}
                required
                disabled
              />
            </li>
            <li className="form-row">
              <label id="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </li>
            <li className="form-row">
              <label id="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </li>
            <li className="form-row">
              <label id="DOB">Date of Birth</label>
              <input
                type="date"
                id="DOB"
                name="DOB"
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </li>
            <li className="form-row">
              <label id="Phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </li>
            <li className="form-row">
              <label id="bio">Bio</label>
              <textarea
                id="bio"
                name="bio"
                onChange={(e) => setBio(e.target.value)}
                required
              />
            </li>
          </ul>
          <button type="submit">Create Profile</button>
        </ProfileForm>
      )}
    </ProfileContainer>
  );
};


export default Profile
