import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuthValue } from '../../AuthContext';
import CompletionsService from '../../service/CompletionService';
import StudentService from '../../service/StudentService';
interface DailyContentProps {
    course: any;
    openWeekNumber: React.Dispatch<React.SetStateAction<number>>;
    openDayNumber: React.Dispatch<React.SetStateAction<number>>;
}
const DailyContent: React.FC<DailyContentProps> = ({ course, openWeekNumber, openDayNumber }) => {
    const [open, setOpen] = useState<any>(false);
    const [userID, setUserID] = useState<any>();
    const { currentUser } = useAuthValue();
    const [completions, setCompletions] = useState([]);

    useEffect(() => {
        StudentService.getStudentByEmail(currentUser.email).then((profile) => {
            setUserID(profile[0].id);
            console.log(profile[0].id);
        });
    }, []);

    useEffect(() => {
        CompletionsService.getCompletionsByStudentId(userID).then((completions) => {
            setCompletions(completions);
            console.log(userID);
        });
    }, [userID]);

    const postCompletionStatus = (contentID: number, userID: number) => {
        CompletionsService.postCompletion(contentID, userID);
    };

    // Map through completions to create our list items
    const mapThroughCompletions = (contentId: number) => {
        return completions.some((completion: any) => completion.contentId === contentId);
    };

    // Map through content to trigger completions function
    const mapThroughDailyContents = (dailyContent: any) => {
        return dailyContent.content.map((content: any, index: number) => {
            return mapThroughCompletions(content.id) ? (
                <ListItem
                    key={index}
                    style={{ backgroundColor: 'red', height: open ? '100%' : '0' }}
                    onClick={() => setOpen(!open)}>
                    {content.title}
                    <button onClick={() => postCompletionStatus(content.id, userID)}></button>
                    <br />
                    {content.detail}
                    <br />
                    {content.contentType}
                </ListItem>
            ) : (
                <ListItem key={index}>
                    {content.title}
                    <button onClick={() => postCompletionStatus(content.id, userID)}></button>
                    <br />
                    {content.detail}
                    <br />
                    {content.contentType}
                </ListItem>
            );
        });
    };

    // Map through days dailyContentNodes function
    const dailyContentNodes = (course: any) => {
        return course[0].days.map((dailyContent: any) => {
            if (
                dailyContent.weekNumber === openWeekNumber &&
                dailyContent.dayNumber === openDayNumber
            ) {
                return mapThroughDailyContents(dailyContent);
            }
        });
    };

    return (
        <DailyList>{course && completions && userID ? dailyContentNodes(course) : null}</DailyList>
    );
};

export default DailyContent;

const DailyList = styled.ul`
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: left;
    background-color: #f5f3f3;
    padding: 2rem;
    overflow: auto;
`;

const ListItem = styled.li`
    background-color: var(--secondary-color);
    display: flex;
    justify-content: space-between;
    margin: 5px 0px;
    padding: 2rem;
    border-radius: 5px;
    color: var(--text-color);
    height: 0;
    overflow: auto;
    transition: height 1s ease-in-out;
    /* IF CONTENT ID MATCHES COMPLETION CONTENT ID DISPLAY BACKGROUND COLOR DIFFERENT */
`;
