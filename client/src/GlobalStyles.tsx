import styled from "styled-components";

let colors = new Map<string, string>();

// export const colors: {object} = {
//     primaryColor: "#add9f4",
//     backgroundColor: "#f5f3f3",
//     textColor: "#000000",
//     secondaryColor: "#cc618a",
//     tertiaryColor: "#102b3f"
// }

colors.set("primaryColor", "#add9f4");
colors.set("backgroundColor", "#f5f3f3");
colors.set("textColor", "#000000");
colors.set("secondaryColor", "#cc618a");
colors.set("tertiaryColor", "#102b3f");

export default colors;

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
  background: ${colors.get("backgroundColor")};
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
    background: ${colors.get("tertiaryColor")};
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
  background: ${colors.get("backgroundColor")};
  max-width: 40rem;
  margin: 0 auto 6vh;
  padding: 1.75rem;
  border-radius: 0.2rem;
  text-align: center;

  .profileImageContainer {
    background: ${colors.get("primaryColor")};
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
    /* padding: 0.4rem; */
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
    background: ${colors.get("secondaryColor")};
    width: 70%;
    border: 0;
    padding: 15px;
    margin-top: 2rem;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    color: #ffffff;
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
    background: ${colors.get("tertiaryColor")};
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
