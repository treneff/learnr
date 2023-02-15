import React from 'react';
import styled from 'styled-components';
import DayContent from './DayContent';
import DoneIcon from '@mui/icons-material/Done';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';

const iconsToDisplay = new Map<String, JSX.Element>([
    ['courseNote', <SchoolIcon />],
    ['homework', <HomeWorkIcon />],
    ['lab', <ScienceIcon />],
]);

interface DayProps {
    content: any;
    setOpenTopicNumber: React.Dispatch<React.SetStateAction<number | undefined>>;
    openTopicNumber: number | undefined;
    userID: number;
    postCompletionStatus: any;
    completion: boolean;
    submission: boolean;
    postSubmissionStatus: any;
}
const DayListItem: React.FC<DayProps> = ({
    completion,
    content,
    setOpenTopicNumber,
    openTopicNumber,
    postCompletionStatus,
    userID,
    submission,
    postSubmissionStatus,
}) => {
    return (
        <ListItem
            openTopicNumber={openTopicNumber}
            content={content}
            style={completion || submission ? { border: '#018001 solid 5px' } : {}}
            onClick={() => {
                setOpenTopicNumber(content.id);
            }}>
            <TitleDiv>
                <InnerTitleDiv>
                    {iconsToDisplay.get(content.contentType)}
                    {content.title}
                </InnerTitleDiv>
                {completion || submission ? <DoneIcon style={{ color: '#018001' }} /> : null}
            </TitleDiv>

            <DayContent
                openTopicNumber={openTopicNumber}
                content={content}
                postCompletionStatus={postCompletionStatus}
                userID={userID}
                completion={completion}
                postSubmissionStatus={postSubmissionStatus}
                submission={submission}
            />
        </ListItem>
    );
};

export default DayListItem;

const ListItem = styled.li.attrs((props: { openTopicNumber: number; content: any }) => props)`
    background-color: #f1f1ff;
    flex-direction: column;
    display: flex;
    gap: 1rem;
    margin: 5px 0px;
    padding: 2rem;
    border-radius: 5px;
    color: var(---color);
    height: ${(props) => (props.openTopicNumber === props.content.id ? 20 : 0)}%;
    transition: height 1s ease-in-out;
    max-height: content;
    border: gray solid 5px;
    &:hover{
        cursor: pointer;
    }
    /* IF CONTENT ID MATCHES COMPLETION CONTENT ID DISPLAY BACKGROUND COLOR DIFFERENT */
`;

const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const InnerTitleDiv = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1rem;
`;
