import styled from 'styled-components';
interface DailyContentProps {
    course: any | number;
    openWeekNumber: React.Dispatch<React.SetStateAction<number>>;
    openDayNumber: React.Dispatch<React.SetStateAction<number>>;
}
const DailyContent: React.FC<DailyContentProps> = ({ course, openWeekNumber, openDayNumber }) => {
    const dailyContentNodes = course[0].days.map((dailyContent: any) => {
        if (
            dailyContent.weekNumber === openWeekNumber &&
            dailyContent.dayNumber === openDayNumber
        ) {
            return dailyContent.content.map((content: any, index: number) => {
                return (
                    <ListItem key={index}>
                        {content.title}
                        <br />
                        {content.detail}
                        <br />
                        {content.contentType}
                    </ListItem>
                );
            });
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
`;
