import styled from 'styled-components';

import WeekListItem from './WeekListItem';
interface CourseProps {
    course: any;
    getOpenContent:Function 
}

const WeeklyDropDown: React.FC<CourseProps> = (course,getOpenContent) => {
    getOpenContent(1)
    return (
        <WeeklyList>
            <WeekListItem weekNumber={1} course={course}  />
            <WeekListItem weekNumber={2} course={course} />
            <WeekListItem weekNumber={3} course={course} />
            <WeekListItem weekNumber={4} course={course} />
            <WeekListItem weekNumber={5} course={course} />
        </WeeklyList>
    );
};

export default WeeklyDropDown;

const WeeklyList = styled.ul`
    width: 30vw;
`;
