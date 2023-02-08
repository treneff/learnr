import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
// import { useAuthValue } from 'firebase/context';
import styled from "styled-components";
import colors from "../Global";


const RegistrationForm = styled.form`
position: relative;
z-index: 1;
background: #ffffff;
max-width: 300px;
margin: 0 auto 100px;
padding: 30px;
border-top-left-radius: 3px;
border-top-right-radius: 3px;
border-bottom-left-radius: 3px;
border-bottom-right-radius: 3px;
text-align: center;
`;

const RegistrationFormInput = styled.input`
outline: 0;
background: #f2f2f2;
width: 100%;
border: 0;
margin: 0 0 15px;
padding: 15px;
border-top-left-radius: 3px;
border-top-right-radius: 3px;
border-bottom-left-radius: 3px;
border-bottom-right-radius: 3px;
box-sizing: border-box;
font-size: 14px;
`;

const RegistrationFormButton = styled.button`
outline: 0;
background: #ef3b3a;
width: 100%;
border: 0;
padding: 15px;
border-top-left-radius: 3px;
border-top-right-radius: 3px;
border-bottom-left-radius: 3px;
border-bottom-right-radius: 3px;
color: #ffffff;
font-size: 14px;
transition: all 0.3 ease;
cursor: pointer;
`;

const RegistrationContainer = styled.div`
position: relative;
z-index: 1;
max-width: 300px;
margin: 0 auto;
`;

const Registration: React.FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [error, setRegistrationError] = useState("");
  const navigate = useNavigate();
  //   const {setTimeActive} = useAuthValue()

  const checkPassword = () => {
    let passwordValid = true;
    if (password !== null && confirmationPassword !== null) {
      if (password !== confirmationPassword) {
        passwordValid = false;
        setRegistrationError("Passwords do not match! Try again!");
      }
    }
    return passwordValid;
  };

  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRegistrationError("");
    if (checkPassword() == true) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          if (auth.currentUser) {
            sendEmailVerification(auth.currentUser)
              .then(() => {
                // setTimeActive(true);
                navigate("/verify-email");
              })
              .catch((err: Error) => alert(err.message));
          } else {
            setRegistrationError("Error: User is not defined");
          }
        })
        .catch((err: Error) => setRegistrationError(err.message));
    }
    setEmail("");
    setPassword("");
    setConfirmationPassword("");
  };

//   const registerWithGoogle = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setRegistrationError("");
//     if (checkPassword() == true) {
//       createUserWithEmailAndPassword(auth, email, password)
//         .then(() => {
//           if (auth.currentUser) {
//             sendEmailVerification(auth.currentUser)
//               .then(() => {
//                 // setTimeActive(true);
//                 navigate("/verify-email");
//               })
//               .catch((err: Error) => alert(err.message));
//           } else {
//             setRegistrationError("Error: User is not defined");
//           }
//         })
//         .catch((err: Error) => setRegistrationError(err.message));
//     }
//     setEmail("");
//     setPassword("");
//     setConfirmationPassword("");
//   };


  return (
    <div className="center">
      <RegistrationContainer>
        <h1>Register</h1>
        <RegistrationForm onSubmit={register} name="registration_form">
        <RegistrationFormButton type="submit">
            Register with Google
          </RegistrationFormButton>
          <p>or</p>
          <RegistrationFormInput
            type="email"
            value={email}
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <RegistrationFormInput
            type="password"
            value={password}
            required
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <RegistrationFormInput
            type="password"
            value={confirmationPassword}
            required
            placeholder="Confirm password"
            onChange={(e) => setConfirmationPassword(e.target.value)}
          />

          <RegistrationFormButton type="submit">
            Register
          </RegistrationFormButton>
  
        </RegistrationForm>

        {error && <div className="auth__error">{error}</div>}

        <span>
          Already have an account?
          <Link to="/login">login</Link>
        </span>
      </RegistrationContainer>
    </div>
  );
};

export default Registration;
