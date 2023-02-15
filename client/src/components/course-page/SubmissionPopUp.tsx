import { useState } from "react";
import styled from "styled-components";
import { AuthorisationContainer, AuthorisationForm } from "../../GlobalStyles";

interface SubmissionProps {
  userID: number;
  content: any;
  postSubmissionStatus: any;
  handleClose: any;
}

const SubmissionPopUp: React.FC<SubmissionProps> = ({
  userID,
  content,
  postSubmissionStatus,
  handleClose,
}) => {

  const [url, setURL] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [comment, setComment] = useState("");

  function handleChange(selection: HTMLInputElement) {
    setDifficultyLevel(selection.value);
  }

  function handleSubmit() {
    postSubmissionStatus(content.id, userID, url, difficultyLevel, comment);
  }

  return (
    <Overlay>
      <PopUp>
        <CloseX onClick={handleClose}>X</CloseX>
        <h4> Submit for Homework: </h4>
        <h3>{content.title} </h3>
        <form onSubmit={handleSubmit} name="submission_form">
          <input
            type="url"
            placeholder="Github Repo"
            required
            onChange={(e) => setURL(e.target.value)}
          />

          <input
            type="radio"
            name="difficulty"
            onChange={(event) => handleChange(event.target as HTMLInputElement)}
            value="1"
          />
          <input
            type="radio"
            name="difficulty"
            onChange={(event) => handleChange(event.target as HTMLInputElement)}
            value="2"
          />
          <input
            type="radio"
            name="difficulty"
            onChange={(event) => handleChange(event.target as HTMLInputElement)}
            value="3"
          />
          <input
            type="radio"
            name="difficulty"
            onChange={(event) => handleChange(event.target as HTMLInputElement)}
            value="4"
          />
          <input
            type="radio"
            name="difficulty"
            onChange={(event) => handleChange(event.target as HTMLInputElement)}
            value="5"
          />

          <textarea
            required
            placeholder="Comment"
            onChange={(e) => setDifficultyLevel(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </PopUp>
    </Overlay>
  );
};

export default SubmissionPopUp;

const PopUp = styled.div`
  background-color: var(--tertiary-color);
  color: var(--tertiary-color);
  position: absolute;
  transform: translateY(-50%);
  margin-left: -150px;
  width: 30vw;
  height: 30vh;
  left: 50%;
  top: 50%;
  background-color: var(--background-color);
  padding: 40px;
  justify-content: center;
  text-align: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: var(--tertiary-color);
  background-color: rgba(0, 0, 0, 0.75);
`;

const CloseX = styled.span`
  content: "x";
  cursor: pointer;
  position: relative;
  color: var(--secondary-color);
`;
