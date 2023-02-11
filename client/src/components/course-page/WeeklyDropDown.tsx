import styled from 'styled-components';
import WeekListItem from './WeekListItem';
interface CourseProps {
    course: any | number;
    setOpenWeekNumber: React.Dispatch<React.SetStateAction<number>>;
    setOpenDayNumber: React.Dispatch<React.SetStateAction<number>>;
    openWeekNumber:number;
}

const WeeklyDropDown: React.FC<CourseProps> = ({ course, setOpenWeekNumber, setOpenDayNumber,openWeekNumber }) => {
    let currentWeek = 0;

    const weeklyNodes = course[0].days.map((weeklyContent: any, index: number) => {
        if (weeklyContent.weekNumber !== currentWeek) {
            currentWeek = weeklyContent.weekNumber;
            return (
                <WeekListItem
                    key={index}
                    weekNumber={weeklyContent.weekNumber}
                    course={course}
                    setOpenWeekNumber={setOpenWeekNumber}
                    setOpenDayNumber={setOpenDayNumber}
                    openWeekNumber = {openWeekNumber}
                />
            );
        } else return null;
    });

    return <WeeklyList>{course ? weeklyNodes : null}</WeeklyList>;
};

export default WeeklyDropDown;

const WeeklyList = styled.ul`
    width: 40vw;
    background-color: #f5f3f3;
    padding: 2rem;
    overflow: auto;
`;
