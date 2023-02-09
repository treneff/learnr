import styled from 'styled-components';

import WeekListItem from './WeekListItem';

const WeeklyDropDown: React.FC = () => {
    return (
        <WeeklyList>
            <WeekListItem weekNumber = {1}/>
            <WeekListItem weekNumber = {2}/>
            <WeekListItem weekNumber = {3}/>
            <WeekListItem weekNumber = {4}/>
            <WeekListItem weekNumber = {5}/>
        </WeeklyList>
    );
};

export default WeeklyDropDown;

const WeeklyList = styled.ul`
    width: 30vw;
`;
