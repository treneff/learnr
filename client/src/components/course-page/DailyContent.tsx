import styled from 'styled-components';
interface DailyContentProps {
    course: any | number;
    openWeekNumber: React.Dispatch<React.SetStateAction<number>>;
    openDayNumber: React.Dispatch<React.SetStateAction<number>>;
}
const DailyContent: React.FC<DailyContentProps> = ({ course, openWeekNumber, openDayNumber }) => {
    console.log(openWeekNumber);
    console.log(openDayNumber);
    console.log(course);

    const dailyContentNodes = course[0].days.map((dailyContent: any, index: number) => {
        if (
            dailyContent.weekNumber === openWeekNumber &&
            dailyContent.dayNumber === openDayNumber
        ) {
            return (
                <>
                    <ListItem>
                        {dailyContent.content[0].title}
                        {dailyContent.content[0].detail}
                    </ListItem>
                    <ListItem>Lab</ListItem>
                    <ListItem>Homework</ListItem>
                </>
            );
        } else return null;
    });

    return <DailyList>{course ? dailyContentNodes : null}</DailyList>;
};

export default DailyContent;

const DailyList = styled.ul`
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: left;
    background-color: #f5f3f3;
    padding: 2rem;
`;

const ListItem = styled.li`
    background-color: var(--secondary-color);
    display: flex;
    justify-content: space-between;
    margin: 5px 0px;
    padding: 2rem;
    border-radius: 5px;
    color: var(--text-color);
`;
