import styled from "styled-components";

export const AuthorisationContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 18rem;
  margin: 2rem auto;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export const AuthorisationForm = styled.form`
  position: relative;
  z-index: 1;
  background: var(--background-color);
  max-width: 18rem;
  margin: 0 auto 6vh;
  padding: 1.75rem;
  border-radius: 0.2rem;
  text-align: center;

  .registrationImageContainer {
    background: var(--primary-color);
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
    background: var(--secondary-color);
    width: 100%;
    border: 0;
    padding: 15px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    color: black;
    font-size: 14px;
    transition: all 0.3 ease;
    cursor: pointer;
  }

  button:disabled,
  button[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }

  #or {
    margin-top: 1rem;
    color: #b3b3b3;
    font-size: 12px;
  }

  #google {
    background: var(--tertiary-color);
    color: var(--background-color);
  }

  #haveAnAccount {
    margin-top: 15px;
    color: #b3b3b3;
    font-size: 12px;
  }
  #haveAnAccount a {
    color: #ef3b3a;
    text-decoration: none;
  }
`;

export const ProfileContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 40rem;
  margin: 2rem auto;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export const ProfileForm = styled.form`
  position: relative;
  z-index: 1;
  background: var(--background-color);
  max-width: 40rem;
  margin: 0 auto 6vh;
  padding: 1.75rem;
  border-radius: 0.2rem;
  text-align: center;

  .profileImageContainer {
    background: var(--primary-color);
    width: 9rem;
    height: 9rem;
    margin: 0 auto 1.5rem;
    padding: 1.75rem;
    border-radius: 50%;
    box-sizing: border-box;
  }

  .profileImageContainer img {
    display: block;
    width: 100%;
    border-radius: 50%;
  }

  .form-row {
    display: flex;
    justify-content: flex-end;
  }

  .form-row > label {
    padding: 0.5rem 1rem 0.5rem 0;
    flex: 1;
  }
  .form-row > input {
    flex: 2;
  }

  .form-row > textarea {
    flex: 2;
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
    background: var(--secondary-color);
    width: 70%;
    border: 0;
    padding: 15px;
    margin-top: 2rem;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    color: black;
    font-size: 14px;
    transition: all 0.3 ease;
    cursor: pointer;
  }
`;

export const PopUp = styled.div`
  position: relative;
  width: 35%;
  height: auto;
  max-height: 70vh;
  margin: 0 auto;
  margin-top: calc(100vh - 85vh - 20px);
  background-color: var(--background-color);
  color: var(--tertiary-color);
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: var(--tertiary-color);
  background-color: rgba(0, 0, 0, 0.75);
`;

export const CloseX = styled.span`
  content: "x";
  cursor: pointer;
  position: relative;
  color: var(--secondary-color);
`;
