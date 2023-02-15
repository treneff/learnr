import { useState } from "react";
import styled from "styled-components";
import { PopupOverlay, PopUp, CloseX } from "../../GlobalStyles";

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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    postSubmissionStatus(content.id, userID, url, difficultyLevel, comment);
    handleClose();
  };

  return (
    <PopupOverlay>
      <PopUp>
        <CloseX onClick={handleClose}>X</CloseX>
        <FormContainer>
          <h3> Submit for Homework: </h3>
          <h2>{content.title} </h2>
          <br />
          <form onSubmit={handleSubmit} name="submission_form">
            <ul className="form-wrapper">
              <p> Url of your GitHub Repo</p>
              <li className="form-row">
                <br></br>
                <input
                  type="url"
                  placeholder="eg. https://github.com/codeclan/e61_classnotes"
                  required
                  onChange={(e) => setURL(e.target.value)}
                />
              </li>
              <br />

              <p> HOW CHALLENGING did you find the homework assignment?</p>
              <li className="form-row">
                <label htmlFor="difficulty1">1</label>
                <input
                  type="radio"
                  name="difficulty"
                  onChange={(event) =>
                    handleChange(event.target as HTMLInputElement)
                  }
                  value="1"
                />
                <label htmlFor="difficulty2">2</label>
                <input
                  type="radio"
                  name="difficulty"
                  onChange={(event) =>
                    handleChange(event.target as HTMLInputElement)
                  }
                  value="2"
                />
                <label htmlFor="difficulty3">3</label>
                <input
                  type="radio"
                  name="difficulty"
                  onChange={(event) =>
                    handleChange(event.target as HTMLInputElement)
                  }
                  value="3"
                />
                <label htmlFor="difficulty4">4</label>
                <input
                  type="radio"
                  name="difficulty"
                  onChange={(event) =>
                    handleChange(event.target as HTMLInputElement)
                  }
                  value="4"
                />
                <label htmlFor="difficulty5">5</label>
                <input
                  type="radio"
                  name="difficulty"
                  onChange={(event) =>
                    handleChange(event.target as HTMLInputElement)
                  }
                  value="5"
                />
              </li>
              <br />
              <p>What would you like to recap?</p>
              <li className="form-row">
                <textarea
                  required
                  placeholder="Comment"
                  onChange={(e) => setComment(e.target.value)}
                />
              </li>
              <li className="form-row">
                <button type="submit">Submit</button>
              </li>
            </ul>
          </form>
        </FormContainer>
      </PopUp>
    </PopupOverlay>
  );
};

export default SubmissionPopUp;

const FormContainer = styled.div`
  .form-row {
    display: flex;
    justify-content: flex-end;
    padding: 0.4rem;
  }

  .form-row > input {
    flex: 2;
  }

  .form-row > input,
  .form-row > button {
    padding: 0.5rem;
  }

  .form-row > button {
    background: var(--tertiary-color);
    color: var(--background-color);
    border: 0;
    transition-duration: 0.4s;
    margin: 1rem;
    width: 100%;
  }

  .form-row > button:hover {
    background-color: var(--secondary-color);
    color: var(--tertiary-color);
  }

  .form-row > textarea {
    flex: 1;
  }
`;
