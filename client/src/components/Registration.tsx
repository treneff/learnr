import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { useAuthValue } from '../AuthContext';
import { AuthorisationContainer, AuthorisationForm } from "../GlobalStyles";

const Registration: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [error, setRegistrationError] = useState("");
  const navigate = useNavigate();
  const { setVerificationCountdownActive } = useAuthValue()


  //If password and confirm password are not null, check if the password and 
  //the confirm password are not the same.  If not, set passwordValid to false
  //and set the registration error state to a message.  If they are, return
  //password valid (which will be unchanged from the default of true )

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
    //Prevent default click handling.
    e.preventDefault();
    //Set the registration error to nothing.
    setRegistrationError("");
    //If password is ok
    if (checkPassword() == true) {
      //Create a firebase user with the details in state.
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          //If there is a current user (ie nothing went wrong creating them).
          if (auth.currentUser) {
            //Send the current user an email verification message.
            sendEmailVerification(auth.currentUser)
            //Then start timer and navigate them to the verify email page.
              .then(() => {
                setVerificationCountdownActive(true);
                navigate("/verify-email");
              })
              //If there was a problem navigating or starting timer.
              .catch((err: Error) => alert(err.message));
          } else {
            //If there was no current user to send the email to.
            setRegistrationError("Error: User is not defined");
          }
        })
        //If something went wrong creating a user with email and password.
        .catch((err: Error) => setRegistrationError(err.message));
    }
    //Clear form.
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
      <AuthorisationContainer>
        <AuthorisationForm onSubmit={register} name="registration_form">
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

          {error && <div>{error}</div>}

          <button type="submit">Register</button>

          <p id="or">or</p>

          <button id="google" onClick={signInWithGoogle}>
            Register with Google
          </button>

          <p id="haveAnAccount">
            Already have an account?
            <Link to="/"> Login </Link>
          </p>
        </AuthorisationForm>
      </AuthorisationContainer>
  );
};

export default Registration;
