import { useAuthValue } from "../AuthContext";
import { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthorisationContainer, AuthorisationForm } from "../GlobalStyles";

const EmailVerification: React.FC = () => {
  const [timer, setTimer] = useState(60);

  const { currentUser } = useAuthValue();
  const { verificationCountdownActive, setVerificationCountdownActive } = useAuthValue();
  const navigate = useNavigate();

  //This useEffect runs the reload function every second until the user has verified their email.
  useEffect(() => {
    const interval = window.setInterval(() => {
      if (currentUser) {
        currentUser
          .reload()
          .then(() => {
            //If the user does verify their email, redirects to profile page.
            if (currentUser.emailVerified) {
              window.clearInterval(interval);
              navigate("/profile");
            }
          })
          .catch((err: Error) => {
            alert(err.message);
          });
      }
    }, 1000);
  }, [navigate, currentUser]);

  //This useEffect allows only one email to be sent every 30 secs
  useEffect(() => {
    let interval: number | null = null;
    //Hook runs if the countdown starts or the time changes and isn't at zero.
    if (verificationCountdownActive && timer !== 0) {
      //Reduce the time by 1 each time using the set interval method.
      interval = window.setInterval(() => {
        setTimer((previousTime) => previousTime - 1);
      }, 1000);
      //If the timer is at zero...
    } else if (timer === 0) {
      //Set countdown to false and set the timer back to 60.
      setVerificationCountdownActive(false);
      setTimer(60);
      //and reset the interval.
      if (interval) {
        window.clearInterval(interval);
      }
    }
    return () => {
      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, [verificationCountdownActive, timer, setVerificationCountdownActive]);

  const resend = () => {
    if (auth.currentUser)
      sendEmailVerification(auth.currentUser)
        .then(() => {
          setVerificationCountdownActive(true);
        })
        .catch((err) => {
          setVerificationCountdownActive(true);
        });
  };

  return (
    <AuthorisationContainer>
      <AuthorisationForm name="verify_form">
        <div className="registrationImageContainer">
          <img src="https://img.icons8.com/external-kosonicon-lineal-color-kosonicon/512/external-education-insurance-kosonicon-lineal-color-kosonicon.png" />
        </div>
        <h3>Verify Email Address</h3>
        <p>
          <strong>An email has been sent to:</strong>
          <br />
          <span>{currentUser?.email}</span>
        </p>
        <p>
          Follow the instructions in the email to verify your account!
        </p>
        <br />
        <button onClick={resend} disabled={verificationCountdownActive}>
          Resend Email {verificationCountdownActive && timer}
        </button>
      </AuthorisationForm>
    </AuthorisationContainer>
  );
};

export default EmailVerification;
