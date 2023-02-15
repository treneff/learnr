import styled from 'styled-components';
interface WeeklyContentProps {
    dailyContent: any;
    setOpenDayNumber: React.Dispatch<React.SetStateAction<number>>;
    openWeekNumber: number;
    counter:number;
}
const WeeklyContent: React.FC<WeeklyContentProps> = ({
    dailyContent,
    setOpenDayNumber,
    openWeekNumber,
    counter
}) => {
    return (
        <Content
            onClick={() => setOpenDayNumber(dailyContent.dayNumber)}
            style={{
                maxHeight: openWeekNumber === dailyContent.weekNumber ? '100%' : '0',
                opacity: openWeekNumber === dailyContent.weekNumber ? '1' : '0',
            }}>
            Day {counter}: {dailyContent.title}
        </Content>
    );
};

export default WeeklyContent;

const Content = styled.ul`
    max-height: 0;
    opacity: 0;
    overflow:auto;
    transition: max-height 1.2s, opacity 2s ease-in-out;
`;
