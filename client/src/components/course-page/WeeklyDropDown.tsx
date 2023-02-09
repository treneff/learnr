import styled from 'styled-components';

import WeekListItem from './WeekListItem';

const WeeklyDropDown: React.FC = () => {
    return (
        <WeeklyList>
            <WeekListItem />
            <WeekListItem />
            <WeekListItem />
            <WeekListItem />
            <WeekListItem />
        </WeeklyList>
    );
};

export default WeeklyDropDown;

const WeeklyList = styled.ul`
    width: 30vw;
`;
