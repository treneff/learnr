import { useEffect, useState } from 'react';

import WeeklyContent from './WeeklyContent';
import styled from 'styled-components';
interface WeekProps {
    weekNumber: number;
}

const WeekListItem: React.FC<WeekProps> = ({ weekNumber }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [weekToDisplay, setWeekToDisplay] = useState<number>(0);
    const weekListItemClickHandler = () => {
        setIsOpen(!isOpen);
        setWeekToDisplay(weekNumber)
    };


    return (
        <ListItem onClick={weekListItemClickHandler}>
            Week: {weekNumber}
            <WeeklyContent isOpen={isOpen} weekToDisplay={weekToDisplay} />
        </ListItem>
    );
};

export default WeekListItem;

const ListItem = styled.li`
    background-color: var(--secondary-color);
    margin: 5px 0px;
`;
