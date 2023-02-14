import styled from 'styled-components';
interface WeeklyContentProps {
    dailyContent: any;
    setOpenDayNumber: React.Dispatch<React.SetStateAction<number>>;
    openWeekNumber: number;
}
const WeeklyContent: React.FC<WeeklyContentProps> = ({
    dailyContent,
    setOpenDayNumber,
    openWeekNumber,
}) => {
    return (
        <Content
            onClick={() => setOpenDayNumber(dailyContent.dayNumber)}
            style={{
                maxHeight: openWeekNumber === dailyContent.weekNumber ? '100%' : '0',
                opacity: openWeekNumber === dailyContent.weekNumber ? '1' : '0',
            }}>
            {dailyContent.title}
        </Content>
    );
};

export default WeeklyContent;

const Content = styled.ul`
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 1.2s, opacity 2s ease-in-out;
`;
