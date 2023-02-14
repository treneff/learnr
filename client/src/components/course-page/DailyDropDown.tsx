import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuthValue } from '../../AuthContext';
import CompletionsService from '../../service/CompletionService';
import StudentService from '../../service/StudentService';
import DayListItem from './DayListItem';
interface DailyDropDownProps {
    course: any;
    openWeekNumber: React.Dispatch<React.SetStateAction<number>>;
    openDayNumber: React.Dispatch<React.SetStateAction<number>>;
}
const DailyDropDown: React.FC<DailyDropDownProps> = ({ course, openWeekNumber, openDayNumber }) => {
    const [openTopicNumber, setOpenTopicNumber] = useState<number>();
    const [userID, setUserID] = useState<any>();
    const { currentUser } = useAuthValue();
    const [completions, setCompletions] = useState([]);
    const [colorChangeListener, setColorChangeListener] = useState<number>(0)
    useEffect(() => {
        StudentService.getStudentByEmail(currentUser.email).then((profile) => {
            setUserID(profile[0].id);
            console.log(profile[0].id);
        });
    });

    useEffect(() => {
        CompletionsService.getCompletionsByStudentId(userID).then((completions) => {
            setCompletions(completions);
        });
    }, [userID, colorChangeListener]);

    const postCompletionStatus = (contentID: number, userID: number) => {
        CompletionsService.postCompletion(contentID, userID);
        // This is definitely wrong but it works, try and refactor
        setColorChangeListener(colorChangeListener+1);
    };

    // Map through completions to create our list items
    const mapThroughCompletions = (contentId: number) => {
        return completions.some((completion: any) => completion.contentId === contentId);
    };

    // Map through content to trigger completions function
    const mapThroughDailyContents = (dailyContent: any) => {
        return dailyContent.content.map((content: any, index: number) => {
            return (
                <DayListItem
                    key={index}
                    completion={mapThroughCompletions(content.id) ? true : false}
                    content={content}
                    userID={userID}
                    setOpenTopicNumber={setOpenTopicNumber}
                    openTopicNumber={openTopicNumber}
                    postCompletionStatus={postCompletionStatus}
                />
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

    return <DailyList>{course ? dailyContentNodes(course) : null}</DailyList>;
};

export default DailyDropDown;

const DailyList = styled.ul`
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: left;
    background-color: var(--background-color);
    padding: 2rem;
    overflow: auto;
`;
