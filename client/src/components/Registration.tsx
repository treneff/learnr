import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
// import { useAuthValue } from 'firebase/context';
import styled from "styled-components";
import colors from "../Global";

const RegistrationContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 18rem;
  margin: 2rem auto;
`;

const RegistrationForm = styled.form`
   position: relative;
  z-index: 1;
  background: ${colors.get("backgroundColor")};;
  max-width: 18rem;
  margin: 0 auto 6vh;
  padding: 1.75rem;
  border-radius: 0.2rem;
  text-align: center;


  .registrationImageContainer {
    background: ${colors.get("primaryColor")};
    width: 9rem;
    height: 9rem;
    margin: 0 auto 1.5rem;
    padding: 1.75rem;
    border-radius: 50%;
    box-sizing: border-box;
  }

  .registrationImageContainer img {
    display: block;
    width: 100%;
  }

  input {
    outline: 0;
    background: #ffffff;
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
  }

  button {
    outline: 0;
    background: ${colors.get("secondaryColor")};
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
  }

  #or {
    margin-top: 1rem;
    color: #b3b3b3;
    font-size: 14px;
  }

  #google {
    background: ${colors.get("tertiaryColor")};
  }

  #haveAnAccount {
    margin-top: 15px;
    color: #b3b3b3;
    font-size: 14px;
  }
  #haveAnAccount a {
    color: #ef3b3a;
    text-decoration: none;
  }
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

  const signInWithGoogle = async (): Promise<void> => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="center">
      <RegistrationContainer>
        <RegistrationForm onSubmit={register} name="registration_form">
          <div className="registrationImageContainer">
            <img src="https://img.icons8.com/external-kosonicon-lineal-color-kosonicon/512/external-education-insurance-kosonicon-lineal-color-kosonicon.png" />
          </div>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            value={password}
            required
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            value={confirmationPassword}
            required
            placeholder="Confirm password"
            onChange={(e) => setConfirmationPassword(e.target.value)}
          />

          {error && <div className="auth__error">{error}</div>}

          <button type="submit">Register</button>

          <p id="or">or</p>

          <button id="google" onClick={signInWithGoogle}>
            Register with Google
          </button>

          <p id="haveAnAccount">
            Already have an account?
            <Link to="/login"> Login </Link>
          </p>
        </RegistrationForm>
      </RegistrationContainer>
    </div>
  );
};

export default Registration;
