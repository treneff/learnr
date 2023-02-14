import React from 'react';
import styled from 'styled-components';
import DayContent from './DayContent';

interface DayProps {
    content: any;
    setOpenTopicNumber: React.Dispatch<React.SetStateAction<number | undefined>>;
    openTopicNumber: number | undefined;
    userID: number;
    postCompletionStatus: any;
    completion: boolean;
}
const DayListItem: React.FC<DayProps> = ({
    completion,
    content,
    setOpenTopicNumber,
    openTopicNumber,
    postCompletionStatus,
    userID,
}) => {
    return (
        <ListItem
            openTopicNumber={openTopicNumber}
            content={content}
            style={completion ? { backgroundColor: 'red' } : {}}
            onClick={() => {
                setOpenTopicNumber(content.id);
            }}>
            <div>
                {content.title}
            </div>

            <DayContent openTopicNumber={openTopicNumber} content={content} postCompletionStatus={postCompletionStatus} userID={userID}/>
        </ListItem>
    );
};

export default DayListItem;

const ListItem = styled.li.attrs((props: { openTopicNumber: number; content: any }) => props)`
    background-color: var(--secondary-color);
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    margin: 5px 0px;
    padding: 2rem;
    border-radius: 5px;
    color: var(--text-color);
    height: ${(props) => (props.openTopicNumber === props.content.id ? 15 : 0)}%;
    transition: height 1s ease-in-out;
    max-height: content;
    /* IF CONTENT ID MATCHES COMPLETION CONTENT ID DISPLAY BACKGROUND COLOR DIFFERENT */
`;
