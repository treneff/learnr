import styled from "styled-components";

interface SubmissionProps {
    userID: number;
    content: any;
    postSubmissionStatus: any;
}

// (contentId:number, userID:number, url:string, difficulty_level:number, comment:string)
const SubmissionPopUp: React.FC<SubmissionProps> = ({userID, content, postSubmissionStatus}) => {
    return(
        <Overlay>
        <PopUp>
     <p>I am the popeup</p>
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
`

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
    content: 'x';
    cursor: pointer;
    position: relative;
    color: var(--secondary-color);
`