import React, { useState } from "react";
import styled from "styled-components";
import SubmissionPopUp from "./SubmissionPopUp";

interface DayContentProps {
  openTopicNumber: number | undefined;
  content: any;
  postCompletionStatus: any;
  userID: any;
  completion: boolean;
  submission: boolean;
  postSubmissionStatus: any;
}

const DayContent: React.FC<DayContentProps> = ({
  openTopicNumber,
  content,
  postCompletionStatus,
  userID,
  completion,
  postSubmissionStatus,
  submission,
}) => {
  const [open, setOpen] = useState(false);

  const togglePopUp = () => {
    setOpen(!open);
  };

  return (
    <Content
      style={{
        maxHeight: openTopicNumber === content.id ? "100%" : "0",
        opacity: openTopicNumber === content.id ? "1" : "0",
      }}
    >
      {content.detail}
      {content.contentType === "homework" ? (
        !submission ? (
          <>
            <button onClick={togglePopUp}>Submit</button>
            {open && (
              <SubmissionPopUp
                userID={userID}
                content={content}
                postSubmissionStatus={postSubmissionStatus}
                handleClose={togglePopUp}
              />
            )}
          </>
        ) : null
      ) : (
        !completion && (
          <button onClick={() => postCompletionStatus(content.id, userID)}>
            Complete
          </button>
        )
      )}
    </Content>
  );
};

export default DayContent;

const Content = styled.ul`
  max-height: 0;
  opacity: 0;
  overflow:auto;
  transition: max-height 1.2s, opacity 2s ease-in-out;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;
