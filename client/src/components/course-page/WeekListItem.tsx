import WeeklyContent from './WeeklyContent';
import styled from 'styled-components';
interface WeekProps {
    weekNumber: number;
    course: any | number;
    setOpenWeekNumber: React.Dispatch<React.SetStateAction<number>>;
    setOpenDayNumber: React.Dispatch<React.SetStateAction<number>>;
    openWeekNumber: number;
}

const WeekListItem: React.FC<WeekProps> = ({
    weekNumber,
    course,
    setOpenWeekNumber,
    setOpenDayNumber,
    openWeekNumber,
}) => {
    const OpenClickHandler = () => {
        setOpenWeekNumber(weekNumber);
    };
    let counter = 0;
    const dailyNodes = course[0].days.map((dailyContent: any, index: number) => {
        if (dailyContent.weekNumber === weekNumber) {
            counter += 1;

            return (
                <WeeklyContent
                    key={index}
                    dailyContent={dailyContent}
                    setOpenDayNumber={setOpenDayNumber}
                    openWeekNumber={openWeekNumber}
                    counter={counter}
                />
            );
        } else return null;
    });

    return (
        <ListItem
            onClick={OpenClickHandler}
            openWeekNumber={openWeekNumber}
            weekNumber={weekNumber}>
            Week: {weekNumber}
            <ul>{dailyNodes}</ul>
        </ListItem>
    );
};

export default WeekListItem;

const ListItem = styled.li.attrs((props: { openWeekNumber: number; weekNumber: number }) => props)`
    background-color: #f1f1ff;
    border: #808080 solid 5px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    /* align-items:center; */
    margin: 5px 0px;
    padding: 2rem;
    border-radius: 5px;
    color: var(--text-color);
    height: ${(props) => (props.openWeekNumber === props.weekNumber ? 20 : 0)}%;
    transition: height 1s ease-in-out;
    max-height: content;
    overflow: auto;
`;
